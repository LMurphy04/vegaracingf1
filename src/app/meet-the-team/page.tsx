"use client";
import { useState } from "react";
import Title from "../title";
import { Tabs } from "@mantine/core";

export default function MeetTheTeam() {
  const [activeTab, setActiveTab] = useState<string | null>(
    membersInfo[0].name
  );
  return (
    <>
      <Title title={"Meet the Team"} />
      <div className="flex flex-wrap">
        <ImageCollection tab={setActiveTab} active={activeTab} />
      </div>
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        className="my-5"
        classNames={{
          panel: "p-5",
          tab: "sm:hover:bg-vega-blue sm:hover:text-white font-semibold text-md",
          list: "sm:hidden",
        }}
        color="#2d467c"
      >
        <Tabs.List>
          {membersInfo.map((member, index) => {
            return (
              <Tabs.Tab key={index} value={member.name}>
                {member.name}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>

        {membersInfo.map((member, index) => {
          return (
            <Tabs.Panel key={index} value={member.name}>
              <div className="w-full flex flex-col md:flex-row gap-5">
                <div>
                  <div className="pb-3 pr-3 border-b-[1px] border-black">
                    <p className="text-xl font-bold">{member.name}</p>
                    <p className="text-md font-light">{member.role}</p>
                  </div>
                  <p className="mt-3 whitespace-pre text-wrap">{member.bio}</p>
                </div>
                <div className="w-full md:w-[400px] md:min-w-[400px] self-start bg-white shadow-xl rounded-sm hover:scale-[1.02] transition-all">
                  <p className="text-white p-3 bg-vega-blue">
                    {member.name}&apos;s Factsheet
                  </p>
                  <p className="p-3">{`> Favourite Grand Prix:`}</p>
                  <p className="p-3">{`> Favourite Grand Prix:`}</p>
                  <p className="p-3">{`> Favourite Grand Prix:`}</p>
                  <p className="p-3">{`> Favourite Grand Prix fwnkfa fdJKFHDS UFH fSUHIK FUSHIDSF UIFDHS:`}</p>
                </div>
              </div>
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </>
  );
}

function ImageCollection({
  tab,
  active,
}: {
  tab: Function;
  active: string | null;
}) {
  return membersInfo.map((memberInfo, index) => (
    <MemberImage
      key={index}
      name={memberInfo.name}
      role={memberInfo.role}
      image={memberInfo.image}
      tab={tab}
      active={active}
    />
  ));
}

function MemberImage({
  name,
  image,
  tab,
  role,
  active,
}: {
  name: string;
  image: string;
  tab: Function;
  role: string;
  active: string | null;
}) {
  const parentStyle =
    active == name
      ? `${image} group bg-center bg-no-repeat bg-cover basis-1/2 sm:flex-1 flex border-2 border-[#F5F5F5] h-[300px] sm:flex-[2] duration-[1000ms] sm:border-b-vega-blue sm:border-b-8 transition-all`
      : `${image} group bg-center bg-no-repeat bg-cover basis-1/2 sm:flex-1 flex border-2 border-[#F5F5F5] h-[300px] duration-[1000ms] transition-all`;

  const roleStyle =
    active == name
      ? "transition-all duration-[1000ms] opacity-100 text-base text-white font-bold text-wrap"
      : "transition-all duration-[1000ms] sm:opacity-0 sm:text-[0px] text-white font-bold text-wrap";

  return (
    <div className={parentStyle} onMouseOver={() => tab(name)}>
      <div className="mt-auto p-3">
        <p className="text-white font-bold text-2xl">{name}</p>
        <p className={roleStyle}>{role}</p>
      </div>
    </div>
  );
}

const membersInfo = [
  {
    name: "Sally",
    role: "Project Manager",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: `As the Project Manager of Vega Racing, Sally uses her orginisational skills to make sure we're all on track for success. In her spare time, Sally enjoys drumming, reading, and baking. Her favourite book genre is science fiction.`,
  },
  {
    name: "Evie",
    role: "Graphic Designer",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: `Evie is Vega Racing's Graphic Designer. She designs the team kit, folio layout, and the overall branding and identity of the team. Evie enjoys playing netball in which she plays goal attack, and is currently training to run a half marathon.`,
  },
  {
    name: "Joe",
    role: "Design Engineer",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: `Our Design Engineer, Joe, is responsible for designing the miniature car that we race at competitions. While considering the strict rules and regulations set by F1 in Schools, his aim is to make our car the fastest on the track. In his spare time, Joe enjoys playing video games, running, and watching his favourite F1 team, McLaren.`,
  },
  {
    name: "Calum",
    role: "Manufacturing Engineer",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: `Calum is our Manufacturing Engineer and Team Driver. He manages the manufacturing process and assembly of the car. He also researches manufacturing methods and materials to make sure our car is fast and compliant. He physically tests the car to ensure it is suitable for competition. Being the Team Driver means that at competitions, Calum is responsible for firing the car down the track with his quick reaction times. In his spare time, Calum likes to play video games and read. He also plays left wing at football.`,
  },
  {
    name: "Kirsty",
    role: "Sponsorship Manager",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: `As Sponsorship Manager, Kirsty contacts companies to try to gain sponsorship, whether financial or other sponsorship. Outside of F1 in Schools, Kirsty is very busy doing lots of things including running and dancing. She also finds time to play midfield at hockey.`,
  },
  {
    name: "Clara",
    role: "Marketing Manager",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: `Clara is Vega Racing's Marketing Manager. Her job in the team is to organise events to promote and/or fundraise, make marketing materials, and design and build our pit display for the competition. Her hobbies include baking, running, and reading. Her favourite genre to read is dystopian or rom coms.`,
  },
];
