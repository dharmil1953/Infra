import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-6 px-4 md:px-14 bg-transparent">
      <div className="text-3xl font-semibold">
        <Link href="/">
          <span className="text-yellow-400 md:ml-8 ml-2">XYZ</span> Construction
        </Link>
      </div>
      <div className="hidden md:block font-semibold text-md">
        <ul className="flex gap-6">
          <Link href="/">
            <li
              className={`transition-colors duration-300 hover:text-yellow-300 ${
                router.pathname === '/' ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/service">
            <li
              className={`transition-colors duration-300 hover:text-yellow-300 ${
                router.pathname === '/service' ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              Service
            </li>
          </Link>
          <Link href="/service-area">
            <li
              className={`transition-colors duration-300 hover:text-yellow-300 ${
                router.pathname === '/service-area' ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              Service Area
            </li>
          </Link>
          <Link href="/portfolio">
            <li
              className={`transition-colors duration-300 hover:text-yellow-300 ${
                router.pathname === '/portfolio' ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              Portfolio
            </li>
          </Link>
          <Link href="/about-us">
            <li
              className={`transition-colors duration-300 hover:text-yellow-300 ${
                router.pathname === '/about-us' ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              About us
            </li>
          </Link>
        </ul>
      </div>
      <div className="md:hidden">
        <button
          className="bg-yellow-400 p-3 rounded-lg"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <div className="flex justify-end">
              <button onClick={() => setIsDrawerOpen(false)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <ul className="mt-4 space-y-4">
              <Link href="/">
                <li
                  className={`transition-colors duration-300 hover:text-yellow-300 ${
                    router.pathname === '/' ? 'text-yellow-300 font-semibold' : ''
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href="/service">
                <li
                  className={`transition-colors duration-300 hover:text-yellow-300 ${
                    router.pathname === '/service' ? 'text-yellow-300 font-semibold' : ''
                  }`}
                >
                  Service
                </li>
              </Link>
              <Link href="/service-area">
                <li
                  className={`transition-colors duration-300 hover:text-yellow-300 ${
                    router.pathname === '/service-area' ? 'text-yellow-300 font-semibold' : ''
                  }`}
                >
                  Service Area
                </li>
              </Link>
              <Link href="/portfolio">
                <li
                  className={`transition-colors duration-300 hover:text-yellow-300 ${
                    router.pathname === '/portfolio' ? 'text-yellow-300 font-semibold' : ''
                  }`}
                >
                  Portfolio
                </li>
              </Link>
              <Link href="/about-us">
                <li
                  className={`transition-colors duration-300 hover:text-yellow-300 ${
                    router.pathname === '/about-us' ? 'text-yellow-300 font-semibold' : ''
                  }`}
                >
                  About us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
      <div className="hidden md:block">
        <button className="bg-yellow-400 p-3 rounded-lg">Let's Talk!</button>
      </div>
    </div>
  );
};

export default Navbar;
