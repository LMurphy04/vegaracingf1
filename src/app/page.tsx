import Title from "../app/title";
import Image from "next/image";
import SponsorCarousel from "./sponsor-carousel";
import "@mantine/carousel/styles.css";

export default function Home() {
  return (
    <>
      <Title title={"Welcome to Vega Racing!"} />
      <div className="flex flex-col gap-10">
        <p>
          Hi, we’re <span className="font-bold">Vega Racing</span>, a
          Professional Class F1 in Schools team! This year we’re representing
          Scotland at the{" "}
          <a
            href="https://www.f1inschools.com/"
            target="_blank"
            className="font-bold underline"
          >
            2024 World Finals
          </a>{" "}
          in Saudi Arabia, and we’d love to take you along for the ride.
        </p>
        <WhatIsF1iS />
        <AboutUs />
        <div className="hover:scale-[1.02] transition-all shadow-2xl flex flex-col h-40 bg-gradient-to-r from-vega-blue to-vega-pink rounded-lg font-bold text-white p-5">
          <p className="text-center my-auto w-full text-4xl text-shadow">
            ‘Working together to reach the stars’
          </p>
        </div>
        <Image
          src={`/team-photos/team-huddle.jpg`}
          width={1500}
          height={1000}
          alt={`Vega Working with School Pupils`}
          priority={true}
          style={{ width: "100%", height: "auto" }}
          className="rounded-md shadow-lg hover:scale-[1.02] transition-all"
        />
        <SponsorCarousel />
      </div>
    </>
  );
}

function WhatIsF1iS() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-5">
      <div className="my-auto basis-1/3">
        <Image
          src={`/team-photos/team-trophy.jpg`}
          width={750}
          height={500}
          alt={`Vega Working with School Pupils`}
          priority={true}
          style={{ width: "100%", height: "auto" }}
          className="rounded-md shadow-2xl hover:scale-[1.02] transition-all"
        />
      </div>
      <div className="basis-2/3 my-auto">
        <p className="md:ml-5">
          <span className="font-bold">What is F1 in Schools?</span>
          <br />
          F1 in Schools is an international youth competition with a focus on
          STEM, where teams of students design, build and race miniature F1
          cars. Alongside this, teams must produce portfolios covering their
          engineering and enterprise work, a pit display, a verbal presentation
          and fundraise to support their F1 in Schools journey. F1 in Schools
          offers students the chance to enter the world of STEM, form contacts
          in F1, and learn practical skills they can apply in later careers.
          Through both its industry partners and close connection to F1, the
          competition has offered many a pathway into working in the sport, an
          opportunity we are eager to take ourselves!
        </p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-5">
      <div className="basis-2/3 my-auto">
        <p>
          <span className="font-bold">About Us</span>
          <br />
          We’re a Professional Class F1 in Schools team formed of six students
          from Linlithgow Academy, competing in the 2024 World Finals.
          Previously, we’ve won the Scottish Regional Finals before coming 2
          <sup>nd</sup> in the UK National Finals, allowing us to qualify for
          Worlds! We’re hugely community oriented, supporting the F1 in Primary
          Schools competition in our local area and partnering with local
          businesses to succeed together. We never would have been able to
          progress to the massive stage of Worlds without our community’s
          backing, so we hope to continue our crucial link with them into the
          future.
        </p>
      </div>
      <div className="my-auto basis-1/3">
        <Image
          src={`/team-photos/team-interview.jpg`}
          width={750}
          height={500}
          alt={`Vega Working with School Pupils`}
          priority={true}
          style={{ width: "100%", height: "auto" }}
          className="rounded-md shadow-2xl hover:scale-[1.02] transition-all"
        />
      </div>
    </div>
  );
}
