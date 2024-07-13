import Contact from "@/components/components/About/Contact";
import Overview from "@/components/components/About/Overview";
import AboutMember from "@/components/components/About/TeamMembers";
import { Testimonial } from "@/components/components/About/Testimonial";
 

const About = () => {
  return (
    <>
      <Overview />
      <AboutMember/>
      <Testimonial/>
      <Contact/>
    </>
  );
};

export default About;
