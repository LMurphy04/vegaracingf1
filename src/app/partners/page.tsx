"use client";
import Title from "../title";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

export default function Home() {
  return (
    <>
      <Title title={"Partners"} />
      <div className="flex flex-col gap-10 justify-center">
        <TierHeading title={"P1 Sponsors"} />
        <Carousel
          withIndicators
          loop
          controlSize={40}
          controlsOffset="xl"
          slideSize={{ base: "60%" }}
          initialSlide={Math.floor(Math.random() * 3)}
          classNames={{
            slide:
              "bg-white border-[1px] border-black rounded-xl mx-10 min-h-[300px] shadow-2xl flex flex-col md:flex-row p-5",
            indicator: "bg-vega-blue",
          }}
        >
          {P1Sponsors.map((sponsor, index) => {
            return <P1Slide sponsor={sponsor} key={index} />;
          })}
        </Carousel>
        <TierHeading title={"P2 Sponsors"} />
        <div className="flex flex-col gap-5 md:flex-row md:gap-0 flex-wrap">
          {P2Sponsors.map((sponsor, index) => {
            return <P2Card sponsor={sponsor} key={index} />;
          })}
        </div>
        <TierHeading title={"P3 Sponsors"} />
        <div className="flex gap-y-5 flex-row flex-wrap">
          {P3Sponsors.map((sponsor, index) => {
            return <P3Card sponsor={sponsor} key={index} />;
          })}
        </div>
        <TierHeading title={"P4 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap mb-5 mx-20">
          {P4Sponsors.map((sponsor, index) => {
            return (
              <div
                key={index}
                className="bg-white border-[1px] border-black rounded-xl basis-1/8 flex p-5 items-center mx-auto"
              >
                <a
                  className="m-auto max-w-[250px] max-h-[250px]"
                  href={sponsor.website}
                  target="_blank"
                >
                  <Image
                    src={`/partners/${sponsor.image}`}
                    width={75}
                    height={75}
                    alt={`${sponsor.name} Logo`}
                    priority={true}
                    className="my-auto"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function TierHeading({ title }: { title: string }) {
  return (
    <div className="flex flex-row gap-3 ">
      <span className="grow border-b-[1px] border-black my-auto"></span>
      <p>{title}</p>
      <span className="grow border-b-[1px] border-black my-auto"></span>
    </div>
  );
}

function P1Slide({
  sponsor,
}: {
  sponsor: { name: string; image: string; website: string; location: string };
}) {
  return (
    <Carousel.Slide>
      <div className="flex flex-1 justify-center">
        <a
          className="m-auto max-w-[250px] max-h-[250px]"
          href={sponsor.website}
          target="_blank"
        >
          <Image
            src={`/partners/${sponsor.image}`}
            width={250}
            height={250}
            alt={`${sponsor.name} Logo`}
            priority={true}
          />
        </a>
      </div>
      <div className="flex-1 flex flex-col items-center my-auto md:border-l-[1px] border-black mx-auto">
        <p className="text-3xl font-bold border-b-[1px] border-black pb-2 mb-2 text-center">
          {sponsor.name}
        </p>
        <p>{sponsor.location}</p>
        <a
          target="_blank"
          className="italic hover:cursor"
          href={sponsor.website}
        >
          {sponsor.website}
        </a>
      </div>
    </Carousel.Slide>
  );
}

function P2Card({
  sponsor,
}: {
  sponsor: { name: string; image: string; website: string; location: string };
}) {
  return (
    <div className="w-max mx-auto md:p-0 md:basis-1/2 my-auto md:my-5">
      <div className="bg-white border-[1px] border-black rounded-xl mx-20 min-h-[200px] shadow-2xl flex flex-col lg:flex-row p-5 gap-3 lg:gap-0">
        <div className="flex flex-1 justify-center">
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
            />
          </a>
        </div>
        <div className="flex-1 flex flex-col items-center my-auto lg:border-l-[1px] border-black mx-auto p-2">
          <p className="text-2xl font-bold border-b-[1px] border-black pb-2 mb-2 text-center">
            {sponsor.name}
          </p>
          <p className="text-center">{sponsor.location}</p>
          <a
            target="_blank"
            className="italic hover:cursor text-xs"
            href={sponsor.website}
          >
            {sponsor.website}
          </a>
        </div>
      </div>
    </div>
  );
}

function P3Card({
  sponsor,
}: {
  sponsor: { name: string; image: string; website: string; location: string };
}) {
  return (
    <div className="w-max mx-auto md:p-0 md:basis-1/4 my-auto">
      <div className="bg-white border-[1px] border-black rounded-xl mx-10 shadow-2xl flex flex-col p-5 gap-3">
        <div className="flex flex-1 justify-center">
          <a
            className="m-auto max-w-[100px] max-h-[100px]"
            href={sponsor.website}
            target="_blank"
          >
            <Image
              src={`/partners/${sponsor.image}`}
              width={100}
              height={100}
              alt={`${sponsor.name} Logo`}
              priority={true}
            />
          </a>
        </div>
        <div className="flex-1 flex flex-col items-center my-auto border-t-[1px] border-black mx-auto p-2">
          <p className="text-xl font-bold text-center my-auto">
            {sponsor.name}
          </p>
        </div>
      </div>
    </div>
  );
}

const P1Sponsors = [
  {
    name: "Stellar Omada",
    image: "stellar_logo.png",
    website: "https://stellaruk.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "CBS Consulting",
    image: "cbs_logo.jpg",
    website: "https://www.cbsconsulting.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "Alan Steel",
    image: "alan_steel_logo.webp",
    website: "https://www.alansteel.com/",
    location: "Linlithgow, Scotland",
  },
];

const P2Sponsors = [
  {
    name: "Stellar Omada",
    image: "stellar_logo.png",
    website: "https://stellaruk.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "CBS Consulting",
    image: "cbs_logo.jpg",
    website: "https://www.cbsconsulting.co.uk/",
    location: "Edinburgh, Scotland",
  },
];

const P3Sponsors = [
  {
    name: "Stellar Omada",
    image: "stellar_logo.png",
    website: "https://stellaruk.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "CBS Consulting",
    image: "cbs_logo.jpg",
    website: "https://www.cbsconsulting.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "Stellar Omada",
    image: "stellar_logo.png",
    website: "https://stellaruk.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "CBS Consulting",
    image: "cbs_logo.jpg",
    website: "https://www.cbsconsulting.co.uk/",
    location: "Edinburgh, Scotland",
  },
];

const P4Sponsors = [
  {
    name: "Stellar Omada",
    image: "stellar_logo.png",
    website: "https://stellaruk.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "CBS Consulting",
    image: "cbs_logo.jpg",
    website: "https://www.cbsconsulting.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "Stellar Omada",
    image: "stellar_logo.png",
    website: "https://stellaruk.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "CBS Consulting",
    image: "cbs_logo.jpg",
    website: "https://www.cbsconsulting.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "Stellar Omada",
    image: "stellar_logo.png",
    website: "https://stellaruk.co.uk/",
    location: "Edinburgh, Scotland",
  },
  {
    name: "CBS Consulting",
    image: "cbs_logo.jpg",
    website: "https://www.cbsconsulting.co.uk/",
    location: "Edinburgh, Scotland",
  },
];
