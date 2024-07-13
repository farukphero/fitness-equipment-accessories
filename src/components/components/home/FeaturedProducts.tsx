import "../../../styles/Categories.css";
import image1 from "../../../assets/images/featured/TRD001AmstaffFitnessUnderdeskWoodenTreadmill_Main_FINAL.webp";
import image2 from "../../../assets/images/featured/PR182-AmstaffFitnessSD-5000SmithMachine_Main.webp";
import image3 from "../../../assets/images/featured/PRH1_SpaceSmart-WallMountedSingleStackTrainer_Mainv1_02.webp";
import image4 from "../../../assets/images/featured/PR181-SD2500SmithMachine_BaseProduct_05.webp";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredData = [
  {
    image: image1,
    name: "Amstaff Fitness Wooden Under desk Treadmill/Walking Pad",
    original_price: 1100,
    offered_price: 999,
    category : "benches"
  },
  {
    image: image2,
    name: "Amstaff Fitness SD-5000 All-In-one Smith Machine",
    original_price: 700,
    offered_price: 599,
    category : "squat-power-racks"
  },
  {
    image: image3,
    name: "SpaceSmart Wall-Mounted Functional Trainer - Single Stack",
    original_price: 1000,
    offered_price: 888,
    category : "body-weight-gymnastics"
  },
  {
    image: image4,
    name: "Amstaff Fitness SD-2500 All-In-one Smith Machine",
    original_price: 900,
    offered_price: 698,
    category : "cable-machines"
  },
];

const FeaturedProducts = () => {
  return (
    <section className="mt-20" id="features">
      <div className="flex justify-between">
        <h1 className="text-black font-semibold text-xl">FEATURED PRODUCTS</h1>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {featuredData &&
          featuredData?.map((tes, index) => (
            <Link key={index} to={`/category-products/${tes?.category}`}>
              <div className="flex flex-col justify-between border rounded-lg">
                <div>
                  <img
                    src={tes?.image}
                    alt={tes?.name}
                    className="w-full h-60 rounded-t-lg"
                  />

                  <div className="p-3">{tes?.name}</div>
                  <div className="p-3">
                    <span className="line-through text-gray-600 text-lg">
                      ${tes?.original_price}
                    </span>
                    <span className="text-gray-900 text-lg font-medium"> ${tes?.offered_price}</span>
                  </div>
                  <div className="flex justify-center py-5">
                    <Button variant="primary" className="mt-2">
                      View details
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
