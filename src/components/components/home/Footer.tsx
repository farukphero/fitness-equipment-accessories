import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../../assets/images/EliteFit1.png";
export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="pt-10 border-t-2">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" relative="path">
            <img src={logo} alt="logo" className="h-8" />
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              EliteFit offers premium fitness equipment and accessories designed
              to elevate your workout experience.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Whether you are a beginner or a seasoned athlete, EliteFit
              provides high-quality, durable products to help you achieve your
              fitness goals.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              01516510203
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              devomarfarukk@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Savar, Dhaka
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <li className="flex gap-x-2">
              <a
                href="https://www.facebook.com/profile.php?id=100081178906073"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaFacebookF></FaFacebookF>
              </a>
              <a
                href="https://www.linkedin.com/in/omarfaruk-238764240/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaLinkedinIn></FaLinkedinIn>
              </a>
            </li>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Reach out to us for a personalized consultation and elevate your
            fitness journey with EliteFit.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright {date} All rights reserved.
        </p>
      </div>
    </div>
  );
};
