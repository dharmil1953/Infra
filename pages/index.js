import Image from "next/image";
import React from "react";
import Hero from "./assets/heroImg.png";
import About from "./assets/AboutImg.png";
import Bathroom from "./assets/Bathroom.jpg";
import CustomBuilds from "./assets/CustomBuilds.jpeg";
import Exterior from "./assets/Exterior.jpg";
import Kitchen from "./assets/Kitchen.jpg";
import NewAddition from "./assets/NewAddition.jpg";
import NewConstruction from "./assets/NewConstruction.jpg";
import FooterImg from "./assets/Footer.jpg";

export default function HomePage() {
  const ServiceCard = ({ title, description, image, linkText }) => {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col justify-between h-full">
        <div className="relative h-56 md:h-72">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
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
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12 md:py-16">
        <div className="md:flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-bold leading-12 mb-6 text-green-950">
            BLC remodeler <br /> trusted greater <br /> seattle home
          </h1>
          <p className="text-xl md:text-xl max-w-3xl mb-10 text-green-950">
            Great home improvement projects always start with a <br /> well-crafted
            budget, ensuring efficient use of resources, <br /> time, and money for
            success.
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-green-950 font-semibold rounded-full shadow-lg transition transform hover:scale-105">
            GET A FREE QUOTE
          </button>
        </div>
        <div className="md:flex-1">
          <div className="relative h-full">
            <Image
              src={Hero}
              alt="Home Remodeling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 px-4 md:px-12 py-12 md:py-16">
        <div className="md:flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-bold leading-12 mb-6 text-green-950">
            About Us
          </h1>
          <p className="text-xl md:text-xl max-w-3xl mb-10 text-green-950">
            We are a full service residential commercial remodeling and general
            contractor based out of Bellevue, Washington, serving the greater
            Seattle are. We are proud to serve near you Medina, Mercer Island
            Belleve, kirland, NewcastleRedmond issaquah.
          </p>
        </div>
        <div className="md:flex-1">
          <div className="relative h-full">
            <Image
              src={About}
              alt="Home Remodeling"
              className="w-full h-full object-cover"
            />
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

      <div className="bg-white rounded-3xl shadow-2xl mx-4 md:mx-12 my-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-green-950">
            Get a Free Quote
          </h1>
          <p className="text-xl md:text-xl text-green-950">
            Tell us about your project in detail, and we will
            <br />
            provide you with a FREE price estimation.
          </p>
          <button className="bg-yellow-500 rounded-md px-6 py-3 text-xl text-white">
            Request Now
          </button>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">
            BLC Remodeling - Your Local, Reputable Home Remodeling & New
            Construction Company
          </h1>
          <p className="text-xl">
            As a professional and experienced Seattle construction company, we
            do a variety of projects, from interior remodels to home additions
            and ADU units to your existing structures or buildings. High-end
            quality done right, from the concept to finish and every step in
            between. We work within your budget to attain the highest quality
            materials that are built to last and impress.
          </p>
        </div>
      </div>

      <div className="mx-4 md:mx-12 my-12 md:my-20">
        <div className="flex items-center justify-between p-8 md:p-16 shadow-lg rounded-3xl">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-4xl font-bold">
              <i className="fas fa-phone"></i>
            </span>
            <span className="text-yellow-500 text-4xl font-bold">206-372-6143</span>
          </div>
          <div>
            <span className="text-xl text-center justify-center items-center text-gray-700">
              Let's Talk About Your <br />
              Project details!
            </span>
          </div>
          <div>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-200">
              Contact Us
            </button>
          </div>
        </div>
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
              Serving the greater Seattle area beyond. For more information on our
              services, or to inquire about a future project, give us a call
            </p>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="space-y-5 font-bold text-xl">
                <div className="space-y-3">
                  <span className="block mb-3">📍 Our address</span>
                  <span>12819 SE 38th st,<br /> Bellevue, WA 98006</span>
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
    </>
  );
}
