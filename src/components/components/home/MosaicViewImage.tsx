import "../../../styles/MosaicImage.css"
import image1 from "../../../assets/images/mosaic/152234442_s.webp";
import image2 from "../../../assets/images/categories/image2.avif";
import image3 from "../../../assets/images/mosaic/ACC014-50_Undulation_RopeBattle_Rope_with_Sleeve_1.5in_app_1.webp";
import image4 from "../../../assets/images/mosaic/Body-Weight.webp";
import image5 from "../../../assets/images/mosaic/Chin-Up-Bars2.webp";
import image6 from "../../../assets/images/mosaic/Screenshot_2024-03-11_at_1.31.55_PM.webp";
import image7 from "../../../assets/images/mosaic/homepage.webp";
import image8 from "../../../assets/images/categories/image1.avif";
import image9 from "../../../assets/images/categories/image5.avif";
import image10 from "../../../assets/images/categories/image3.avif";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const imageSection = () => {
  return (
    <section className="my-10">
      <h1  className="text-black font-semibold text-xl py-7">Images of healthy individual</h1>
      <div className="image-mosaic">
        {images.map((image, index) => (
          <div key={index} className={`image-item image-item-${index + 1}`}>
            <img src={image} alt={`Mosaic item ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default imageSection;
