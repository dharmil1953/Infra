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

export default function HomePage() {
  const ServiceCard = ({ title, description, image, linkText }) => {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col justify-between h-full">
        <div className="relative h-56">
          <Image src={image} alt={title} className="w-full h-full object-cover" style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }} layout="fill" />
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
    )
  }

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
      <div className="flex items-center justify-between">
        <div className="flex-1 px-12 md:px-14">
          <h1 className="text-4xl md:text-7xl font-bold leading-12 mb-6 text-green-950">
            BLC remodeler <br /> trusted greater <br /> seattle home
          </h1>
          <p className="text-xl md:text-xl max-w-3xl mb-10 text-green-950">
            Great home improvement projects always start with a <br />{" "}
            well-crafted budget, ensuring efficient use of resources, <br />
            time, and money for success.
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-green-950 font-semibold rounded-full shadow-lg transition transform hover:scale-105">
            GET A FREE QUOTE
          </button>
        </div>

        <div className="flex-1 hidden md:block">
          <div className="relative h-full">
            {/* <div className="absolute inset-0 bg-gray-800 opacity-80"></div> */}
            <Image
              src={Hero}
              alt="Home Remodeling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100">
        <div className="flex-1 px-12 md:px-14">
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
        <div className="flex-1 hidden md:block">
          <div className="relative h-full">
            {/* <div className="absolute inset-0 bg-gray-800 opacity-80"></div> */}
            <Image
              src={About}
              alt="Home Remodeling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between my-8 px-12 md:px-14">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">We Provide</h2>
          <p className="text-2xl">
            BLC Remodeling – Your Local, Reputable
            <br /> Home Remodeling & New Construction Company
          </p>
          <p className="text-lg">
            As a professional and experienced Seattle construction company,{" "}
            <br />
            we handle a variety of projects, from interior remodels to home
            <br /> additions and ADU units. We deliver high-end quality from
            concept to completion.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 max-w-3xl mt-12">
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#7BB43F"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Fully Licensed</h3>
              <p>Licensing can apply to a wide range of creative works.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#7BB43F"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Insured</h3>
              <p>we are fully insured and handle a variety of projects.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#7BB43F"
                className="w-10 h-10"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Family Business</h3>
              <p>As a professional and family Seattle construction company</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#7BB43F"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Top Angi</h3>
              <p>We deliver high-end quality from concept to completion.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#7BB43F"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1v2h6V6H5zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Professional Staff</h3>
              <p>Our team ensures high quality from concept to completion.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#7BB43F"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Innovation</h3>
              <p>We blend creative solutions with high-end quality.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#7BB43F"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L8 15.414l3.293 3.293a1 1 0 001.414-1.414L12.414 14H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L12 6.586l-1.293-1.293a1 1 0 00-1.414 1.414L10.586 8l-1.293 1.293a1 1 0 101.414 1.414L12 9.414l1.293 1.293a1 1 0 001.414-1.414L13.414 8l1.293-1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Professionalism</h3>
              <p>
                ADU units. Our skilled team ensures high-end quality from
                concept to completion.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl mx-12 my-12 md:px-12 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <div>
        <h1 className="text-6xl font-bold justify-center items-center flex">
          Our Services
        </h1>
        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
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
        </div>
      </div>

      <div className="my-8 flex-1 mx-12 md:px-14">
  <div className="flex items-center justify-between p-16 shadow-lg rounded-3xl">
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
</div>


    
    </>
  );
}
