import React from "react";

function index() {
  return (
    <div>
      {/* title */}
      <div className="text-center py-4 text-2xl text-gray-100 font-semibold">
        Termpat Ternyaman Hanya Untuk Kamu!
      </div>
      {/* form search */}
      <div className="w-1/2 shadow mx-auto bg-gray-100 p-5 rounded">
        {/* city */}
        <div className="py-2">
          <select
            type="text"
            class="w-full rounded text-blue-gray-600 border-gray-300"
          >
            <option value="#">Pilih Kota Tujuanmu</option>
          </select>
        </div>
        {/* guest and room */}
        <div className="grid py-2 grid-cols-2 gap-3">
          <input
            className="w-full rounded text-blue-gray-600 border-gray-300"
            type="date"
            placeholder="Tamu"
          />
          <input
            className="w-full rounded text-blue-gray-600 border-gray-300"
            type="date"
            placeholder="Kamar"
          />
        </div>
        {/* guest and room */}
        <div className="grid py-2 grid-cols-2 gap-3">
          <input
            className="w-full rounded text-blue-gray-600 border-gray-300"
            type="number"
            placeholder="Tamu"
          />
          <input
            className="w-full rounded text-blue-gray-600 border-gray-300"
            type="number"
            placeholder="Kamar"
          />
        </div>
        {/* button search */}
        <button className="w-full h-12 bg-blue-gray-700 text-white font-semibold rounded my-2">
          Temukan Hotelku
        </button>
      </div>
    </div>
  );
}

export default index;
