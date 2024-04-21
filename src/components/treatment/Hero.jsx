import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-screen relative max-h-full flex flex-col items-center py-20">
      <div className="bg-cyan-950 w-full lg:h-[75%] text-white font-bold rounded-xl lg:grid grid-cols-2 flex flex-col-reverse">
        <div className="h-full flex items-center text-sm py-3 pr-6 lg:pr-0 pl-6 text-center lg:text-left w-full ">
          <p className="justify-center font-bold text-4xl lg:text-5xl 2xl:text-6xl p-10">
            Healthcere is only a call and click away!
          </p>
        </div>

        <div className="bg-rose-500 relative h-[25vh] lg:h-full rounded-xl mx-8 mt-10">
          <div className="h-full w-full relative rounded-2xl lg:rounded-2xl shadow-2xl">
            image
          </div>
        </div>
      </div>
      <div className="hidden absolute inset-x-0 bottom-0 lg:flex justify-center">
        <div className="flex flex-col items-center justify-center animate-bounce">
          <p>Find a treatment</p>
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
