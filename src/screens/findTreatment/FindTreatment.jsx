import ArrowDown from "../../components/treatment/ArrowDown";
import Hero from "../../components/treatment/Hero";
import Testimonial from "../../components/treatment/Testimonial";
import Treatments from "../../components/treatment/Treatments";

const FindTreatment = () => {
  return (
    <div className=" py-7 lg:py-14 overflow-x-hidden overflow-y-hidden">
      <Hero />
      <ArrowDown />
      <Treatments />
      <Testimonial />
    </div>
  );
};

export default FindTreatment;
