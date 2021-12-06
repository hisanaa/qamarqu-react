import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../services/config";
import NumberFormat from "react-number-format";

function Checkout() {
  const [isLoading, setIsLoading] = useState(true);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isActive, setIsActive] = useState(null);
  const [cart, setCart] = useState([]);
  const [notif, setNotif] = useState(false);
  let navigate = useNavigate();

  const loading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loading();
    let cart = JSON.parse(localStorage.getItem("cart"));
    setCart(cart);
    const data = [
      {
        title: "Transfer Bank",
      },
      {
        title: "Virtual Account",
      },
      {
        title: "Kartu Kredit",
      },
      {
        title: "Alfamart",
      },
      {
        title: "Indomaret",
      },
      {
        title: "Gopay",
      },
      {
        title: "Shopee Pay",
      },
      {
        title: "Ovo",
      },
    ];
    setPaymentMethod(data);
  }, []);

  // function pay
  const Pay = () => {
    if (
      first === "" ||
      last === "" ||
      email === "" ||
      hp === "" ||
      paymentMethod === ""
    ) {
      alert("silahkan lengkapi data");
    } else {
      let cart = JSON.parse(localStorage.getItem("cart"));
      let data = {
        name: first + " " + last,
        email: email,
        hp: hp,
        hotel_id: cart.hotel_id,
        room_id: cart.room_id,
        checkin: cart.checkin,
        checkout: cart.checkin,
        status: 1,
        payment_method: isActive,
      };

      axios
        .post(`${BaseUrl}/api/booking`, data)
        .then((res) => {
          console.log(res);
          loading();
          setNotif(true);
        })
        .catch((err) => {
        console.log(err)
      });
//          const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'Fetch POST Request Example' })
// };
fetch(`${BaseUrl}/api/booking`, data)
    .then(response => response.json())
    .then(data => console.log(data) );
     
    }
  };

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
    <div className="w-full h-full flex items-center">
      {/* data order */}
      <div className="w-4/5 p-5 mx-auto">
        {/* notif */}
        {notif ? (
          <div className="bg-gray-100 w-full h-32 my-5 rounded-lg p-5">
            <div className="text-2xl font-semibold ">Order Berhasil</div>
            {/* <div>Cek email untuk melihat data detail order</div> */}
            <div>
              Pergi ke halaman{" "}
              <Link to="/booking" className="text-sky-500">
                pesanan saya
              </Link>{" "}
              untuk melihat data order
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="grid grid-cols-3 gap-4">
          {/* left box */}
          <div className="col-span-2">
            {/* data */}
            <div className="mb-5 border col-span-2 shadow">
              {/* title header */}
              <div className="bg-gray-100 p-5">
                <div className="text-xl font-semibold text-blue-gray-800">
                  Masukan Rincian Anda
                </div>
                <div className="text-sm text-gray-500">
                  Kami akan menggunakan informasi ini untuk berbagi informasi
                  pemesanan Anda
                </div>
              </div>
              {/* body */}
              <div className="grid grid-cols-2 gap-4 p-5 bg-white">
                <div>
                  <label htmlFor="">Nama Depan</label>
                  <input
                    className="w-full my-1 rounded text-blue-gray-600 border-gray-300"
                    type="text"
                    placeholder="Nama Lengkap"
                    onChange={(e) => setFirst(e.target.value)}
                    value={first}
                  />
                </div>
                <div>
                  <label htmlFor="">Nama Belakang</label>
                  <input
                    className="w-full my-1 rounded text-blue-gray-600 border-gray-300"
                    type="text"
                    placeholder="Alamat Email"
                    onChange={(e) => setLast(e.target.value)}
                    value={last}
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    className="w-full my-1 rounded text-blue-gray-600 border-gray-300"
                    type="text"
                    placeholder="Handphone"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <label htmlFor="">No. Hp</label>
                  <input
                    className="w-full my-1 rounded text-blue-gray-600 border-gray-300"
                    type="text"
                    placeholder="Handphone"
                    onChange={(e) => setHp(e.target.value)}
                    value={hp}
                  />
                </div>
              </div>
            </div>
            {/* payment method */}
            <div className="mb-5 border col-span-2 shadow">
              {/* title header */}
              <div className="bg-gray-100 p-5">
                <div className="text-xl font-semibold text-blue-gray-800">
                  Pilih Metode Pembayaran
                </div>
                <div className="text-sm text-gray-500">
                  Pilih salah satu metode pembayaran untuk melanjutkan
                </div>
              </div>
              {/* body */}
              <div className="grid grid-cols-6 gap-4 p-5 bg-white">
                {paymentMethod.map((method) => {
                  return (
                    <button
                      onClick={() => setIsActive(method.title)}
                      className={`${
                        isActive == method.title
                          ? "bg-blue-gray-800"
                          : "bg-sky-500"
                      } h-14 text-white font-semibold rounded`}
                    >
                      {method.title}
                    </button>
                  );
                })}
                {/* <div className="bg-red-200 h-14"></div>
                <div className="bg-red-200 h-14"></div>
                <div className="bg-red-200 h-14"></div>
                <div className="bg-red-200 h-14"></div> */}
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="">
            <div className="p-5 border">
              <div className="grid grid-cols-5 gap-3">
                {/* title */}
                <div className="text-xl col-span-3 font-semibold">
                  {cart.hotel}
                </div>
                <div className="w-full col-span-2 bg-red-200">
                  <img
                    className="object-fill h-24 w-full rounded"
                    src={`${BaseUrl}/img/` + cart.hotel_thumb}
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-11 py-3">
                {/* tamu */}
                <div className="border-t border-b col-span-4 h-10 flex items-center justify-center">
                  Tamu
                </div>
                <div className="border-t border-b h-10 flex items-center justify-center">
                  :
                </div>
                <div className="border-t border-b col-span-6 h-10 flex font-semibold items-center justify-center">
                  x {cart.guest}
                </div>
                {/* tamu */}
                <div className=" border-b col-span-4 h-10 flex items-center justify-center">
                  Kamar
                </div>
                <div className=" border-b h-10 flex items-center justify-center">
                  :
                </div>
                <div className=" border-b col-span-6 h-10 flex font-semibold items-center justify-center">
                  x {cart.room}
                </div>
                {/* Checkin */}
                <div className=" border-b col-span-4 h-10 flex items-center justify-center">
                  Check In
                </div>
                <div className=" border-b h-10 flex items-center justify-center">
                  :
                </div>
                <div className=" border-b col-span-6 h-10 flex font-semibold items-center justify-center">
                  {cart.checkin}
                </div>
                {/* Checkout */}
                <div className=" border-b col-span-4 h-10 flex items-center justify-center">
                  Check Out
                </div>
                <div className=" border-b h-10 flex items-center justify-center">
                  :
                </div>
                <div className=" border-b col-span-6 h-10 flex font-semibold items-center justify-center">
                  {cart.checkout}
                </div>
              </div>
              {/* total */}
              <div className="text-3xl text-center font-bold">
                <NumberFormat
                  value={cart.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"IDR"}
                />
              </div>
            </div>
            <button
              onClick={() => Pay()}
              className="h-10 w-full mt-3 bg-blue-gray-800 text-white text-center rounded"
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
      {/* payment method */}
    </div>
  );
}

export default Checkout;
