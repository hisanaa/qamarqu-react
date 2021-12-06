import React from "react";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../services/config";

function index({ guest, room, onClick, title, thumbnail, id }) {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-100">
      {/* thumbnail */}
      <div className="relative">
        <img
          className="object-fill h-48 w-full"
          src={`${BaseUrl}/img/${thumbnail}`}
          alt=""
        />
      </div>
      {/* content */}
      <div className="py-2">
        <div className="text-center text-base font-semibold">{title}</div>
        <div className="text-center pb-2 text-base font-semibold">
          {room} Kamar / {guest} Tamu
        </div>
        {/* button */}
        <div className="flex justify-center pb-2">
          <button
            onClick={onClick}
            className={` bg-sky-500 text-center uppercase px-3 py-1 rounded text-white font-semibold`}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
