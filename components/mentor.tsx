import { PulsatingButton } from "./ui/pulsating-button";

export default function Mentor() {
  return (
    <div className="m-12">
      {/* Desktop: Image with overlay text (visible on sm and up) */}
      <div
        className="relative hidden sm:block h-96 bg-gray-900 rounded-lg shadow-lg bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://news.microsoft.com/wp-content/uploads/prod/sites/93/2017/02/Girls-in-STEM-gif-1.gif')",
        }}
      >
        <div className="absolute top-4 left-4 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h1 className="text-black text-xl sm:text-3xl font-Tomorrow font-medium">
            Become a mentor!
          </h1>
          <PulsatingButton className="w-fit px-6 py-2 rounded-md">
            <a href="https://forms.gle/R7HMizRmsPzsc3VZ8">Apply Now</a>
          </PulsatingButton>
        </div>
      </div>

      {/* Mobile: Image on top, text and button below */}
      <div className="sm:hidden">
        <div
          className="h-64 bg-gray-900 rounded-lg shadow-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://news.microsoft.com/wp-content/uploads/prod/sites/93/2017/02/Girls-in-STEM-gif-1.gif')",
          }}
        ></div>
        <div className="mt-4 flex flex-col items-center space-y-4">
          <h1 className="text-black text-xl font-Tomorrow font-medium">
            Become a mentor!
          </h1>
          <PulsatingButton className="w-fit px-6 py-2 rounded-full">
            <a href="https://forms.gle/R7HMizRmsPzsc3VZ8">Apply Now</a>
          </PulsatingButton>
        </div>
      </div>
    </div>
  );
}
