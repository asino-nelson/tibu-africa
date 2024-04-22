import { FaSchool } from "react-icons/fa";
import { GiHeartPlus } from "react-icons/gi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import ListItem from "./ListItem";
import Booking from "./Booking";


const Description = () => {
  return (
    <div className="py-10 flex flex-col gap-y-12 px-32">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-row gap-x-8 items-center">
          <div className="hidden lg:flex bg-gray-300 p-10 rounded-full items-center shrink-0">
            <GiHeartPlus size={52} />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold text-2xl lg:text-3xl flex items-center justify-between">
              Stomach Flu
            </p>
            <p className="font-medium">Age: 1 year and above</p>
            <div className="flex flex-col lg:flex-row items-end gap-x-2 lg:gap-x-3">
              <p className="font-medium shrink-0">Available at:</p>
              <div className="flex flex-row items-center gap-x-2 lg:gap-x-3">
                <div className="flex flex-row items-center gap-x-2 rounded py-1 px-2 bg-green-200">
                  <FaSchool />
                  <p className="font-medium text-sm">Flagship Clinic</p>
                </div>
                <div className="flex flex-row items-center gap-x-2 rounded py-1 px-2 bg-green-200">
                  <HiOutlineBuildingLibrary />
                  <p className="font-medium text-sm">Minute Clinic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Booking />
        </div>
      </div>

      <div>
        <p>
          The stomach flu (Gastroenteritis) is a short-term illness triggered by
          an infection and most times inflammation within the digestive system.
          Some of the common causes include viruses, bacteria, bacterial toxins,
          parasites, some chemicals and medication.
        </p>
      </div>

      <div className="flex flex-col lg:grid grid-cols-3 gap-10">
        <div className="bg-[#F6FCFD] w-full rounded p-6">
          <p className="font-bold mb-3 text-teal-300">
            Choose this if you have:
          </p>
          <ul className="px-6 py-3 space-y-3">
            <ListItem label="Diarrhoea" />
            <ListItem label="Vomiting" />
            <ListItem label="General body weakness" />
            <ListItem label="Abdominal pain" />
            <ListItem label="Blood in stool" />
          </ul>
        </div>

        <div className="flex col-span-2 w-full">
          <div className="bg-[#FFF8F7] rounded p-6">
            <p className="font-bold mb-3 text-teal-300">Whats included:</p>
            <p>
              We conduct a comprehensive medical evaluation and provide a
              suitable treatment plan for your condition. Medical care can be
              provided to you in our ultra-modern clinics. It includes
            </p>
            <ul className="px-6 py-3 space-y-3">
              <ListItem label="Medical Consultation" />
              <ListItem label="Lab test" />
              <ListItem label="Prescription" />
              <ListItem label="Virtual follow-up care" />
            </ul>
          </div>
        </div>

        <div className="lg:hidden flex justify-center">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Description;
