import React from 'react';
import Image from 'next/image';
import heroImg from '../assets/heroImg.png';

const Footer = () => {
  return (
    <footer className="bg-[#eaf8d9] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="font-bold text-lg"><span className="text-green-600">BLC</span> Remodeling</h2>
          <p>Remodeling Contractor</p>
          <p>Contact with us:</p>
          <p className="flex items-center space-x-2"><span>📞</span><span>(206)-479-9242</span></p>
          <p>info@blcremodeling.com</p>
          <p className="font-bold">Our Blog - Useful<br />Tips & Inspirations</p>
        </div>
        {/* Middle Left */}
        <div>
          <h2 className="font-semibold mb-4">Our Service</h2>
          <ul className="space-y-2">
            <li>Exterior Remodeling</li>
            <li>Bathroom Remodeling</li>
            <li>Interior Remodeling</li>
            <li>Kitchen Remodeling</li>
            <li>Custom Builds</li>
            <li>Additions - ADU Units Construction</li>
            <li>New Construction</li>
            <li>Opt-out Preferences</li>
          </ul>
        </div>
        {/* Middle Right */}
        <div>
          <h2 className="font-semibold mb-4">Construction & Remodeling Contractor</h2>
          <ul className="space-y-2">
            <li>Medina</li>
            <li>Mercer Island</li>
            <li>Bellevue</li>
            <li>Kirkland Newcastle</li>
            <li>Redmond</li>
            <li>Issaquah</li>
            <li>Sammamish</li>
          </ul>
        </div>
        {/* Right Section with Image */}
        <div className="relative">
          <Image src={heroImg} alt="Remodeling Services" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-300 pt-6 text-sm">
        <p>@ 2018 - 2024 BLC Remodeling. All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <span>📘</span>
          <span>📸</span>
          <span>📍</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
