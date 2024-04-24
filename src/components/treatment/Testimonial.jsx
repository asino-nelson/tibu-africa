import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Names",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore.",
  },
  {
    name: "Names",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore.",
  },
  {
    name: "Names",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore.",
  },
  {
    name: "Names",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore.",
  },
  {
    name: "Names",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore.",
  },
  {
    name: "Names",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <div className="w-full m-auto py-10 lg:py-14 overflow-x-hidden lg:overflow-x-visible">
      <div className="w-full lg:w-1/2 mx-auto">
        <p className="font-semibold text-center text-2xl lg:text-4xl">
          Words From Our Health Rockstars!
        </p>
        <p className="pt-6 text-center text-base lg:text-xl">
          See what our health champions say about us
        </p>
      </div>

      
      <Slider
        {...settings}
        className="flex flex-row w-full"
      >
        {data.map((d) => (
          <div
            key={d.name}
            className=" relative inline-block w-[317px]"
          >
            <div className="min-h-[30vh] flex flex-col items-end justify-between border shadow-lg rounded-2xl p-6 m-6 text-sm">
              <div className="pb-4">
                <p>{d.message}</p>
              </div>
              <div className="flex justify-end items-end">
                <p className="text-rose-400">{d.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
