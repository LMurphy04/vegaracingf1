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
  useFBX,
} from "@react-three/drei";
import { Switch, Group } from "@mantine/core";
import { useRef, useState } from "react";
import { PI } from "three/examples/jsm/nodes/Nodes.js";

export default function Home() {
  const [rotate, setRotate] = useState(true);
  const [car, setCar] = useState(0);
  const [mode3D, set3D] = useState(true);
  const [info, setInfo] = useState(false);

  const car1 = useFBX("models/1 - Vega Dev Regionals.fbx");
  const car2 = useFBX("models/2 - Vega Dev Nationals.fbx");
  const car3 = useFBX("models/3 - Vega Pro Regionals.fbx");
  const car4 = useFBX("models/4 - Vega Pro Nationals.fbx");

  const cars = [
    { name: "Vega Dev Regionals", model: car1 },
    { name: "Vega Dev Nationals", model: car2 },
    { name: "Vega Pro Regionals", model: car3 },
    { name: "Vega Pro Nationals", model: car4 },
  ];

  return (
    <>
      <Title title="Car Museum" />
      <div className="relative mb-5 shadow-xl">
        <div
          className={`absolute top-0 w-full h-[30rem] bg-white transition-all duration-1000 ${
            mode3D ? "opacity-0" : "opacity-100"
          }`}
        >
          {cars[car]["name"]}
        </div>
        <Canvas
          dpr={[1, 2]}
          className={`w-full h-[30rem] bg-black touch-none transition-all duration-1000 ${
            mode3D ? "opacity-100" : "opacity-0"
          }`}
          camera={{ fov: 45, position: [-10, 10, 30] }}
          onClick={() => setRotate(false)}
        >
          <OrbitControls
            maxPolarAngle={Math.PI / 2.01}
            maxDistance={40}
            minDistance={12}
            autoRotate={rotate}
            makeDefault
            enablePan={false}
            enableRotate={mode3D}
          />
          <ambientLight intensity={0.25} />
          <spotLight
            position={[20, 30, 20]}
            angle={0.4}
            penumbra={1}
            decay={0}
            intensity={1}
          />
          <spotLight
            position={[-20, 30, -20]}
            angle={0.4}
            penumbra={1}
            decay={0}
            intensity={1}
          />
          {cars.map((carInfo, index) => {
            return (
              <Center key={index} position={[50 * (index - car), -100, 0]} top>
                <Center bottom>
                  <mesh rotation={[0, 0, 0]} receiveShadow>
                    <cylinderGeometry args={[12, 12, 100, 100]} />
                    <meshStandardMaterial color="gray" />
                  </mesh>
                </Center>
                <Center top>
                  <mesh rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
                    <primitive object={carInfo["model"]} scale={0.1} />
                  </mesh>
                </Center>
              </Center>
            );
          })}
        </Canvas>
        <div
          className={`absolute top-0 start-0 bg-white h-[30rem] bg-gray-800 flex flex-col transition-all duration-1000  ${
            mode3D ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="m-2 text-white">
            <button
              className="float-right"
              onClick={() => {
                setInfo(!info);
              }}
            >
              {info ? "<<" : ">>"}
            </button>
          </div>
          <div
            className={`p-2 bg-gray-100 h-full w-[15rem] whitespace-pre text-wrap ${
              info ? "" : "hidden"
            }`}
          >
            {cars[car]["name"]}
          </div>
        </div>
        <div className="absolute bottom-0 start-0 w-full bg-gray-800 p-2">
          <Group>
            <Switch
              size="xl"
              checked={mode3D}
              onChange={() => set3D(!mode3D)}
              color="#fa06a6"
              onLabel={"3D"}
              offLabel={"2D"}
              radius={"md"}
            />
            <Switch
              size="xl"
              checked={rotate}
              onChange={() => setRotate(!rotate)}
              color="#fa06a6"
              onLabel={"Rotate On"}
              offLabel={"Rotate Off"}
              className={`transition-all duration-1000  ${
                mode3D ? "opacity-100" : "opacity-0"
              }`}
              radius={"md"}
            />
            <div className="flex flex-row ml-auto rounded-md bg-gray-100 text-sm">
              <button
                onClick={() => {
                  setCar(car - 1);
                }}
                className={`p-2 px-4 ${car == 0 ? "text-gray-100" : ""}`}
                disabled={car == 0}
              >
                {"<"}
              </button>
              <p className={`p-2 `}>{cars[car]["name"]}</p>
              <button
                onClick={() => {
                  setCar(car + 1);
                }}
                className={`p-2 px-4 ${
                  car == cars.length - 1 ? "text-gray-100" : ""
                }`}
                disabled={car == cars.length - 1}
              >
                {">"}
              </button>
            </div>
          </Group>
        </div>
      </div>
    </>
  );
}

useGLTF.preload("/models/bmw.glb");
