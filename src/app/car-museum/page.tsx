"use client";
import Title from "../title";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Stage,
  PresentationControls,
  Center,
  CameraControls,
} from "@react-three/drei";
import { useRef, useState } from "react";

function BMW() {
  const { nodes, materials } = useGLTF("models/bmw.glb");
  return (
    <group dispose={null}>
      <group position={[-286.371, 0, 164.751]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Meshesblack161Mtl}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Meshespiggrill1Mtl}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Mesheszx1Mtl}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Mesheszx1Mtl}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Mesheswhite41Mtl}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Meshesraidiator1Mtl}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.Meshesinterior71Mtl}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.Meshespillars1Mtl}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.Meshespillars1Mtl}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.Meshesheadlight51Mtl}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.Mesheslogo11Mtl}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.Meshesdash11Mtl}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.Mesheschrome51Mtl}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.Meshesredlight1Mtl}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.Meshesinterior231Mtl}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.Meshesinterior181Mtl}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.Mesheslight51Mtl}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.Meshesengine51Mtl}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.Meshesled11Mtl}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.Meshesbody151Mtl}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.Meshesblack151Mtl}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.Mesheswindows1Mtl}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.Mesheslogo31Mtl}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.Meshesled111Mtl}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.Mesheslivery1Mtl}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.Meshestail71Mtl}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.Meshesff41Mtl}
        />
      </group>
      <group position={[-286.371, 0, 164.751]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.Caliper1Mtl}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials.Meshesm8rim1Mtl}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.Meshesm8rim0011Mtl}
        />
      </group>
    </group>
  );
}

export default function Home() {
  const [rotate, setRotate] = useState(true);
  const [x, setX] = useState(0);

  return (
    <>
      <Title title="Car Museum" />
      <div className="relative mb-5">
        <Canvas
          dpr={[1, 2]}
          className="w-full h-[30rem] bg-black touch-none"
          camera={{ fov: 45, position: [30, 10, 10] }}
          onClick={() => setRotate(false)}
        >
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            maxDistance={30}
            autoRotate={rotate}
            makeDefault
          />
          <ambientLight intensity={0.2} />
          <spotLight
            position={[20, 30, 20]}
            angle={0.4}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <spotLight
            position={[-20, 30, -20]}
            angle={0.4}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <spotLight
            position={[20, 30, -20]}
            angle={0.4}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <spotLight
            position={[-20, 30, 20]}
            angle={0.4}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          {/* <directionalLight
            color={"white"}
            position={[10, 10, 10]}
            intensity={5}
          />
          <directionalLight
            color={"white"}
            position={[-10, 10, -10]}
            intensity={5}
          /> */}
          <Center position={[0 - x, -100, 0]} top>
            <Center bottom>
              <mesh rotation={[0, 0, 0]} receiveShadow>
                <cylinderGeometry args={[12, 12, 100, 100]} />
                <meshStandardMaterial color="red" />
              </mesh>
            </Center>
            <Center top>
              <BMW />
            </Center>
          </Center>
          <Center position={[50 - x, -100, 0]} top>
            <Center bottom>
              <mesh rotation={[0, 0, 0]} receiveShadow>
                <cylinderGeometry args={[12, 12, 100, 100]} />
                <meshStandardMaterial color="red" />
              </mesh>
            </Center>
            <Center top>
              <BMW />
            </Center>
          </Center>
          <Center position={[100 - x, -100, 0]} top>
            <Center bottom>
              <mesh rotation={[0, 0, 0]} receiveShadow>
                <cylinderGeometry args={[12, 12, 100, 100]} />
                <meshStandardMaterial color="red" />
              </mesh>
            </Center>
            <Center top>
              <BMW />
            </Center>
          </Center>
          <Center position={[150 - x, -100, 0]} top>
            <Center bottom>
              <mesh rotation={[0, 0, 0]} receiveShadow>
                <cylinderGeometry args={[12, 12, 100, 100]} />
                <meshStandardMaterial color="red" />
              </mesh>
            </Center>
            <Center top>
              <BMW />
            </Center>
          </Center>
          <Center position={[200 - x, -100, 0]} top>
            <Center bottom>
              <mesh rotation={[0, 0, 0]} receiveShadow>
                <cylinderGeometry args={[12, 12, 100, 100]} />
                <meshStandardMaterial color="red" />
              </mesh>
            </Center>
            <Center top>
              <BMW />
            </Center>
          </Center>
        </Canvas>
        <div className="absolute top-0 start-0">
          <button
            onClick={() => setRotate(!rotate)}
            className="bg-white p-2 m-2"
          >
            Auto Rotate
          </button>
          <button onClick={() => setX(x - 50)} className="bg-white p-2 m-2">
            {"<"}
          </button>
          <button onClick={() => setX(x + 50)} className="bg-white p-2 m-2">
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}

useGLTF.preload("/models/bmw.glb");
