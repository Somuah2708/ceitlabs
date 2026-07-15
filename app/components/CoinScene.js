"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function drawCoinFace(ctx, size) {
  const c = size / 2;

  ctx.fillStyle = "#9c7a49";
  ctx.beginPath();
  ctx.arc(c, c, c, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(58, 42, 18, 0.55)";
  ctx.lineWidth = 3;
  [0.94, 0.84].forEach((r) => {
    ctx.beginPath();
    ctx.arc(c, c, c * r, 0, Math.PI * 2);
    ctx.stroke();
  });

  const ticks = 60;
  ctx.strokeStyle = "rgba(58, 42, 18, 0.4)";
  ctx.lineWidth = 2;
  for (let i = 0; i < ticks; i += 1) {
    const angle = (i / ticks) * Math.PI * 2;
    const rOuter = c * 0.94;
    const rInner = c * 0.895;
    ctx.beginPath();
    ctx.moveTo(c + Math.cos(angle) * rOuter, c + Math.sin(angle) * rOuter);
    ctx.lineTo(c + Math.cos(angle) * rInner, c + Math.sin(angle) * rInner);
    ctx.stroke();
  }

  ctx.save();
  ctx.translate(c, c);
  ctx.fillStyle = "rgba(42, 30, 13, 0.85)";
  ctx.font = "11px Georgia, serif";
  const label = "CENTRAL INNOVATIVE TECHNOLOGIES  •  ";
  const radius = c * 0.72;
  for (let i = 0; i < label.length; i += 1) {
    const angle = (i / label.length) * Math.PI * 2 - Math.PI / 2;
    ctx.save();
    ctx.rotate(angle);
    ctx.translate(0, -radius);
    ctx.rotate(Math.PI / 2);
    ctx.fillText(label[i], 0, 0);
    ctx.restore();
  }
  ctx.restore();

  ctx.fillStyle = "rgba(38, 27, 11, 0.9)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "italic 44px Georgia, serif";
  ctx.fillText("C · I · T", c, c - 4);
}

function makeCoinTexture() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  drawCoinFace(ctx, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

function makeFieldParticles(count, spreadX, spreadY) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() * 2 - 1) * spreadX;
    positions[i * 3 + 1] = (Math.random() * 2 - 1) * spreadY;
    positions[i * 3 + 2] = (Math.random() * 2 - 1) * 2.4 - 1;
  }
  return positions;
}

function AmbientField() {
  const { viewport } = useThree();
  const points = useRef(null);
  const spreadX = Math.max(viewport.width * 0.48, 3);
  const spreadY = Math.max(viewport.height * 0.46, 2.4);
  const positions = useMemo(() => makeFieldParticles(140, spreadX, spreadY), [spreadX, spreadY]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.02;
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#c9a468"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function makeOrbitParticles(count) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const radius = 1.5 + Math.random() * 0.9;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = radius * Math.cos(phi) * 0.6;
  }
  return positions;
}

function GoldDust() {
  const points = useRef(null);
  const positions = useMemo(() => makeOrbitParticles(70), []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.05;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#d8b878"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function OrbitRing({ radius, tilt, speed, opacity }) {
  const ring = useRef(null);

  useFrame((_state, delta) => {
    if (!ring.current) return;
    ring.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={[tilt, 0, 0]}>
      <mesh ref={ring}>
        <torusGeometry args={[radius, 0.008, 8, 128]} />
        <meshStandardMaterial
          color="#b08d57"
          metalness={0.6}
          roughness={0.35}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

function GlowHalo() {
  const texture = useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, "rgba(201, 164, 104, 0.4)");
    gradient.addColorStop(1, "rgba(201, 164, 104, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <mesh position={[0, 0, -1.6]}>
      <circleGeometry args={[2.6, 64]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} />
    </mesh>
  );
}

function Coin() {
  const group = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const faceTexture = useMemo(() => makeCoinTexture(), []);

  useEffect(() => {
    const onMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.32;
    const targetX = 0.32 + pointer.current.y * 0.18;
    const targetZ = -pointer.current.x * 0.12;
    g.rotation.x += (targetX - g.rotation.x) * 0.04;
    g.rotation.z += (targetZ - g.rotation.z) * 0.04;
    g.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.09;
  });

  const materials = useMemo(
    () => [
      new THREE.MeshStandardMaterial({
        color: "#8a6a3d",
        metalness: 0.55,
        roughness: 0.4,
        emissive: "#1c130a",
        emissiveIntensity: 0.12,
      }),
      new THREE.MeshStandardMaterial({
        map: faceTexture,
        metalness: 0.45,
        roughness: 0.36,
        emissive: "#1c130a",
        emissiveIntensity: 0.1,
      }),
      new THREE.MeshStandardMaterial({
        map: faceTexture,
        metalness: 0.45,
        roughness: 0.36,
        emissive: "#1c130a",
        emissiveIntensity: 0.1,
      }),
    ],
    [faceTexture]
  );

  return (
    <group ref={group} rotation={[0.32, 0, 0]} scale={0.85}>
      <mesh material={materials} castShadow receiveShadow>
        <cylinderGeometry args={[1.55, 1.55, 0.22, 72]} />
      </mesh>
    </group>
  );
}

function Scene() {
  const { viewport } = useThree();
  const halfWidth = viewport.width / 2;
  const offsetX = Math.max(0, Math.min(halfWidth - 2.7, halfWidth * 0.32));

  return (
    <>
      <AmbientField />
      <group position={[offsetX, 0, 0]}>
        <GlowHalo />
        <OrbitRing radius={1.55} tilt={1.05} speed={0.22} opacity={0.4} />
        <OrbitRing radius={1.9} tilt={1.3} speed={-0.14} opacity={0.22} />
        <GoldDust />
        <Coin />
      </group>
    </>
  );
}

export default function CoinScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 10], fov: 24 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.55} color="#f4e9d8" />
      <directionalLight position={[3, 4, 5]} intensity={1.9} color="#fff2dd" />
      <pointLight position={[-4, -1.5, -2]} intensity={0.5} color="#4a6a8f" />
      <pointLight position={[2, -3, 3]} intensity={0.7} color="#c9a468" />
      <pointLight position={[0, 2.5, -3]} intensity={0.4} color="#e8c98f" />

      <Scene />
    </Canvas>
  );
}
