"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GRID_COLS = 20;
const GRID_ROWS = 11;
const SPACING = 0.6;
const BLOCK_SIZE = 0.42;

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

      blocks.push({ x, z, height });
    }
  }

  return blocks;
}

function SkylineField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const blocks = useMemo(() => buildSkyline(), []);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const matrix = new THREE.Matrix4();
    blocks.forEach((block, index) => {
      matrix.makeScale(1, block.height / BLOCK_SIZE, 1);
      matrix.setPosition(block.x, block.height / 2, block.z);
      mesh.setMatrixAt(index, matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }, [blocks]);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    const time = state.clock.elapsedTime;
    const targetY = state.pointer.x * 0.14 + Math.sin(time * 0.08) * 0.06;
    const targetX = state.pointer.y * -0.05;
    group.rotation.y += (targetY - group.rotation.y) * 0.04;
    group.rotation.x += (targetX - group.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef} position={[0.8, -1.1, 0]} rotation={[0.05, -0.35, 0]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, blocks.length]}>
        <boxGeometry args={[BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE]} />
        <meshStandardMaterial color="#221f1b" roughness={0.55} metalness={0.4} />
      </instancedMesh>
    </group>
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
      <directionalLight position={[6, 4, 3]} intensity={2.4} color="#c9a870" />
      <directionalLight position={[-5, 2, -2]} intensity={0.35} color="#4a5568" />
      <SkylineField />
    </Canvas>
  );
}
