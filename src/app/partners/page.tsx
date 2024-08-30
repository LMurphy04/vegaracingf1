import Title from "../title";
import Image from "next/image";
import P1Carousel from "./carousel";
import { sponsors } from "../sponsors";
import "@mantine/carousel/styles.css";

export default function Home() {
  return (
    <>
      <Title title={"Partners"} />
      <p className="mb-5 text-center font-semibold italic">
        We would not be here today without the help of our brilliant partners!
        If you would like to get involved please don&apos;t hesitate to{" "}
        <a href="/contact-us" className="underline">
          contact us
        </a>
        !
      </p>
      <div className="flex flex-col gap-10 justify-center">
        <TierHeading title={"P1 Sponsors"} />
        <P1Carousel P1Sponsors={sponsors["P1Sponsors"]} />
        <p>
          {sponsors["P1Sponsors"].map((sponsor, index) => {
            return (
              <span key={index}>
                {index != 0 ? <br /> : <></>}
                <span className="font-bold">{`${sponsor["name"]}: `}</span>
                <span>{sponsor["bio"]}</span>
              </span>
            );
          })}
        </p>
        <TierHeading title={"P2 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap">
          {sponsors["P2Sponsors"].map((sponsor, index) => {
            return <P2Card sponsor={sponsor} key={index} />;
          })}
        </div>
        <p>
          {sponsors["P2Sponsors"].map((sponsor, index) => {
            return (
              <span key={index}>
                {index != 0 ? <br /> : <></>}
                <span className="font-bold">{`${sponsor["name"]}: `}</span>
                <span>{sponsor["bio"]}</span>
              </span>
            );
          })}
        </p>
        <TierHeading title={"P3 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap">
          {sponsors["P3Sponsors"].map((sponsor, index) => {
            return <P3Card sponsor={sponsor} key={index} />;
          })}
        </div>
        <p>
          {sponsors["P3Sponsors"].map((sponsor, index) => {
            return (
              <span key={index}>
                {index != 0 ? <br /> : <></>}
                <span className="font-bold">{`${sponsor["name"]}: `}</span>
                <span>{sponsor["bio"]}</span>
              </span>
            );
          })}
        </p>
        <TierHeading title={"P4 Sponsors"} />
        <div className="flex gap-5 flex-row flex-wrap mb-8 mx-20 bg-white border-[1px] border-black rounded-xl my-auto">
          {sponsors["P4Sponsors"].map((sponsor, index) => {
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
    <div className="w-max mx-auto">
      <a
        href={sponsor.website}
        target="_blank"
        className="w-[240px] md:w-[400px] md:h-[200px] bg-white border-[1px] hover:border-4 hover:border-vega-blue hover:shadow-vega-blue border-black rounded-xl shadow-2xl flex flex-col md:flex-row p-4 gap-3 h-full"
      >
        <div className="flex basis-1/2">
          <div className="m-auto flex w-[150px] h-[150px]">
            <Image
              src={`/partners/${sponsor.image}`}
              width={150}
              height={150}
              alt={`${sponsor.name} Logo`}
              priority={true}
              style={{ width: "100%", height: "auto" }}
              className="my-auto"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:border-l-[1px] border-black my-auto mx-auto p-4">
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
