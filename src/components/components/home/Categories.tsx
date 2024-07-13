import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "../../../styles/Categories.css"
import image1 from "../../../assets/images/categories/image1.avif";
import image2 from "../../../assets/images/categories/image2.avif";
import image3 from "../../../assets/images/categories/image3.avif";
import image4 from "../../../assets/images/categories/image4.avif";
import image5 from "../../../assets/images/categories/image5.avif";
import image6 from "../../../assets/images/categories/image6.avif";

import { Link } from "react-router-dom";
 

const categoryData = [
  {
    image: image1,
    name: "Cable Machines",
    url :"cable-machines"
  },
  {
    image: image2,
    name: "Benches",
    url :"benches"
  },
  {
    image: image3,
    name: "Barbells",
    url :"barbells"
  },
  {
    image: image4,
    name: "Squat & Power Racks",
    url :"squat-power-racks"
  },
  {
    image: image5,
    name: "Lower Body & Legs",
    url :"lower-body-legs"
  },
  {
    image: image6,
    name: "Body Weight & Gymnastics",
    url :"body-weight-gymnastics"
  },
];

const Categories = () => {




  return (
    <section>
      <h1 className="text-black font-semibold text-xl">
        GEAR DESIGNED TO COMPLEMENT OUR EVERYDAY LIFE
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
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
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {categoryData &&
          categoryData?.map((tes, index) => (
            <SwiperSlide key={index}>
              <Link to={`/category-products/${tes?.url}`}>
                <div className="flex flex-col justify-between">
                  
                      <div>
                        <img
                          src={tes?.image}
                          alt={tes?.name}
                          className="w-full h-52"
                        />

                        <div className="p-0 mt-4 flex gap-x-3">
                          <div className="flex items-center w-full   gap-0.5">
                            <div>
                              <div className="flex items-center justify-between">
                                <div color="blue-gray">{tes?.name}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Categories;
