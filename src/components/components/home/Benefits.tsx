import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "../../../styles/Categories.css";
import image1 from "../../../assets/images/benefits/Kettlebell_promo_card.jpg";
import image2 from "../../../assets/images/benefits/dumbell-promo-card.webp";
import image3 from "../../../assets/images/benefits/weight_plates_copy.jpg";

const benefitsData = [
  {
    image: image1,
    name: "Kettlebells",
    benefits: [
      "Dumbbells can be used to target multiple muscle groups, providing a comprehensive workout for the entire body.",
      "Using dumbbells requires balance and coordination, enhancing stability and core strength.",
      "Easy to store and transport, making them perfect for home gyms and travel.",
      "Available in various weights, allowing for progressive overload and customized workout intensity.",
      "A versatile investment that provides numerous exercise options without the need for multiple pieces of equipment.",
    ],
  },
  {
    image: image2,
    name: "Dumbbells",
    benefits: [
      "Dumbbells can be used to target multiple muscle groups, providing a comprehensive workout for the entire body.",
      "Using dumbbells requires balance and coordination, enhancing stability and core strength.",
      "Easy to store and transport, making them perfect for home gyms and travel.",
      "Available in various weights, allowing for progressive overload and customized workout intensity.",
      "A versatile investment that provides numerous exercise options without the need for multiple pieces of equipment.",
    ],
  },
  {
    image: image3,
    name: "Weight Plates",
    benefits: [
      "Dumbbells can be used to target multiple muscle groups, providing a comprehensive workout for the entire body.",
      "Using dumbbells requires balance and coordination, enhancing stability and core strength.",
      "Easy to store and transport, making them perfect for home gyms and travel.",
      "Available in various weights, allowing for progressive overload and customized workout intensity.",
      "A versatile investment that provides numerous exercise options without the need for multiple pieces of equipment.",
    ],
  },
];

const Benefits = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-between">
        <h1 className="text-black font-semibold text-xl">
          BENEFITS OF PRODUCTS
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={4000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-10"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="  mt-10">
          {benefitsData &&
            benefitsData?.map((tes, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
                  <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8  lg:max-w-screen-xl">
                    <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                      <div className="pb-5 text-xl md:text-3xl font-bold text-[#D56128]">
                        {tes?.name}
                      </div>
                      <div className="px-3 pb-3">
                        <span className="  text-gray-600 text-sm">
                          {tes?.benefits?.map((benefit, index) => (
                            <ul key={index}>
                              <li className="pt-2 text-justify">
                                <span className="font-semibold">
                                  {index + 1}.{" "}
                                </span>{" "}
                                <span>{benefit}</span>{" "}
                              </li>
                            </ul>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                      src={tes?.image}
                      alt={tes?.name}
                      className="w-full h-full rounded-t-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Benefits;
