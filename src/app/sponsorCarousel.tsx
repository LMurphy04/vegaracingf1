"use client";
import { sponsors } from "./sponsors";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

export default function SponsorCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  const sponsorGroups = [
    sponsors["P1Sponsors"],
    sponsors["P2Sponsors"],
    sponsors["P3Sponsors"],
    sponsors["P4Sponsors"],
  ];

  return (
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
  );
}
