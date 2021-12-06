import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="hidden xl:block">
      <div className="bg-sky-500 w-full h-1"></div>
      {/* navbar */}
      <div className="shadow">
        <div className="container mx-auto">
          <div className="flex h-14 items-center justify-between">
            {/* logo */}
            <div className="text-sky-500 px-5 text-2xl font-bold flex">
              <a href="/" className="flex">
                Qamar <span className="text-blue-gray-800">qu</span>
              </a>
            </div>
            {/* menu */}
            <div className="px-5">
              <div className="flex flex-col text-gray-200 font-semibold text-base lg:flex-row w-full py-0">
                <div className="flex flex-col justify-center lg:flex-row">
                  <ul className="flex text-blue-gray-800 mx-auto">
                    <li className="block px-6 py-2 lg:py-5 group">
                      <Link to="/">Beranda</Link>
                    </li>
                    {/* <li className="block px-6 py-2 lg:py-5 group">
                      <Link to="/promo">Promo</Link>
                    </li> */}
                    <li className="block px-6 py-2 lg:py-5 group">
                      <Link to="/booking">Pesanan Saya</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
