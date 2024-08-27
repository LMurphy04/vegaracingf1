"use client";
import Title from "../title";
import Image from "next/image";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Switch, Group } from "@mantine/core";
import { Dispatch, SetStateAction, Suspense, useState } from "react";
import { FBXLoader } from "three/examples/jsm/Addons.js";

type CarDetails = {
  name: string;
  model: any;
  photos: string[];
  awards: string[];
  races: string;
  time: string;
  parts: string;
  funFact: string;
};

export default function CarMuseum() {
  const [rotate, setRotate] = useState(true);
  const [car, setCar] = useState(0);
  const [mode3D, set3D] = useState(true);

  const cars = [
    {
      name: "Professional Class Nationals",
      model: useLoader(FBXLoader, `/models/vega_pro_nationals.fbx`),
      photos: [
        `/car-photos/ProNationals1.png`,
        `/car-photos/ProNationals2.png`,
      ],
      awards: [
        "Scottish Champions & 2nd in the UK (overall)",
        "3rd Fastest Track Time",
      ],
      time: "1.092s",
      races: "8 (2 Cars)",
      parts: "14",
      funFact:
        "Three rear wings and a wheel came loose from the car during racing, resulting in some hasty superglue action captured live on camera!",
    },
    {
      name: "Professional Class Regionals",
      model: useLoader(FBXLoader, "/models/vega_pro_regionals.fbx"),
      photos: [
        `/car-photos/ProRegionals1.png`,
        "/car-photos/ProRegionals2.png",
      ],
      awards: ["Fastest & Best Engineered Car"],
      time: "1.169s",
      races: "4",
      parts: "15",
      funFact:
        "As our first professional class car, this car was our first to incorporate 3D printed parts and a custom wheel & axle system, carrying it to first place overall.",
    },
    {
      name: "Development Class Nationals",
      model: useLoader(FBXLoader, "models/vega_dev_nationals.fbx"),
      photos: [
        `/car-photos/DevRegionalsandNationals1.png`,
        "/car-photos/DevRegionalsandNationals2.png",
      ],
      awards: [
        "2nd Fastest Car",
        "Nominated for best engineered car & scrutineering award",
      ],
      time: "1.355s",
      races: "8 (2 Cars)",
      parts: "7",
      funFact:
        "This car was second in development class by only 0.002 seconds. That’s around 60 times slower than the blink of an eye!",
    },
    {
      name: "Development Class Regionals",
      model: useLoader(FBXLoader, "models/vega_dev_regionals.fbx"),
      photos: [
        `/car-photos/DevRegionalsandNationals1.png`,
        "/car-photos/DevRegionalsandNationals2.png",
      ],
      awards: ["Fastest & Best Engineered Car"],
      time: "1.355s",
      races: "4",
      parts: "7",
      funFact:
        "This car was the first we had ever sent out to compete, although due to covid the event was held online rather than in person. This didn’t dampen the car’s strengths however, as it achieved the fastest track times in development class.",
    },
  ];

  var currentCar = cars[car];

  return (
    <>
      <Title title="Car Museum" />
      <div className="relative shadow-xl grow overflow-hidden">
        <SimpleDisplay currentCar={currentCar} />
        <CarEnvironment
          car={car}
          cars={cars}
          rotate={rotate}
          setRotate={setRotate}
          mode3D={mode3D}
        />
      </div>
      <Controls
        cars={cars}
        mode3D={mode3D}
        set3D={set3D}
        rotate={rotate}
        setRotate={setRotate}
        car={car}
        setCar={setCar}
      />
    </>
  );
}

function SimpleDisplay({ currentCar }: { currentCar: CarDetails }) {
  return (
    <div
      className={`absolute top-0 w-full bg-white transition-all duration-1000 h-full flex flex-col md:flex-row overflow-y-auto`}
    >
      <div className="flex-1 md:h-full content-center p-5 md:overflow-y-auto">
        <p className="font-bold text-3xl">{currentCar["name"]}</p>
        <p className="font-bold text-xl mt-5">Awards</p>
        <ul className="list-disc list-inside text-lg">
          {currentCar["awards"].map((award, index) => {
            return <li key={index}>{award}</li>;
          })}
        </ul>
        <p className="font-bold text-xl mt-5">Stats</p>
        <p className="text-lg">{`Best Track Time: ${currentCar["time"]}`}</p>
        <p className="text-lg">{`Number of Races: ${currentCar["races"]}`}</p>
        <p className="text-lg">{`Number of Parts: ${currentCar["parts"]}`}</p>
        <p className="font-bold text-xl mt-5">Fun Fact</p>
        <p className="text-lg">{currentCar["funFact"]}</p>
      </div>
      <div className="flex flex-1 md:h-full md:overflow-y-auto flex-col items-center p-5">
        <div className="my-auto flex flex-col gap-5">
          {currentCar["photos"].map((photo, index) => {
            return (
              <Image
                key={index}
                src={photo}
                width={750}
                height={591}
                alt={`Vega Working with School Pupils`}
                priority={true}
                style={{ width: "100%", height: "auto" }}
                className="rounded-md hover:scale-[1.02]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Controls({
  cars,
  mode3D,
  set3D,
  rotate,
  setRotate,
  car,
  setCar,
}: {
  cars: CarDetails[];
  mode3D: boolean;
  set3D: Dispatch<SetStateAction<boolean>>;
  rotate: boolean;
  setRotate: Dispatch<SetStateAction<boolean>>;
  car: number;
  setCar: Dispatch<SetStateAction<number>>;
}) {
  return (
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
        <div className="flex flex-row ml-auto rounded-md bg-gray-100 text-sm w-full sm:w-auto">
          <button
            onClick={() => {
              setCar(car - 1);
            }}
            className={`p-2 px-4 ${car == 0 ? "text-gray-100" : ""}`}
            disabled={car == 0}
          >
            {"<"}
          </button>
          <p className={`p-2 grow text-center `}>{cars[car]["name"]}</p>
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
  );
}

function CarEnvironment({
  car,
  cars,
  rotate,
  setRotate,
  mode3D,
}: {
  car: number;
  cars: CarDetails[];
  rotate: boolean;
  setRotate: Dispatch<SetStateAction<boolean>>;
  mode3D: boolean;
}) {
  var currentCar = cars[car];
  return (
    <div
      className={`transition-all duration-1000 h-full  ${
        mode3D ? "" : "translate-x-[-100%]"
      }`}
    >
      <Canvas
        dpr={[1, 2]}
        className={`w-full h-full bg-black touch-none`}
        camera={{ fov: 45, position: [-20, 10, 40] }}
        onClick={() => setRotate(false)}
      >
        <OrbitControls
          maxPolarAngle={Math.PI / 2.01}
          maxDistance={60}
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
              <Suspense fallback={null}>
                <Center top>
                  <mesh rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
                    <primitive object={carInfo["model"]} scale={0.1} />
                  </mesh>
                </Center>
              </Suspense>
            </Center>
          );
        })}
      </Canvas>
      <InfoSlider currentCar={currentCar} />
    </div>
  );
}

function InfoSlider({ currentCar }: { currentCar: CarDetails }) {
  const [info, setInfo] = useState(false);
  return (
    <div
      className={`absolute top-0 start-0h-full bg-gray-800 flex flex-col h-full`}
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
        className={`p-2 bg-gray-100 h-full w-[15rem] whitespace-pre text-wrap overflow-y-auto ${
          info ? "" : "hidden"
        }`}
      >
        <p className="font-bold underline">{currentCar["name"]}</p>
        <p className="font-bold mt-5">Awards</p>
        <ul className="list-disc list-inside">
          {currentCar["awards"].map((award, index) => {
            return <li key={index}>{award}</li>;
          })}
        </ul>
        <p className="font-bold mt-5">Stats</p>
        <p>{`Best Track Time: ${currentCar["time"]}`}</p>
        <p>{`Number of Races: ${currentCar["races"]}`}</p>
        <p>{`Number of Parts: ${currentCar["parts"]}`}</p>
        <p className="font-bold mt-5">Fun Fact</p>
        <p>{currentCar["funFact"]}</p>
      </div>
    </div>
  );
}
