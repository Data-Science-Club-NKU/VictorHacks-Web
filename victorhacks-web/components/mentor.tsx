import { PulsatingButton } from "./ui/pulsating-button";

export default function Mentor() {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-900 text-white p-8 m-12 rounded-lg shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('https://news.microsoft.com/wp-content/uploads/prod/sites/93/2017/02/Girls-in-STEM-gif-1.gif')"}}>
      <div className="text-5xl font-bold h-[10vh] flex items-end justify-end">
        <h1>Become a mentor!</h1>
      </div>
      <PulsatingButton className="mt-6"><a href="https://forms.gle/R7HMizRmsPzsc3VZ8">Apply Now</a></PulsatingButton>
    </div>
  );
}
