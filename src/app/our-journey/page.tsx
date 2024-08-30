"use client";
import Title from "../title";
import { Timeline } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Title title={"Our Journey"} />
      <Timeline
        active={3}
        bulletSize={30}
        lineWidth={6}
        color="#2d467c"
        classNames={{
          root: "max-w-[800px] mx-auto mb-5",
          itemTitle: "text-lg font-bold",
          itemContent: "pb-5",
        }}
      >
        {events.map((event, index) => {
          return (
            <Timeline.Item
              title={`${event["title"]} - ${event["date"]}`}
              key={index}
            >
              <Image
                src={event["image"]}
                width={750}
                height={591}
                alt={`${event["title"]} Photo`}
                priority={true}
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg shadow-xl mb-10 hover:scale-[1.01]"
              />
              <p className="whitespace-pre text-wrap">{event["desc"]}</p>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </>
  );
}

const events = [
  {
    title: "Dev Class Scottish Regionals",
    date: "06/10/2022",
    desc: "We began our journey as a team in October 2022, when competing in Development Class at the Scottish Regional Finals at our home base, Linlithgow Academy. Here, we were able to win first place in the category, as well as win the awards for the best engineered car and fastest car in Development Class. This amazing performance proved our ability as a team and gave us a confidence boost stepping onto the larger UK Nationals stage.",
    image: "/event-photos/dev-regionals.jpg",
  },
  {
    title: "Dev Class UK Nationals",
    date: "12/01/2023",
    desc: "After winning in our Regional Finals, we travelled to Birmingham to compete in the UK National Finals two months later. This event was held alongside Autosport International, giving us the opportunity to explore the motorsports show and learn loads about all areas of the sport. Here, we placed 2nd in the Development Class; a massive achievement representing all our hard work up to this point, and which gave us a springboard into competing in the Professional Class.",
    image: "/event-photos/dev-nationals.jpg",
  },
  {
    title: "Pro Class Scottish Regionals",
    date: "24/02/2023",
    desc: "Reflecting where we started four months prior, we again competed in the Scottish Regional Finals at Linlithgow Academy, although now in the Professional Class. Beginning again in the more complex class, we were thrilled to win 1st place and become Scottish Champions, as well as claiming the Fastest Car award and Best Engineered Car Award, showing how far we’d come as a team. With our new title, we moved forward again to the UK National Finals, to see if we could win and reach the world stage.",
    image: "/event-photos/pro-regionals.jpg",
  },
  {
    title: "Pro Class UK Nationals",
    date: "29/06/2023",
    desc: "At the 2023 UK National Finals in Leeds, we faced our greatest stakes yet in competing; if we placed on the podium we would qualify to compete at the 2024 World Finals in Saudi Arabia. Knowing this, we were delighted to place 2nd on the podium and gain the opportunity to reach the final stage of the competition. Adding to this success, we also won the Sponsorship and Marketing Award, capping off a perfect competition and giving us motivation to approach the final challenge of our journey.",
    image: "/event-photos/pro-nationals.jpg",
  },
  {
    title: "World Finals",
    date: "21/11/2024",
    desc: "We’re currently preparing for the 2024 Saudi Arabia World Finals, with the hopes of reaching even higher heights in our last time competing in F1 in Schools. We can’t wait to test our mettle against the best teams in the world and fully enjoy the fruits of our labour after over two years of work. Wish us luck on the last stage of our adventure, and if you’d like to help us out, check out our social medias to follow along as we shoot for the stars at Worlds!",
    image: "/event-photos/world-finals.jpg",
  },
];
