import Hero from "../../components/treatment/Hero";
import TalkToUs from "../../components/treatment/TalkToUs";
import Testimonial from "../../components/treatment/Testimonial";
import Treatments from "../../components/treatment/Treatments";

const FindTreatment = () => {
  return (
    <div className=" py-7 lg:py-14">
      <Hero />
      <Treatments />
      <TalkToUs />
      <Testimonial />
    </div>
  );
};

export default FindTreatment;
