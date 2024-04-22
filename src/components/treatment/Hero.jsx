

const Hero = () => {
  return (
    <div className="lg:px-28 px-0 relative lg:h-[80vh] flex flex-col items-center pt-20">
      <div className="bg-cyan-950 w-full lg:h-[75%] text-white font-bold rounded-xl lg:grid grid-cols-2 flex flex-col-reverse">
        <div className="h-full flex items-center text-sm py-3 pr-6 lg:pr-0 pl-6 text-center lg:text-left w-full ">
          <p className="justify-center font-bold text-4xl lg:text-5xl 2xl:text-6xl p-10">
            Healthcere is only a call and click away!
          </p>
        </div>

        <div className="relative h-[25vh] lg:h-full rounded-2xl mx-8 mt-10">
          <img
            src="./images/image.png"
            className="w-full h-full relative rounded-2xl lg:rounded-3xl shadow-2xl "
            alt="image"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
