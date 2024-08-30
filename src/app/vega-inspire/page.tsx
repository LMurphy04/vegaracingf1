import Title from "../title";
import Image from "next/image";

export default function VehaInspire() {
  return (
    <>
      <Title title="Vega Inspire" />
      <div className="mb-8 flex flex-col md:flex-row gap-8">
        <p className="flex-1 my-auto">
          A large part of our aim as a team is to encourage our local community
          to be more involved in STEM and with that inspiring the new
          generation. To achieve this, we created our VEGA Inspire program. This
          involves various activities and events we will conduct around the
          community with the core focus of spreading awareness of STEM
          opportunities. STEM is a crucial part of education and the workplace,
          and we want the next generation to know all about the various aspects
          of STEM and that any one of them could have a career in any part of it
          in the future. We believe that our program VEGA Inspire is the best
          way to educate future generations about the world of STEM in an
          enjoyable and engaging way.
        </p>
        <div className="flex-1">
          <Image
            src={`/team-photos/vega-inspire.jpg`}
            width={750}
            height={591}
            alt={`Vega Working with School Pupils`}
            priority={true}
            style={{ width: "100%", height: "auto" }}
            className="rounded-lg hover:scale-[1.02]"
          />
        </div>
      </div>
      {sections.map((section, index) => {
        return (
          <div key={index}>
            <p className="font-extrabold">{section["title"]}</p>
            <span className="border-t-[1px] border-black my-3 block" />
            <p>{section["content"]}</p>
          </div>
        );
      })}
    </>
  );
}

const sections = [
  {
    title: "F1 in Primary Schools Mentorship",
    content:
      "Our first step to launch VEGA Inspire has been the mentorship of local primary school students in their journey to the UK Nationals Finals. We had weekly meetings with the teams, aiding them in all areas from car design to their verbal presentations, providing feedback and guidance along their journey. They were hugely successful at F1 in Schools National Finals, picking up 2nd and 3rd place in the UK, and we hope that this motivates them to pursue a career in STEM in the future.",
  },
];
