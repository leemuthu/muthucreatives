"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GRID_COLS = 20;
const GRID_ROWS = 11;
const SPACING = 0.6;
const BLOCK_SIZE = 0.42;
const RISE_DURATION = 1.4;
const RISE_MAX_DELAY = 1.1;
const PARTICLE_COUNT = 140;

function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Block = {
  x: number;
  z: number;
  height: number;
  delay: number;
};

function buildSkyline(): Block[] {
  const random = seededRandom(1913);
  const blocks: Block[] = [];

  for (let col = 0; col < GRID_COLS; col++) {
    for (let row = 0; row < GRID_ROWS; row++) {
      const x = (col - GRID_COLS / 2) * SPACING;
      const z = (row - GRID_ROWS / 2) * SPACING;

      // Downtown cluster: blocks rise toward a peak right of center,
      // with noise so the silhouette reads as a skyline, not a bell curve.
      const distanceFromPeak = Math.hypot(x - 1.4, z + 0.4);
      const clusterHeight = Math.max(0, 2.6 - distanceFromPeak * 0.75);
      const noise = random() * 0.9;
      const height = 0.15 + clusterHeight * (0.4 + random() * 0.6) + noise * 0.35;

      // The city builds outward from the peak on load.
      const delay = (distanceFromPeak / 7) * RISE_MAX_DELAY + random() * 0.15;

      blocks.push({ x, z, height, delay });
    }
  }

  return blocks;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function buildEdgeGeometry(blocks: Block[]) {
  // Brass wireframe caps on the tallest towers only — blueprint accents,
  // not a full wireframe city.
  const towers = [...blocks].sort((a, b) => b.height - a.height).slice(0, 26);
  const positions: number[] = [];
  const half = BLOCK_SIZE / 2;

  for (const block of towers) {
    const { x, z, height } = block;
    const y = height;
    const corners = [
      [x - half, y, z - half],
      [x + half, y, z - half],
      [x + half, y, z + half],
      [x - half, y, z + half],
    ];
    for (let i = 0; i < 4; i++) {
      const a = corners[i];
      const b = corners[(i + 1) % 4];
      positions.push(a[0], a[1], a[2], b[0], b[1], b[2]);
      // Short vertical ticks down each top corner.
      positions.push(a[0], a[1], a[2], a[0], a[1] - 0.35, a[2]);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

function SkylineField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const riseDone = useRef(false);
  const matrix = useMemo(() => new THREE.Matrix4(), []);

  const blocks = useMemo(() => buildSkyline(), []);
  const edgeGeometry = useMemo(() => buildEdgeGeometry(blocks), [blocks]);

  const writeMatrices = (progress: number) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    blocks.forEach((block, index) => {
      const local = THREE.MathUtils.clamp(
        (progress - block.delay) / RISE_DURATION,
        0,
        1,
      );
      const height = Math.max(block.height * easeOutCubic(local), 0.001);
      matrix.makeScale(1, height / BLOCK_SIZE, 1);
      matrix.setPosition(block.x, height / 2, block.z);
      mesh.setMatrixAt(index, matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  };

  useLayoutEffect(() => {
    writeMatrices(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocks]);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    const time = state.clock.elapsedTime;

    if (!riseDone.current) {
      writeMatrices(time);
      if (time > RISE_MAX_DELAY + RISE_DURATION + 0.3) {
        writeMatrices(Number.POSITIVE_INFINITY);
        riseDone.current = true;
      }
    }

    const edges = edgesRef.current;
    if (edges) {
      const material = edges.material as THREE.LineBasicMaterial;
      const target = time > RISE_MAX_DELAY + RISE_DURATION * 0.7 ? 0.55 : 0;
      material.opacity += (target - material.opacity) * 0.03;
    }

    const scroll = typeof window === "undefined" ? 0 : window.scrollY;
    const targetY =
      state.pointer.x * 0.14 + Math.sin(time * 0.08) * 0.06 + scroll * 0.00018;
    const targetX = state.pointer.y * -0.05 + scroll * 0.00012;
    group.rotation.y += (targetY - group.rotation.y) * 0.04;
    group.rotation.x += (targetX - group.rotation.x) * 0.04;
    group.position.y = -1.1 - scroll * 0.0012;
  });

  return (
    <group ref={groupRef} position={[0.8, -1.1, 0]} rotation={[0.05, -0.35, 0]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, blocks.length]}>
        <boxGeometry args={[BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE]} />
        <meshStandardMaterial color="#221f1b" roughness={0.55} metalness={0.4} />
      </instancedMesh>
      <lineSegments ref={edgesRef} geometry={edgeGeometry}>
        <lineBasicMaterial color="#c9a870" transparent opacity={0} fog={false} />
      </lineSegments>
    </group>
  );
}

function BrassDust() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const random = seededRandom(77);
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const speeds = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (random() - 0.5) * 14;
      positions[i * 3 + 1] = random() * 5 - 1;
      positions[i * 3 + 2] = (random() - 0.5) * 7;
      speeds[i] = 0.08 + random() * 0.2;
    }
    return { positions, speeds };
  }, []);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points) return;
    const attribute = points.geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let y = attribute.getY(i) + speeds[i] * delta;
      if (y > 4.5) y = -1;
      attribute.setY(i, y);
    }
    attribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} position={[0.8, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#c9a870"
        size={0.025}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function SkylineCanvas({ active }: { active: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.5]}
      camera={{ position: [0, 2.1, 8.2], fov: 32 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <fog attach="fog" args={["#131313", 6.5, 14]} />
      <ambientLight intensity={0.25} color="#8f8574" />
      <directionalLight position={[6, 4, 3]} intensity={3.1} color="#c9a870" />
      <directionalLight position={[-5, 2, -2]} intensity={0.35} color="#4a5568" />
      <SkylineField />
      <BrassDust />
    </Canvas>
  );
}
