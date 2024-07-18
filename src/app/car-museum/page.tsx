"use client";
import Title from "../title";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Home() {
  const ref = useRef<Mesh>(null!);
  return (
    <>
      <Title title="Car Museum" />
      <Canvas className="w-full h-[30rem] bg-black shadow-[inset_0px_0px_5px_5px_rgb(255,255,255,1.00)]">
        <mesh ref={ref}>
          <circleGeometry attach="geometry" args={[2, 1000, 2]} />
        </mesh>
      </Canvas>
    </>
  );
}
