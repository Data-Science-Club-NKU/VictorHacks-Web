import { cn } from "@/lib/utils";
// import { Marquee } from "./ui/marquee";
import ScrollReveal from "@/components/ui/text-reveal";
import { PulsatingButton } from "./ui/pulsating-button";

// const sponsors = [
//   {
//     name: "Google",
//     img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//   },
//   {
//     name: "Microsoft",
//     img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//   },
//   {
//     name: "Amazon",
//     img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//   },
//   {
//     name: "Tesla",
//     img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
//   },
//   {
//     name: "Facebook",
//     img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
//   },
//   {
//     name: "Netflix",
//     img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
//   },
// ];

const SponsorCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-40 cursor-pointer overflow-hidden rounded-md border p-2 transition-transform duration-300 hover:scale-105",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center justify-center p-2">
        <img className="h-10" alt={name} src={img} />
        <p className="mt-1 text-xs font-medium dark:text-white">{name}</p>
      </div>
    </figure>
  );
};

export function Sponsors() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden m-2 min-h-24">
      <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Tomorrow font-light uppercase text-gray-900 dark:text-white">
        SPONSORS
      </h1>
      {/* <Marquee pauseOnHover className="[--duration:10s] pt-8 mt-20">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </Marquee> */}
      <div className="text-center p-8 mb-2">
        <PulsatingButton className="w-fit px-6 py-2 mt-20 rounded-md mx-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdEPBSPX4vkd1ks_YSnUGZD6PTcYqnCpgCylNRDot0kwKdEMg/viewform?usp=dialog"
            target="_blank"
          >
            Apply Now
          </a>
        </PulsatingButton>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-300 mt-24"
        >
          🚀 Fuel Innovation, Empower Talent! Sponsor Victor Hacks and connect with the brightest minds shaping the future of tech.
        </ScrollReveal>
      </div>
    </div>
  );
}
