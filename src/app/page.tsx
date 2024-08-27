"use client";
import Title from "../app/title";
import Image from "next/image";
import { sponsors } from "./sponsors";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  const sponsorGroups = [
    sponsors["P1Sponsors"],
    sponsors["P2Sponsors"],
    sponsors["P3Sponsors"],
    sponsors["P4Sponsors"],
  ];
  return (
    <>
      <Title title={"Welcome to Vega Racing!"} />
      <div className="flex flex-col gap-10">
        <p>
          Hi, we’re <span className="font-bold">Vega Racing</span>, a
          professional class F1 in Schools team! This year we’re representing
          Scotland at the <span className="font-bold">2024 World Finals</span>{" "}
          in Saudi Arabia, and we’d love to take you along for the ride.
        </p>
        <div className="hover:scale-[1.02] transition-all shadow-2xl flex flex-col h-40 bg-gradient-to-r from-vega-blue to-vega-pink rounded-lg font-bold text-white p-5">
          <p className="text-center my-auto w-full text-4xl text-shadow">
            ‘Working together to reach the stars’
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
          <div className="basis-2/3 my-auto">
            <p>
              <span className="font-bold">What is F1 in Schools?</span>
              <br />
              F1 in Schools is an international youth competition with a focus
              on STEM, where teams of students design, build and race miniature
              F1 cars. Alongside this, teams must produce portfolios covering
              their engineering and enterprise work, a pit display, a verbal
              presentation and fundraise to support their F1 in Schools journey.
              F1 in Schools offers students the chance to enter the world of
              STEM, form contacts in F1, and learn practical skills they can
              apply in later careers. Through both its industry partners and
              close connection to F1, the competition has offered many a pathway
              into working in the sport, an opportunity we are eager to take
              ourselves!
            </p>
          </div>
          <div className="my-auto basis-1/3">
            <Image
              src={`/team-photos/frontPage1.jpg`}
              width={1500}
              height={1000}
              alt={`Vega Working with School Pupils`}
              priority={true}
              style={{ width: "100%", height: "auto" }}
              className="rounded-md shadow-2xl hover:scale-[1.02] transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
          <div className="my-auto basis-1/3 hidden md:block">
            <Image
              src={`/team-photos/frontPage2.jpg`}
              width={1500}
              height={1000}
              alt={`Vega Working with School Pupils`}
              priority={true}
              style={{ width: "100%", height: "auto" }}
              className="rounded-md shadow-2xl hover:scale-[1.02] transition-all"
            />
          </div>
          <div className="basis-2/3 my-auto">
            <p className="ml-5">
              <span className="font-bold">About Us</span>
              <br />
              We’re a professional class F1 in Schools team formed of six
              students from Linlithgow Academy, competing in the 2024 World
              Finals. Previously, we’ve won the Scottish Regional Finals before
              coming 2<sup>nd</sup> in the UK National Finals, allowing us to
              qualify for Worlds! We’re hugely community oriented, supporting
              the F1 in Primary Schools competition in our local area and
              partnering with local businesses to succeed together. We never
              would have been able to progress to the massive stage of Worlds
              without our community’s backing, so we hope to continue our
              crucial link with them into the future.
            </p>
          </div>
        </div>
        <Image
          src={`/team-photos/frontPage3.jpg`}
          width={1500}
          height={1000}
          alt={`Vega Working with School Pupils`}
          priority={true}
          style={{ width: "100%", height: "auto" }}
          className="rounded-md shadow-lg hover:scale-[1.02] transition-all"
        />
        <div className="mt-8 mb-16">
          <div className="flex font-bold mb-3">
            <span className="border-[1px] border-vega-blue mr-3 grow my-auto" />
            <p>Thank You to Our Amazing Sponsors!</p>
            <span className="border-[1px] border-vega-blue ml-3 my-auto grow" />
          </div>
          <Carousel
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            draggable={false}
            withControls={false}
            loop
            classNames={{
              slide:
                "hover:border-4 hover:border-vega-blue hover:shadow-vega-blue hover:cursor-pointer bg-white border-[1px] border-black rounded-xl mx-5 max-w-[170px] h-[170px] shadow-lg flex p-5",
              root: "mx-[-20px] sm:mx-[-40px] py-5",
            }}
          >
            {sponsorGroups.map((sponsorGroup) => {
              return sponsorGroup.map((sponsor, index) => {
                return (
                  <Carousel.Slide key={index}>
                    <a
                      className="m-auto max-w-[150px] max-h-[150px]"
                      href={sponsor.website}
                      target="_blank"
                    >
                      <Image
                        src={`/partners/${sponsor.image}`}
                        width={150}
                        height={150}
                        alt={`${sponsor.name} Logo`}
                        priority={true}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                  </Carousel.Slide>
                );
              });
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
