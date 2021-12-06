import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../services/config";

function Index() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const loading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const getData = () => {
    axios
      .get(`${BaseUrl}/api/booking/${email}`)
      .then((res) => {
        // console.log(res.data);
        loading();
        setData(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    loading();
  }, []);

  if (isLoading === true) {
    return (
      <div className="bg-customBg flex items-center justify-center w-full h-screen fixed">
        <div className="w-5 h-5 bg-sky-600 rounded-full animate-bounce mx-2"></div>
        <div className="w-5 h-5 bg-sky-600 rounded-full animate-bounce mx-2"></div>
        <div className="w-5 h-5 bg-sky-600 rounded-full animate-bounce mx-2"></div>
      </div>
    );
  }
  return (
    <div className="mx-auto container py-5">
      <div className="w-2/4 mx-auto">
        <label htmlFor="">Email</label>
        <input
          className="w-full my-1 rounded text-blue-gray-600 border-gray-300"
          type="text"
          placeholder="Masukan Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => getData()}
          className="h-10 px-5 mt-3 bg-blue-gray-800 text-white text-center rounded"
        >
          Check Data
        </button>
      </div>
      {/* table */}
      <div className="grid grid-cols-4 gap-3 my-4">
        {data.map((item) => {
          return (
            <div className="w-full bg-gray-100 rounded p-5">
              <div className="font-semibold">Booking ID : {item.id}</div>
              <div className="font-semibold">Hotel ID : {item.hotel_id}</div>
              <div className="font-semibold">Room ID : {item.room_id}</div>
              <div className="font-semibold">Name : {item.name}</div>
              <div className="font-semibold">Email : {item.email}</div>
              <div className="font-semibold">Hp : {item.hp}</div>
              <div className="font-semibold">Check In : {item.checkin}</div>
              <div className="font-semibold">Check Out : {item.checkout}</div>
              <div className="font-semibold">
                Status : {item.status == 1 ? "Succes" : "Not Success"}
              </div>
              <div className="font-semibold">
                Payment Method : {item.payment_method}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
