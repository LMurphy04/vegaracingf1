import Title from "../title";

export default function Home() {
  return (
    <>
      <Title title={"Partners"} />
      <div className="flex flex-col gap-3">
        <TierHeading title={"P1 Sponsors"} />
        <TierHeading title={"P2 Sponsors"} />
        <TierHeading title={"P3 Sponsors"} />
        <TierHeading title={"P4 Sponsors"} />
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
