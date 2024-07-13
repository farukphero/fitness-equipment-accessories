import image from "../../../assets/images/about/laptop-55d651fe.png";

const Contact = () => {
  return (
    <div className="my-10 lg:my-20">
      <div className=" flex justify-between">
        <div className="w-1/2">
          <div>
            <p className="text-2xl mt-2 font-bold">
              EliteFit: Empowering Physical Performance
            </p>
            <p className="my-2">
              EliteFit is your ultimate partner in achieving peak physical
              performance. As a trusted provider of premium fitness equipment
              and accessories, we design and deliver customized solutions that
              enhance your workout experience. Whether you're a professional
              athlete or a fitness enthusiast, our innovative products are
              crafted to help you push your limits and achieve your goals.
            </p>
          </div>
          <div className="space-y-2 text-black font-semibold">
            <p className="text-2xl mt-2 font-bold">
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
              <p className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Savar, Dhaka
              </p>
            </div>
          </div>
        </div>

        <div className="rightSideImgWRap">
          <img src={image} alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
