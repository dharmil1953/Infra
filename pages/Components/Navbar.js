import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-6 shadow-lg px-14">
      <div className="text-3xl md:text-4xl font-bold text-green-950">
      <Link href="/">
      <span className="text-yellow-500 mr-3">XYZ</span>
        Construction
    </Link>
      </div>
      <div className='flex justify-center items-center'> 
        <ul className="flex gap-8">
          <li>
            <Link href="/homePage/granth">
              <span
                className={`transition-colors duration-300 hover:text-yellow-300 ${
                  router.pathname === '/homePage/granth' ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                Granth
              </span>
            </Link>
          </li>
          <li>
            <Link href="/homePage/goup">
              <span
                className={`transition-colors duration-300 hover:text-yellow-300 ${
                  router.pathname === '/homePage/goup' ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                Goup
              </span>
            </Link>
          </li>
          <li>
            <Link href="/homePage/triple">
              <span
                className={`transition-colors duration-300 hover:text-yellow-300 ${
                  router.pathname === '/homePage/triple' ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                Triple
              </span>
            </Link>
          </li>
          <li>
            <Link href="/homePage/intellivita">
              <span
                className={`transition-colors duration-300 hover:text-yellow-300 ${
                  router.pathname === '/homePage/intellivita' ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                Intellivita
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
