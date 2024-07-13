"use client";
import Title from "../title";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

export default function Home() {
  return (
    <div className="mx-5 sm:mx-10">
      <Title title={"Partners"} />
      <div className="flex flex-col gap-10 justify-center">
        <TierHeading title={"P1 Sponsors"} />
        <Carousel
          withIndicators
          loop
          controlSize={40}
          controlsOffset="xl"
          slideSize={{ base: "60%", sm: "600px", md: "800px" }}
          initialSlide={Math.floor(Math.random() * 3)}
          classNames={{
            slide:
              "my-10 bg-white border-[1px] border-black rounded-xl mx-10 h-[350px] md:h-[300px] shadow-lg flex flex-col md:flex-row p-5 hover:border-4 hover:border-vega-blue hover:shadow-vega-blue hover:cursor-pointer",
            indicator: "bg-vega-blue",
            root: "mx-[-20px] sm:mx-[-40px]",
          }}
        >
          {P1Sponsors.map((sponsor, index) => {
            return <P1Slide sponsor={sponsor} key={index} />;
          })}
        </Carousel>
        <TierHeading title={"P2 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap">
          {P2Sponsors.map((sponsor, index) => {
            return <P2Card sponsor={sponsor} key={index} />;
          })}
        </div>
        <TierHeading title={"P3 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap">
          {P3Sponsors.map((sponsor, index) => {
            return <P3Card sponsor={sponsor} key={index} />;
          })}
        </div>
        <TierHeading title={"P4 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap mb-8 mx-20 bg-white border-[1px] border-black rounded-xl my-auto">
          {P4Sponsors.map((sponsor, index) => {
            return (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                className="basis-1/8 flex p-5 items-center mx-auto"
              >
                <Image
                  src={`/partners/${sponsor.image}`}
                  width={75}
                  height={75}
                  alt={`${sponsor.name} Logo`}
                  priority={true}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
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
      <div className="basis-1/2 flex flex-col items-center my-auto md:border-l-[1px] border-black mx-auto">
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

function P2Card({
  sponsor,
}: {
  sponsor: { name: string; image: string; website: string };
}) {
  return (
    <div className="w-max mx-auto h-[200px]">
      <a
        href={sponsor.website}
        target="_blank"
        className="w-[450px] h-[200px] bg-white border-[1px] hover:border-4 hover:border-vega-blue hover:shadow-vega-blue border-black rounded-xl shadow-2xl flex flex-row p-4 gap-3 h-full"
      >
        <div className="flex basis-1/2">
          <div className="m-auto max-w-[150px] max-h-[150px]">
            <Image
              src={`/partners/${sponsor.image}`}
              width={150}
              height={150}
              alt={`${sponsor.name} Logo`}
              priority={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center border-l-[1px] border-black my-auto mx-auto p-4">
          <p className="text-2xl font-bold border-b-[1px] border-black pb-2 mb-2 text-center">
            {sponsor.name}
          </p>
          <p className="italic hover:cursor text-xs text-center">
            {sponsor.website}
          </p>
        </div>
      </a>
    </div>
  );
}

function P3Card({
  sponsor,
}: {
  sponsor: { name: string; image: string; website: string };
}) {
  return (
    <div className="w-max mx-auto w-[230px] h-[230px]">
      <a
        href={sponsor.website}
        target="_blank"
        className="bg-white border-[1px] hover:border-4 hover:border-vega-blue hover:shadow-vega-blue border-black rounded-xl shadow-2xl flex flex-col p-5 gap-3 h-full"
      >
        <div className="flex basis-1/2">
          <div className="max-h-[100px] max-w-[100px] m-auto">
            <Image
              src={`/partners/${sponsor.image}`}
              width={100}
              height={100}
              alt={`${sponsor.name} Logo`}
              priority={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center my-auto border-t-[1px] border-black mx-auto p-2">
          <p className="text-xl font-bold text-center my-auto">
            {sponsor.name}
          </p>
        </div>
      </a>
    </div>
  );
}

const P1Sponsors = [
  {
    name: "Stellar Omada",
    image: "stellar_logo.png",
    website: "https://stellaruk.co.uk/",
  },
  {
    name: "CBS Consulting",
    image: "cbs_logo.jpg",
    website: "https://www.cbsconsulting.co.uk/",
  },
  {
    name: "Alan Steel",
    image: "alan_steel_logo.webp",
    website: "https://www.alansteel.com/",
  },
];

const P2Sponsors = [
  {
    name: "CGI",
    image: "cgi.png",
    website: "https://www.cgi.com/uk/en-gb",
  },
  {
    name: "Rabbie's Tours",
    image: "rabbies_blue.jpeg",
    website: "https://www.rabbies.com/en",
  },
];

const P3Sponsors = [
  {
    name: "LCDT",
    image: "lcdt.png",
    website: "https://trust-linlithgow.org.uk/",
  },
  {
    name: "Linlith-Go-Solar",
    image: "lgs.png",
    website: "https://trust-linlithgow.org.uk/projects/linlithgosolar/",
  },
  {
    name: "Green Fox",
    image: "green_fox.png",
    website: "https://www.greenfoxenergy.co.uk/",
  },
  {
    name: "Calnex",
    image: "calnex.png",
    website: "https://calnexsol.com/",
  },
];

const P4Sponsors = [
  {
    name: "XARA",
    image: "xara.webp",
    website: "https://www.xara.com/",
  },
  {
    name: "NMIS",
    image: "nmis.png",
    website: "https://www.nmis.scot/",
  },
  {
    name: "Scot's Bearings",
    image: "scots.jpg",
    website: "https://www.scots-bearings.co.uk/",
  },
  {
    name: "Lugo",
    image: "lugo.jpg",
    website: "https://lugoit.co.uk/",
  },
  {
    name: "Deans Engineering",
    image: "deans.jpg",
    website: "http://www.deansengineering.com/",
  },
  {
    name: "One Linlithgow",
    image: "one_linlithgow.jpg",
    website: "https://www.onelinlithgow.com/",
  },
];
