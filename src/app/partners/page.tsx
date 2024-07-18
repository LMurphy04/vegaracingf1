import Title from "../title";
import Image from "next/image";
import P1Carousel from "./carousel";
import "@mantine/carousel/styles.css";

export default function Home() {
  return (
    <>
      <Title title={"Partners"} />
      <p className="mb-5 text-center font-semibold italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        eros vel lacinia pharetra. Sed eu lectus vitae arcu ornare malesuada. In
        a lectus odio.
      </p>
      <div className="flex flex-col gap-10 justify-center">
        <TierHeading title={"P1 Sponsors"} />
        <P1Carousel P1Sponsors={P1Sponsors} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt eros vel lacinia pharetra. Sed eu lectus vitae arcu ornare
          malesuada. In a lectus odio. Praesent vel ullamcorper est, nec commodo
          urna. Aenean congue ex accumsan, vestibulum nisl facilisis, semper
          massa. Vestibulum tincidunt congue libero. Suspendisse ac sodales
          nisl, a vehicula erat. Aenean eu interdum urna. Mauris bibendum sem a
          hendrerit commodo. Nam vitae mi quis massa venenatis dictum mollis sed
          eros. Sed tortor lorem, tristique a sem a, molestie tincidunt tortor.
          In hac habitasse platea dictumst.
        </p>
        <TierHeading title={"P2 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap">
          {P2Sponsors.map((sponsor, index) => {
            return <P2Card sponsor={sponsor} key={index} />;
          })}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt eros vel lacinia pharetra. Sed eu lectus vitae arcu ornare
          malesuada. In a lectus odio. Praesent vel ullamcorper est, nec commodo
          urna. Aenean congue ex accumsan, vestibulum nisl facilisis, semper
          massa. Vestibulum tincidunt congue libero. Suspendisse ac sodales
          nisl, a vehicula erat. Aenean eu interdum urna. Mauris bibendum sem a
          hendrerit commodo. Nam vitae mi quis massa venenatis dictum mollis sed
          eros. Sed tortor lorem, tristique a sem a, molestie tincidunt tortor.
          In hac habitasse platea dictumst.
        </p>
        <TierHeading title={"P3 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap">
          {P3Sponsors.map((sponsor, index) => {
            return <P3Card sponsor={sponsor} key={index} />;
          })}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt eros vel lacinia pharetra. Sed eu lectus vitae arcu ornare
          malesuada. In a lectus odio. Praesent vel ullamcorper est, nec commodo
          urna. Aenean congue ex accumsan, vestibulum nisl facilisis, semper
          massa. Vestibulum tincidunt congue libero. Suspendisse ac sodales
          nisl, a vehicula erat. Aenean eu interdum urna. Mauris bibendum sem a
          hendrerit commodo. Nam vitae mi quis massa venenatis dictum mollis sed
          eros. Sed tortor lorem, tristique a sem a, molestie tincidunt tortor.
          In hac habitasse platea dictumst.
        </p>
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
    </>
  );
}

function TierHeading({ title }: { title: string }) {
  return (
    <div className="flex flex-row gap-3 text-lg font-semibold">
      <span className="grow border-[1px] border-black my-auto"></span>
      <p>{title}</p>
      <span className="grow border-[1px] border-black my-auto"></span>
    </div>
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
        className="w-[230px] bg-white border-[1px] hover:border-4 hover:border-vega-blue hover:shadow-vega-blue border-black rounded-xl shadow-2xl flex flex-col p-5 gap-3 h-full"
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
    name: "GreenFox Energy",
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
