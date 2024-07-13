// import img from "../../../public/assets/saif.jpeg";
import img1 from "../../../assets/images/about/PICTURE.jpg";
 
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import "../../../styles/About.css";

const AboutMember = () => {
  return (
    <div className="aboutTimeLine">
      <div data-aos="fade-right" className="aboutLeftContainer aboutContainer">
        <div>
          <div className="imgWrap">
            <img src={img1} alt="director" />
          </div>
        </div>
      </div>
      <div className="aboutRightContainer aboutContainer">
        <div>
          <h2 className="text-3xl font-bold">MD. OMAR FARUK</h2>
          <b>Managing Director </b>
          <p>
            My dream is to establish EliteFit as a centre of excellence in the
            information technology industry by providing state-of-the-art
            solutions to people’s challenges, achieving the trust of our
            customers and setting a benchmark in customer services that will
            lead us to be a global brand in the industry.
          </p>
        </div>
      </div>
      <div data-aos="fade-right" className="aboutLeftContainer aboutContainer">
        <div>
          <div className="imgWrap">
            <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.1.1277052798.1689859246&semt=sph" alt="director" />
          </div>
        </div>
      </div>
      <div className="aboutRightContainer aboutContainer">
        <div>
          <h2 className="text-3xl font-bold text-black">NUSUL ISLAM</h2>
          <b>Chief Executive Officer (CEO) </b>
          <p>
            I am so grateful that you have taken the time to consider partnering
            with EliteFit  to serve you. While we are proud of our work and the
            results we will help you achieve … it is the relationships we build
            that will endure. I look forward to working closely with you and
            your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMember;
