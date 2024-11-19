import React from "react";
import FooterImg from "../assets/Footer.jpg";
import PortfolioSection from "../Components/PortfolioSection";
import Image from "next/image";
import AboutHero from "../assets/AboutHero.png";

const service = () => {
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

      <div className="mx-4 md:mx-12 my-12 md:my-20">
        <div className="flex flex-col md:flex-row justify-between px-4 md:px-12 mt-20">
          <div>
            <Image
              src={FooterImg}
              alt="Footer Image"
              className="h-full rounded-xl mx-8 md:mx-0"
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

export default service;
