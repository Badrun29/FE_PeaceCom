import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardFeature = (props) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const { Img, Title, desc } = props;
  return (
    <div data-aos="fade-down" data-aos-duration="2000">
      <div className="flex flex-col md:w-fit sm:max-w-xl bg-slate-50 shadow-lg w-sm h-[248px] sm:flex-row px-10 py-4 justify-center items-center rounded-2xl">
        <img className="h-[132px] w-[132px]" src={Img} alt="pelayanan" />
        <div className="card-body sm:text-left text-center text-black">
          <h2 className="text-2xl font-bold text-blue-700">{Title}</h2>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeature;
