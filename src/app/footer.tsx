import Image from "next/image";

export default function Footer() {
  return (
    <div className="text-center flex-col flex gap-2 py-5 w-full">
      <p className="text-xs text-center">
        Official Vega Racing F1iS Website | Developed by Liam Murphy 2024
      </p>
      <div className="flex flex-row gap-4 justify-center">
        <a href="https://www.instagram.com/vegaracing_f1is/" target="_blank">
          <Image
            src={`/socials/instagram.svg`}
            width={15}
            height={15}
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
            width={15}
            height={15}
            alt={`LinkedIn Logo`}
            priority={true}
          />
        </a>
        <a href="https://x.com/VegaRacingF1IS" target="_blank">
          <Image
            src={`/socials/x.svg`}
            width={15}
            height={15}
            alt={`X Logo`}
            priority={true}
          />
        </a>
        <a href="https://www.tiktok.com/@vegaracing_f1is" target="_blank">
          <Image
            src={`/socials/tiktok.svg`}
            width={12}
            height={12}
            alt={`TikTok Logo`}
            priority={true}
          />
        </a>
      </div>
    </div>
  );
}
