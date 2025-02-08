import { PulsatingButton } from "./ui/pulsating-button";

export default function Mentor() {
  return (
    <div
      className="relative h-96 bg-gray-900 text-white p-8 m-12 rounded-lg shadow-lg bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://news.microsoft.com/wp-content/uploads/prod/sites/93/2017/02/Girls-in-STEM-gif-1.gif')",
      }}
    >
      <div className="absolute top-4 left-4 flex flex-col">
        <h1 className="text-5xl font-bold mb-4 font-Tomorrow font-medium">Become a mentor!</h1>
        <PulsatingButton className="w-fit px-6 py-2 rounded-full mx-auto">
          <a href="https://forms.gle/R7HMizRmsPzsc3VZ8">Apply Now</a>
        </PulsatingButton>
      </div>
    </div>
  );
}
