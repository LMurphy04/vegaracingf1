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
        <ImageCollection tab={setActiveTab} />
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
              {member.name}
              <br />
              {member.role}
              <br />
              <br />
              {member.bio}
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </>
  );
}

function ImageCollection({ tab }: { tab: Function }) {
  return membersInfo.map((memberInfo, index) => (
    <MemberImage
      key={index}
      name={memberInfo.name}
      image={memberInfo.image}
      tab={tab}
    />
  ));
}

function MemberImage({
  name,
  image,
  tab,
}: {
  name: string;
  image: string;
  tab: Function;
}) {
  return (
    <div
      className={`${image} bg-center bg-no-repeat bg-cover basis-1/2 sm:flex-1 flex border-2 border-[#F5F5F5] h-[300px] sm:hover:flex-[2] sm:hover:border-b-vega-blue sm:hover:border-b-8 transition-all`}
      onMouseOver={() => tab(name)}
    >
      <p className="text-white font-bold text-2xl mt-auto mb-3 ml-3">{name}</p>
    </div>
  );
}

const membersInfo = [
  {
    name: "Sally",
    role: "Project Manager",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo orci, dignissim nec justo ac, cursus finibus turpis. Duis tristique, lacus sed venenatis luctus, neque turpis aliquet tellus, id dictum odio orci id ante. Sed imperdiet a urna sit amet congue. Etiam sed turpis posuere, pulvinar est eu, egestas leo. Sed id ante porttitor, blandit odio a, venenatis nisl. Etiam tortor turpis, laoreet vitae neque in, fringilla maximus nibh. Cras imperdiet elit ipsum, ac euismod nibh consectetur a. In feugiat nibh dolor, eget malesuada nibh fringilla nec. Nullam id laoreet nibh. Vestibulum feugiat, sapien eget viverra fringilla, mi tortor vehicula nulla, viverra vehicula nisi sem semper enim.",
  },
  {
    name: "Evie",
    role: "Graphic Designer",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo orci, dignissim nec justo ac, cursus finibus turpis. Duis tristique, lacus sed venenatis luctus, neque turpis aliquet tellus, id dictum odio orci id ante. Sed imperdiet a urna sit amet congue. Etiam sed turpis posuere, pulvinar est eu, egestas leo. Sed id ante porttitor, blandit odio a, venenatis nisl. Etiam tortor turpis, laoreet vitae neque in, fringilla maximus nibh. Cras imperdiet elit ipsum, ac euismod nibh consectetur a. In feugiat nibh dolor, eget malesuada nibh fringilla nec. Nullam id laoreet nibh. Vestibulum feugiat, sapien eget viverra fringilla, mi tortor vehicula nulla, viverra vehicula nisi sem semper enim.",
  },
  {
    name: "Joe",
    role: "Design Engineer",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo orci, dignissim nec justo ac, cursus finibus turpis. Duis tristique, lacus sed venenatis luctus, neque turpis aliquet tellus, id dictum odio orci id ante. Sed imperdiet a urna sit amet congue. Etiam sed turpis posuere, pulvinar est eu, egestas leo. Sed id ante porttitor, blandit odio a, venenatis nisl. Etiam tortor turpis, laoreet vitae neque in, fringilla maximus nibh. Cras imperdiet elit ipsum, ac euismod nibh consectetur a. In feugiat nibh dolor, eget malesuada nibh fringilla nec. Nullam id laoreet nibh. Vestibulum feugiat, sapien eget viverra fringilla, mi tortor vehicula nulla, viverra vehicula nisi sem semper enim.",
  },
  {
    name: "Calum",
    role: "Manufacturing Engineer",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo orci, dignissim nec justo ac, cursus finibus turpis. Duis tristique, lacus sed venenatis luctus, neque turpis aliquet tellus, id dictum odio orci id ante. Sed imperdiet a urna sit amet congue. Etiam sed turpis posuere, pulvinar est eu, egestas leo. Sed id ante porttitor, blandit odio a, venenatis nisl. Etiam tortor turpis, laoreet vitae neque in, fringilla maximus nibh. Cras imperdiet elit ipsum, ac euismod nibh consectetur a. In feugiat nibh dolor, eget malesuada nibh fringilla nec. Nullam id laoreet nibh. Vestibulum feugiat, sapien eget viverra fringilla, mi tortor vehicula nulla, viverra vehicula nisi sem semper enim.",
  },
  {
    name: "Kirsty",
    role: "Sponsorship Manager",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo orci, dignissim nec justo ac, cursus finibus turpis. Duis tristique, lacus sed venenatis luctus, neque turpis aliquet tellus, id dictum odio orci id ante. Sed imperdiet a urna sit amet congue. Etiam sed turpis posuere, pulvinar est eu, egestas leo. Sed id ante porttitor, blandit odio a, venenatis nisl. Etiam tortor turpis, laoreet vitae neque in, fringilla maximus nibh. Cras imperdiet elit ipsum, ac euismod nibh consectetur a. In feugiat nibh dolor, eget malesuada nibh fringilla nec. Nullam id laoreet nibh. Vestibulum feugiat, sapien eget viverra fringilla, mi tortor vehicula nulla, viverra vehicula nisi sem semper enim.",
  },
  {
    name: "Clara",
    role: "Marketing Manager",
    image: "bg-[url('/exampleMugshot.jpg')]",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo orci, dignissim nec justo ac, cursus finibus turpis. Duis tristique, lacus sed venenatis luctus, neque turpis aliquet tellus, id dictum odio orci id ante. Sed imperdiet a urna sit amet congue. Etiam sed turpis posuere, pulvinar est eu, egestas leo. Sed id ante porttitor, blandit odio a, venenatis nisl. Etiam tortor turpis, laoreet vitae neque in, fringilla maximus nibh. Cras imperdiet elit ipsum, ac euismod nibh consectetur a. In feugiat nibh dolor, eget malesuada nibh fringilla nec. Nullam id laoreet nibh. Vestibulum feugiat, sapien eget viverra fringilla, mi tortor vehicula nulla, viverra vehicula nisi sem semper enim.",
  },
];
