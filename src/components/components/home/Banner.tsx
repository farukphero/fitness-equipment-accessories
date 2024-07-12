import "../../../styles/Banner.css"
import lott21 from "../../../assets/lottie/staggered_push_ups (1).json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-8 md:pt-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold leading-snug banner-text mt-8 md:mt-[7rem]">
            Stay Healthy Even If you <br /> Stay
            <span className="text-all-green"> At Home</span>
          </h1>
          <p className="mt-4">
            Achieve Your Training Goals With The Right Plan, Not With A Luck.
          </p>
          {/* <div className="flex flex-row gap-4 mt-6 justify-center items-center">
            {" "}
            <button className="border-2 px-8 py-3 border-[#7BC8D5] btn-explore font-bold  rounded-md ">
              Contact
            </button>{" "}
            <button className="btn-explore-about border-2 px-8 py-3 border-[#7BC8D5] rounded-md ">
              About
            </button>
          </div> */}
        </div>
        <div>
          <div className="flex justify-center -mt-20">
            <Lottie
              className="w-4/5 scale-110"
              animationData={lott21}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
