import React from "react";
import AboutHero from "../assets/AboutHero.png";
import Image from "next/image";
import Bathroom from "../assets/Bathroom.jpg";
import CustomBuilds from "../assets/CustomBuilds.jpeg";
import Exterior from "../assets/Exterior.jpg";
import Kitchen from "../assets/Kitchen.jpg";
import NewAddition from "../assets/NewAddition.jpg";
import NewConstruction from "../assets/NewConstruction.jpg";
import FooterImg from "../assets/Footer.jpg";
import PortfolioSection from "../Components/PortfolioSection";

const AboutUs = () => {
  const ServiceCard = ({ title, description, image, linkText }) => {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col justify-between h-full">
        <div className="relative h-56 md:h-72">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{
              borderTopLeftRadius: "1.5rem",
              borderTopRightRadius: "1.5rem",
            }}
            layout="fill"
          />
        </div>
        <div className="p-6 text-center flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
          </div>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-block text-start bg-yellow-500 text-green-950 font-semibold py-3 px-6 rounded-full shadow-md transition transform hover:scale-105 w-full"
            >
              {linkText}
            </a>
          </div>
        </div>
      </div>
    );
  };

  const services = [
    {
      title: "Kitchen Remodeling",
      description:
        "Transform your kitchen into the heart of your home with our professional kitchen remodeling service. Enhance functionality, aesthetics, and value with our expert craftsmanship and luxurious gourmet kitchens.",
      image: Kitchen,
      linkText: "More details",
    },
    {
      title: "Bathroom Remodeling",
      description:
        "Revitalize your bathroom with our high quality bathroom remodeling service. From luxurious upgrades to efficient layouts, we`ll transform your space into a relaxing oasis you`ll love we bracing expertise in design.",
      image: Bathroom,
      linkText: "More details",
    },
    {
      title: "New Construction",
      description:
        "With our expertise as Seattle general contractor, we specialize in residential and commercial new construction projects. Construction Professionals for custom Homes and Commercial Buildings.",
      image: NewConstruction,
      linkText: "More details",
    },
    {
      title: "House Additions",
      description:
        "Transform your home with our professional home addition service. Personalized crafted attached or detached ADU Units. We'll help you expand your living space and create a functional area.",
      image: NewAddition,
      linkText: "More details",
    },
    {
      title: "Custom Builds",
      description:
        "We specialize in custom builds, crafting unique and personalized construction and remodeling projects tailored to your needs. Our experienced builder team works closely with you, along with architects and designers to bring your ideas to life.",
      image: CustomBuilds,
      linkText: "More details",
    },
    {
      title: "Exterior Remodeling",
      description:
        "Revitalize the exterior of your property with our exterior remodeling services. From expert exterior remodeling and durable siding installation to reliable roofing solutions, we cover all your property's exterior remodeling needs.",
      image: Exterior,
      linkText: "More details",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex-1 px-12 md:px-14">
          <h1 className="text-4xl md:text-7xl font-bold leading-12 mb-6 text-green-950">
            About BLC Remodeling: <br /> Bellevue's Premier <br /> Remodeling
            Contractor
          </h1>
          <p className="text-xl md:text-xl max-w-3xl mb-10 text-green-950">
            At BLC Remodeling, we provide ourselves on being <br /> Bellevue's
            trusted name in home remodeling and <br />
            renovation. With years of experience and a passion for <br />
            excellence, our team is dedicated to transforming your
            <br />
            living spaces into the home of your dreams.
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-green-950 font-semibold rounded-full shadow-lg transition transform hover:scale-105">
            GET A FREE QUOTE
          </button>
        </div>

        <div className="flex-1 hidden md:block">
          <div className="relative h-full">
            <Image
              src={AboutHero}
              alt="Home Remodeling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-4 md:mx-12 items-center justify-between p-8 md:p-16 shadow-2xl rounded-3xl my-8 md:my-12 bg-white">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:mr-8">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
            Let's talk about our project
          </h2>
          <br />
          <span className="block text-center md:text-left">
            Tell us about your project in detail, and we will <br />
            provide you with a FREE price estimation
          </span>
          <br />
          <div className="flex items-center justify-center md:justify-start space-x-2 my-4">
            <span className="text-yellow-500 text-3xl md:text-4xl font-bold">
              <i className="fas fa-phone"></i>
            </span>
            <span className="text-yellow-500 text-3xl md:text-4xl font-bold">
              206-372-6143
            </span>
          </div>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            <button className="bg-yellow-500 p-3 md:p-4 rounded-md">
              Contact Us
            </button>
            <button className="bg-yellow-500 p-3 md:p-4 rounded-md">
              Get a FREE Quote
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="px-4 md:px-6 text-center md:text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            BLC Remodeling Bellevue General Contractor Who are you?
          </h2>
          <br />
          <p className="text-sm md:text-lg leading-relaxed">
            Proudly serving the greater Seattle area including Medina, Mercer
            Island, Bellevue, <br />
            Kirkland, Newcastle, Redmond, Issaquah, and Sammamish. BLC
            Remodeling is a <br />
            family-owned and operated remodeling contractor and new construction{" "}
            <br />
            business based in Bellevue that has served the area for years.
          </p>
          <br />
          <p className="text-sm md:text-lg leading-relaxed">
            Our team of construction experts upholds the highest standards of
            excellence. <br />
            We have every tool necessary to make your next home remodel project
            exactly <br />
            what you dreamed of.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-50 px-4 mx-12">
        <div>
          <h1 className="text-center font-bold text-4xl mb-8">Our Process</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center space-y-2 bg-gray-100 rounded-2xl px-8 py-6 shadow-lg">
            <span className="font-bold text-3xl text-gray-800 p-4 rounded-lg shadow-lg bg-gray-300">
              1
            </span>
            <span className="text-lg text-gray-700 text-center font-bold">
              Consultation
            </span>
            <span className="text-sm text-gray-600 text-center">
              We take in your ideas and assess your home. This is a great time
              to ask questions.
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 bg-gray-100 rounded-2xl px-8 py-6 shadow-lg">
            <span className="font-bold text-3xl text-gray-800 p-4 rounded-lg shadow-lg bg-gray-300">
              2
            </span>
            <span className="text-lg font-bold text-gray-700 text-center">
              Design
            </span>
            <span className="text-sm text-gray-600 text-center">
              We'll review inspirations, discuss products, materials, and other
              options.
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 bg-gray-100 rounded-2xl px-8 py-6 shadow-lg">
            <span className="font-bold text-3xl text-gray-800 p-4 rounded-lg shadow-lg bg-gray-300">
              3
            </span>
            <span className="text-lg font-bold text-gray-700 text-center">
              Planning
            </span>
            <span className="text-sm text-gray-600 text-center">
              Finalize document & update budgets, construct timeline and develop
              schedule.
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 bg-gray-100 rounded-2xl px-8 py-6 shadow-lg">
            <span className="font-bold text-3xl text-gray-800 p-4 rounded-lg shadow-lg bg-gray-300">
              4
            </span>
            <span className="text-lg font-bold text-gray-700 text-center">
              Construction
            </span>
            <span className="text-sm text-gray-600 text-center">
              Project supervisor will be onsite daily to ensure the project
              meets specifications.
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12 py-12 md:py-16">
        <h1 className="text-6xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              linkText={service.linkText}
            />
          ))}
        </div>
      </div>

      <div className="mx-4 md:mx-12 my-12 md:my-20">
        <div className="flex flex-col md:flex-row justify-between px-4 md:px-12 mt-20">
          <div>
            <Image
              src={FooterImg}
              alt="Footer Image"
              className="h-full rounded-xl mx-0"
            />
          </div>
          <div className="items-start space-y-8 mt-8 md:mt-0">
            <h2 className="text-5xl font-bold">Do You Have a Question?</h2>
            <p className="max-w-lg text-xl">
              Serving the greater Seattle area beyond. For more information on
              our services, or to inquire about a future project, give us a call
            </p>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="space-y-5 font-bold text-xl">
                <div className="space-y-3">
                  <span className="block mb-3">📍 Our address</span>
                  <span>
                    12819 SE 38th st,
                    <br /> Bellevue, WA 98006
                  </span>
                </div>
                <div className="space-y-3">
                  <span className="block mb-3">📧 E-Mail</span>
                  <span>info@blcremodeling.com</span>
                </div>
                <div className="space-y-3">
                  <span className="block mb-3">📞 Phone</span>
                  <span>(206)-479-9242</span>
                </div>
              </div>
              <div>
                <form className="flex-col bg-white p-4 rounded-md shadow-xl mx-6">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="block bg-gray-100 p-2 my-6 rounded-xl"
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="block bg-gray-100 p-2 my-6 rounded-xl"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="block bg-gray-100 p-2 my-6 rounded-xl"
                  />
                  <input
                    type="textarea"
                    placeholder="Details"
                    className="block bg-gray-100 p-2 my-6 rounded-xl"
                  />
                  <button className="bg-yellow-500 p-4 rounded-lg w-full">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PortfolioSection />
    </div>
  );
};

export default AboutUs;
