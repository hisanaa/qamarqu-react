import React from "react";

function register() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="border border-gray-300 shadow rounded w-1/4 p-5">
        {/* title */}
        <div className="text-2xl py-3 text-gray-800 text-center font-bold">
          Daftar Untuk melanjutkan
        </div>
        {/* form */}
        <form>
          <div>
            <input
              className="w-full my-2 rounded text-blue-gray-600 border-gray-300"
              type="text"
              placeholder="Nama Lengkap"
            />
            <input
              className="w-full my-2 rounded text-blue-gray-600 border-gray-300"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-full my-2 rounded text-blue-gray-600 border-gray-300"
              type="text"
              placeholder="Password"
            />
            <button className="h-10 w-full mt-2 bg-blue-gray-800 text-white text-center rounded">
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;
