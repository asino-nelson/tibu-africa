import { FiPhone } from "react-icons/fi";

const TalkToUs = () => {
  return (
    <div className="py-10 lg:px-36 px-0 overflow-hidden text-white relative">
      <div className="w-full h-[300px] relative">
        <img
          src="./images/brush2.png"
          className="object-fill lg:object-contain object-center overflow-x-visible absolute"
          alt="brush-image"
        />

        <div className="absolute inset-y-0 w-full flex items-center justify-center">
          <div className="lg:w-3/5 flex flex-col lg:flex-row lg:items-center gap-4">
            <p className="font-semibold text-2xl lg:text-4xl text-center">{`Can't find what you're looking for?`}</p>
            <div className="flex justify-center -mr-8">
              <a
                href="#"
                className="group bg-black rounded px-6 py-3 font-semibold"
              >
                <div className="flex items-center relative whitespace-nowrap">
                  <FiPhone className="w-5 h-5 group-hover:opacity-0 transition ease-in-out" />
                  <span className="px-6 group-hover:opacity-0 transition ease-in-out">
                    Talk to us
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition ease-in-out">
                    +254 700000001
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute -right-10 -top-9">
          <div className="relative h-[300px] w-[300px]">
            <img
              src="./images/image1.png"
              className="absolute inset-0 h-[100%]"
              alt="image1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
