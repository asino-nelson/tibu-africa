import Joints from "./Joints";

const CardData = [
  {
    image: "../images/speak.png",
    description: "Speak with our care team",
  },
  {
    image: "./images/schedule.png",
    description: "Schedule your appointment and location",
  },
  {
    image: "./images/clinician.png",
    description: "Get treatment from our licenced clinicians",
  },
  {
    image: "./images/prescription.png",
    description: "Obtain your signed digital prescription",
  },
  {
    image: "./images/virtual-care.png",
    description: "Receive follow-up virtual care in 24-48hrs",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-teal-950 text-white py-6 lg:py-10">
      <div className="w-full lg:w-1/2 mx-auto">
        <p className="font-semibold text-4xl text-center mb-6 lg:mb-0">
          How it works
        </p>
      </div>
      <Joints />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 font-medium relative px-28">
        {CardData.map((data) => (
          <div
            key={data.image}
            className="flex flex-col text-center w-3/4 mx-auto"
          >
            <div className="h-[200px] w-full relative">
              <img src={data.image} alt=""/>
            </div>
            <p className="pb-4">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
