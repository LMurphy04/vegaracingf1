import Title from "../title";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Title title={"Contact Us"} />
      <div className="text-center text-lg w-full grow content-center">
        <p className="text-3xl font-extrabold">
          We would love to hear from you!
        </p>
        <p>
          Drop us an email:{" "}
          <a className="underline" href="mailto:vegaracingf1@gmail.com">
            vegaracingf1@gmail.com
          </a>
        </p>
        <p className="my-3 font-bold">Connect with us on our socials:</p>
        <div className="flex flex-row gap-10 justify-center">
          <a href="https://www.instagram.com/vegaracing_f1is/" target="_blank">
            <Image
              src={`/socials/instagram.svg`}
              width={40}
              height={40}
              alt={`Instagram Logo`}
              priority={true}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vega-racing-329485274/"
            target="_blank"
          >
            <Image
              src={`/socials/linkedin.svg`}
              width={40}
              height={40}
              alt={`LinkedIn Logo`}
              priority={true}
            />
          </a>
          <a href="https://x.com/VegaRacingF1IS" target="_blank">
            <Image
              src={`/socials/x.svg`}
              width={40}
              height={40}
              alt={`X Logo`}
              priority={true}
            />
          </a>
        </div>
      </div>
    </>
  );
}
