import axios from "axios";
import React, { useEffect, useState } from "react";
import { BoxSearch, BoxHotel } from "../../components";
import { BaseUrl } from "../../services/config";

function Home() {
  const [hotels, setHotels] = useState([]);

  // get hotel
  const getHotel = () => {
    axios
      .get(`${BaseUrl}/api/hotel`)
      .then((res) => {
        // console.log(res.data);
        setHotels(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getHotel();
  }, []);
  return (
    <div>
      {/* // section box search */}
      <div className="bg-sky-500 p-5">
        <div className="container mx-auto">
          {/* box search
          <BoxSearch /> */}
        </div>
      </div>
      {/* section hot hotels */}
      <div className="bg-gray-100 p-5">
        <div className="container mx-auto">
          <div className="text-2xl py-5 uppercase text-center font-semibold text-blue-gray-700">
            Tempat Ternyaman Hanya Untuk Kamu!
          </div>

          <div className="grid grid-cols-4 gap-4 ">
            {hotels.map((hotel) => {
              return (
                <BoxHotel
                  title={hotel.title}
                  location={hotel.location}
                  id={hotel.id}
                  thumbnail={hotel.thumbnail}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
