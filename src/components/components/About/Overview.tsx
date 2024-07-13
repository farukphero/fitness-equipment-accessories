import "../../../styles/About.css";
import Lottie from "lottie-react";
import mission from "../../../assets/lottie/Animation - 1720879014460.json";
import vision from "../../../assets/lottie/I0nacZYks2.json";
const Overview = () => {
  return (
    <div className="my-10">
      <h2 className="text-black font-semibold text-xl pb-3 border-b-4 border-[#D35E25] inline-block">
        EliteFit Company Overview
      </h2>

      <div className="mt-5 mb-5">
        <h2 className="text-[44px] font-bold text-[#D35E25]">Our History </h2>
        <p className=" text-justify">
          EliteFit was founded in 2024, with a mission to revolutionize the
          fitness industry by providing high-quality, innovative fitness
          equipment and accessories. From its humble beginnings as a small
          startup, EliteFit has grown into a well-respected brand known for its
          commitment to excellence and customer satisfaction. Over the years,
          the company has expanded its product line to include a wide range of
          fitness accessories, catering to both professional athletes and
          fitness enthusiasts.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-8 md:pt-16">
        <div>
          <h3 className="text-5xl font-bold text-[#D35E25]">Mission</h3>
          <p className="mt-3 leading-8">
            EliteFit's mission is to empower individuals to achieve their
            fitness goals by offering superior fitness equipment and
            accessories. The company is dedicated to enhancing the workout
            experience through products that are not only effective but also
            durable and user-friendly. EliteFit aims to inspire a healthy and
            active lifestyle, making fitness accessible and enjoyable for
            everyone.
          </p>
        </div>
        <div>
          <div className="flex justify-center lg:-mt-20">
            <Lottie
              className="w-4/5 scale-90"
              animationData={mission}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-8 md:pt-16">
        <div>
          <div className="hidden lg:flex justify-center lg:-mt-20">
            <Lottie
              className="w-4/5 scale-75"
              animationData={vision}
              loop={true}
            ></Lottie>
          </div>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-[#D35E25]">Vision</h3>
          <p className="mt-3 leading-8">
            EliteFit envisions a world where fitness is an integral part of
            everyday life. The company strives to be a global leader in the
            fitness equipment industry by continuously innovating and adapting
            to the evolving needs of its customers. EliteFit is committed to
            sustainability and aims to create products that contribute to a
            healthier planet. The company's ultimate goal is to inspire a
            community of fitness enthusiasts who are motivated to lead
            healthier, happier lives.
          </p>
        </div>
        <div>
          <div className="lg:hidden flex justify-center lg:-mt-20">
            <Lottie
              className="w-4/5 scale-100"
              animationData={mission}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
