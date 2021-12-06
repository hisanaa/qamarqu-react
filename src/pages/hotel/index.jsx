import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BoxRoom } from "../../components";
import { BaseUrl } from "../../services/config";
import NumberFormat from "react-number-format";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  let params = useParams();
  let navigate = useNavigate();

  console.log(params.slug);
  const [hotel, setHotel] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState("-");
  const [room, setroom] = useState("");
  const [roomId, setRoomId] = useState("");
  const [guest, setguest] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const setForm = (price, guest, room, id) => {
    setPrice(price);
    setroom(guest);
    setguest(room);
    setRoomId(id);
  };

  // handling submit
  const Submit = () => {
    // const history = useHistory();

    const data = {
      hotel: hotel.title,
      hotel_id: hotel.id,
      hotel_thumb: hotel.thumbnail,
      price: price,
      room: room,
      room_id: roomId,
      guest: guest,
      checkin: checkin,
      checkout: checkout,
    };
    // console.log(data);

    if (
      price === "" ||
      room === "" ||
      guest === "" ||
      checkin === "" ||
      checkout === ""
    ) {
      alert("lengkapi data");
    } else {
      localStorage.setItem("cart", JSON.stringify(data));
      navigate("/hotel/checkout");
    }
    // history.push("/home");
  };

  // get hotel
  const getHotel = () => {
    axios
      .get(`${BaseUrl}/api/hotel/${params.slug}`)
      .then((res) => {
        console.log(res.data);
        setHotel(res.data);
      })
      .catch((err) => {});
  };
  // get rooms
  const getRooms = () => {
    axios
      .get(`${BaseUrl}/api/room/${params.slug}`)
      .then((res) => {
        console.log(res);
        setRooms(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getHotel();
    getRooms();
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
    <div className="bg-white">
      <div className="containers mx-auto">
        <div className="w-full bg-sky-500">
          <img
            className="object-fill w-full h-96"
            src={`${BaseUrl}/img/` + hotel.thumbnail}
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto">
        {/* thumbnail */}

        {/* content */}
        <div className="grid grid-cols-3 gap-5 p-5">
          <div className="col-span-2">
            {/* title */}
            <div className="text-3xl font-bold text-blue-gray-800">
              {hotel.title}
            </div>
            {/* location */}
            <div>{hotel.location}</div>
            {/* deskripsi */}
            <div>
              <div className="text-xl py-2 uppercase font-semibold text-blue-gray-800">
                Deskripsi
              </div>
              <div className="text-gray-600 pb-2">{hotel.description}</div>
            </div>
            {/* select room */}
            <div>
              <div className="text-xl py-2 uppercase font-semibold text-blue-gray-800">
                Select Room
              </div>
              <div className="grid p-5 grid-cols-3 gap-3 border shadow border-gray-300">
                {rooms.map((room) => {
                  return (
                    <BoxRoom
                      id={room.id}
                      title={room.title}
                      guest={room.guest_quota}
                      room={room.room_quota}
                      thumbnail={room.thumbnail}
                      onClick={() =>
                        setForm(
                          room.price,
                          room.guest_quota,
                          room.room_quota,
                          room.id
                        )
                      }
                      price={price}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* box checkout */}
          <div className="">
            <div className="border bg-white border-gray-300 p-5 shadow rounded">
              {/* price */}
              <div className="text-3xl h-12 flex items-center text-red-500 font-bold">
                {/* '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') */}
                <NumberFormat
                  value={price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"IDR"}
                />
              </div>
              {/* set tanggal booking */}
              <div className="grid grid-cols-1 gap-2 py-2">
                <div>
                  <label htmlFor="">Check In</label>
                  <input
                    className="w-full my-1 rounded text-blue-gray-600 border-gray-300"
                    type="date"
                    placeholder="Tamu"
                    onChange={(e) => setCheckin(e.target.value)}
                    value={checkin}
                  />
                </div>
                <div>
                  <label htmlFor="">Check Out</label>
                  <input
                    className="w-full my-1 rounded text-blue-gray-600 border-gray-300"
                    type="date"
                    placeholder="Tamu"
                    onChange={(e) => setCheckout(e.target.value)}
                    value={checkout}
                  />
                </div>
              </div>
              {/* set guest and room */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="">Tamu</label>
                  <input
                    className="w-full rounded bg-gray-100 text-blue-gray-600 border-gray-300"
                    type="text"
                    readOnly
                    value={guest}
                    placeholder="Tamu"
                  />
                </div>
                <div>
                  <label htmlFor="">Kamar</label>
                  <input
                    className="w-full bg-gray-100 rounded text-blue-gray-600 border-gray-300"
                    type="text"
                    readOnly
                    value={room}
                    placeholder="Kamar"
                  />
                </div>
              </div>
              {/* button */}
              <button
                onClick={() => Submit()}
                className="h-10 w-full mt-3 bg-blue-gray-800 text-white text-center rounded"
              >
                Order Room
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
