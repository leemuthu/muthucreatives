"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ASSEMBLE_DURATION = 1.1;

type Slab = {
  size: [number, number];
  position: [number, number, number];
  kind: "panel" | "image" | "button";
  delay: number;
};

// The parts of a webpage, floating apart in z like an exploded
// engineering drawing: nav, headline, copy, hero image, CTA, cards.
const slabs: Slab[] = [
  { size: [3.4, 0.3], position: [0, 2.15, 0.1], kind: "panel", delay: 0 },
  { size: [2.5, 0.42], position: [-0.45, 1.45, 0.32], kind: "panel", delay: 0.12 },
  { size: [1.8, 0.42], position: [-0.8, 0.92, 0.4], kind: "panel", delay: 0.2 },
  { size: [1.0, 0.34], position: [-1.2, 0.28, 0.62], kind: "button", delay: 0.55 },
  { size: [3.4, 1.5], position: [0, -0.75, 0.18], kind: "image", delay: 0.32 },
  { size: [1.04, 1.15], position: [-1.18, -2.25, 0.26], kind: "panel", delay: 0.42 },
  { size: [1.04, 1.15], position: [0, -2.25, 0.44], kind: "panel", delay: 0.5 },
  { size: [1.04, 1.15], position: [1.18, -2.25, 0.34], kind: "panel", delay: 0.58 },
];

const faceColors: Record<Slab["kind"], string> = {
  panel: "#2b2823",
  image: "#322e28",
  button: "#f14e14",
};

function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

function ExplodedSite() {
  const groupRef = useRef<THREE.Group>(null);
  const slabRefs = useRef<(THREE.Group | null)[]>([]);
  const elapsed = useRef(0);

  const scattered = useMemo(
    () =>
      slabs.map((slab, index) => ({
        x: slab.position[0] * 1.4 + (index % 2 === 0 ? 1.6 : -1.4),
        y: slab.position[1] * 1.3 - 2.2,
        z: slab.position[2] + 3.2 + index * 0.4,
      })),
    [],
  );

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;
    // Accumulate our own clock so the assembly survives the canvas
    // pausing and resuming when it leaves and re-enters the viewport.
    elapsed.current += Math.min(delta, 0.05);
    const time = elapsed.current;
    const scroll = typeof window === "undefined" ? 0 : window.scrollY;

    slabs.forEach((slab, index) => {
      const mesh = slabRefs.current[index];
      if (!mesh) return;
      const progress = easeOutQuint(
        THREE.MathUtils.clamp((time - slab.delay) / ASSEMBLE_DURATION, 0, 1),
      );
      const drift = Math.sin(time * 0.6 + index * 1.7) * 0.03;
      const spread = 1 + scroll * 0.0016;
      mesh.position.x = THREE.MathUtils.lerp(scattered[index].x, slab.position[0], progress);
      mesh.position.y =
        THREE.MathUtils.lerp(scattered[index].y, slab.position[1], progress) + drift;
      mesh.position.z = THREE.MathUtils.lerp(
        scattered[index].z,
        slab.position[2] * spread,
        progress,
      );
    });

    const targetY = -0.62 + state.pointer.x * 0.1 + Math.sin(time * 0.12) * 0.04;
    const targetX = 0.34 + state.pointer.y * -0.06;
    group.rotation.y += (targetY - group.rotation.y) * 0.05;
    group.rotation.x += (targetX - group.rotation.x) * 0.05;
    group.position.y = scroll * 0.0011;
  });

  return (
    <group
      ref={groupRef}
      position={[1.95, 0, 0]}
      rotation={[0.34, -0.62, 0.04]}
      scale={0.62}
    >
      {slabs.map((slab, index) => (
        <group
          key={index}
          ref={(node) => {
            slabRefs.current[index] = node;
          }}
        >
          <mesh>
            <boxGeometry args={[slab.size[0], slab.size[1], 0.07]} />
            <meshStandardMaterial
              color={faceColors[slab.kind]}
              roughness={slab.kind === "button" ? 0.35 : 0.6}
              metalness={0.08}
              emissive={slab.kind === "button" ? "#f14e14" : "#000000"}
              emissiveIntensity={slab.kind === "button" ? 0.85 : 0}
            />
          </mesh>
          <lineSegments>
            <edgesGeometry
              args={[new THREE.BoxGeometry(slab.size[0], slab.size[1], 0.07)]}
            />
            <lineBasicMaterial
              color={slab.kind === "button" ? "#f14e14" : "#f2eee5"}
              transparent
              opacity={slab.kind === "button" ? 0.9 : 0.38}
            />
          </lineSegments>
        </group>
      ))}
      <pointLight position={[-1.2, 0.28, 1.6]} intensity={2.2} color="#f14e14" distance={4} />
    </group>
  );
}

export default function ExplodedSiteCanvas({ active }: { active: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7.5], fov: 34 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.85} color="#efe9dc" />
      <directionalLight position={[4, 5, 6]} intensity={1.9} color="#efe9dc" />
      <directionalLight position={[-6, -2, 4]} intensity={0.4} color="#5b8db8" />
      <ExplodedSite />
    </Canvas>
  );
}
