"use client";
import Title from "../title";
import { Timeline } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Title title={"Our Journey"} />
      <Timeline
        active={4}
        bulletSize={25}
        lineWidth={6}
        color="#2d467c"
        classNames={{ root: "max-w-[800px] mx-auto" }}
      >
        <Timeline.Item title={events[0].title}>
          <div className="flex flex-col">
            <p>{events[0].date}</p>
            <p className="whitespace-pre text-wrap">{events[0].desc}</p>
          </div>
        </Timeline.Item>
        <Timeline.Item title={events[1].title}>
          <div className="flex flex-col">
            <p>{events[1].date}</p>
            <p>{events[1].desc}</p>
          </div>
        </Timeline.Item>
        <Timeline.Item title={events[2].title}>
          <div className="flex flex-col">
            <p>{events[2].date}</p>
            <p>{events[2].desc}</p>
          </div>
        </Timeline.Item>
        <Timeline.Item title={events[3].title}>
          <div className="flex flex-col">
            <p>{events[3].date}</p>
            <p>{events[3].desc}</p>
          </div>
        </Timeline.Item>
      </Timeline>
    </>
  );
}

const events = [
  {
    title: "Event X",
    date: "00/00/0000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Event X",
    date: "00/00/0000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Event X",
    date: "00/00/0000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Event X",
    date: "00/00/0000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
