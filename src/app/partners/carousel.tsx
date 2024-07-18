"use client";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

export default function P1Carousel({
  P1Sponsors,
}: {
  P1Sponsors: { name: string; image: string; website: string }[];
}) {
  return (
    <Carousel
      withIndicators
      loop
      controlSize={40}
      controlsOffset="xl"
      speed={3}
      slideSize={{ base: "60%" }}
      initialSlide={Math.floor(Math.random() * 3)}
      classNames={{
        slide:
          "my-10 bg-white border-[1px] border-black rounded-xl mx-10 h-[350px] md:h-[300px] shadow-lg flex flex-col md:flex-row p-5 hover:border-4 hover:border-vega-blue hover:shadow-vega-blue hover:cursor-pointer",
        indicator: "bg-vega-blue indicator",
        root: "mx-[-20px] sm:mx-[-40px]",
      }}
    >
      {P1Sponsors.map((sponsor, index) => {
        return <P1Slide sponsor={sponsor} key={index} />;
      })}
    </Carousel>
  );
}

function P1Slide({
  sponsor,
}: {
  sponsor: { name: string; image: string; website: string };
}) {
  return (
    <Carousel.Slide
      onClick={() => {
        window.open(`${sponsor.website}`, "_blank");
      }}
    >
      <div className="flex basis-1/2">
        <div className="m-auto max-w-[250px] max-h-[250px]">
          <Image
            src={`/partners/${sponsor.image}`}
            width={250}
            height={250}
            alt={`${sponsor.name} Logo`}
            priority={true}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="basis-1/2 flex flex-col items-center my-auto md:border-l-[1px] border-black mx-auto p-2">
        <div className="my-auto flex flex-col">
          <p className="text-3xl font-bold border-b-[1px] border-black pb-2 mb-2 text-center">
            {sponsor.name}
          </p>
          <p className="italic mx-auto">{sponsor.website}</p>
        </div>
      </div>
    </Carousel.Slide>
  );
}
