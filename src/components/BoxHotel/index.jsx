import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../services/config";

function Index({ id, title, location, thumbnail }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* thumbnail */}
      <div className="relative">
        <Link to="/">
          <img
            className="object-fill h-48 w-full"
            src={`${BaseUrl}/img/` + thumbnail}
            alt=""
          />
          <div className="absolute bg-blue-gray-800 opacity-0 hover:opacity-75 transition duration-500 ease-in-out flex items-center justify-center top-0 w-full h-full">
            <div className="text-white border-2 rounded border-white px-4 py-2">
              <Link to={`/hotel/${id}`}>Order Now</Link>
            </div>
          </div>
        </Link>
      </div>
      {/* content */}
      <div className="p-4 relative">
        {/* title */}
        <div className="text-lg font-semibold text-blue-gray-800">{title}</div>
        {/* location */}
        <div className="text-gray-600">{location}</div>
        {/* Price */}
        {/* <div className="font-semibold text-xl text-red-500">
          Rp 70.000 - Rp 150.000
        </div> */}
      </div>
    </div>
  );
}

export default Index;
