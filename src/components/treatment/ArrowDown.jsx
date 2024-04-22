import { FaArrowDown } from "react-icons/fa6";

const ArrowDown = () => {
  return (
    <div className="hidden absolute inset-x-0 bottom-0 lg:flex justify-center">
      <div className="flex flex-col items-center justify-center animate-bounce cursor-pointer">
        <p>Find a treatment</p>
        <FaArrowDown />
      </div>
    </div>
  );
};

export default ArrowDown;
