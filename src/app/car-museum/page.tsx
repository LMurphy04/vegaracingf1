"use client";
import Title from "../title";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, useFBX } from "@react-three/drei";
import { Switch, Group } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [rotate, setRotate] = useState(false);
  const [car, setCar] = useState(0);
  const [mode3D, set3D] = useState(true);
  const [info, setInfo] = useState(false);

  const cars = [
    {
      name: "Vega Dev Regionals",
      model: useFBX("models/vega_dev_regionals.fbx"),
      stats: ["Fastest & Best Engineered Car"],
    },
    {
      name: "Vega Dev Nationals",
      model: useFBX("models/vega_dev_nationals.fbx"),
      stats: [
        "2nd Fastest Car",
        "Nominated for best engineered car & scrutineering award",
      ],
    },
    {
      name: "Vega Pro Regionals",
      model: useFBX("models/vega_pro_regionals.fbx"),
      stats: ["Fastest & Best Engineered Car"],
    },
    {
      name: "Vega Pro Nationals",
      model: useFBX("models/vega_pro_nationals.fbx"),
      stats: [
        "Scottish Champions & 2nd in the UK (overall)",
        "3rd Fastest Track Time",
      ],
    },
  ];

  return (
    <>
      <Title title="Car Museum" />
      <div className="relative shadow-xl grow">
        <div
          className={`absolute top-0 w-full bg-white transition-all duration-1000 h-full flex flex-col md:flex-row ${
            mode3D ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex-1 h-full content-center p-5">
            <p className="font-bold text-3xl">{cars[car]["name"]}</p>
            <ul className="list-disc list-inside text-lg">
              {cars[car]["stats"].map((stat, index) => {
                return <li key={index}>{stat}</li>;
              })}
            </ul>
          </div>
          <div className="flex-1 bg-red-500 h-full"></div>
        </div>
        <Canvas
          dpr={[1, 2]}
          className={`w-full h-full bg-black touch-none transition-all duration-1000 ${
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
          <hemisphereLight intensity={0.2} groundColor="black" />
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
          className={`absolute top-0 start-0 h-full bg-gray-800 flex flex-col transition-all duration-1000  ${
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
            <p className="font-bold">{cars[car]["name"]}</p>
            <ul className="list-disc list-inside">
              {cars[car]["stats"].map((stat, index) => {
                return <li key={index}>{stat}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800 p-2">
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
    </>
  );
}
