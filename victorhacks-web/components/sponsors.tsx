import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const sponsors = [
  {
    name: "Google",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Tesla",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    name: "Facebook",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Netflix",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
];

const SponsorCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center justify-center p-4">
        <img className="h-16" alt={name} src={img} />
        <p className="mt-2 text-sm font-medium dark:text-white">{name}</p>
      </div>
    </figure>
  );
};

export function Sponsors() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden m-6">
      <h1 className="mb-6 text-5xl font-Tomorrow font-light uppercase text-gray-900 dark:text-white">
        SPONSORS
      </h1>
      <Marquee pauseOnHover className="[--duration:15s]">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </Marquee>
    </div>
  );
}
