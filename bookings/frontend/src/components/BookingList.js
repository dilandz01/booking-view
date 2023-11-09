import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import logo from "../image/OW_LOGO_SHORT_BLK.png";
import background from "../image/Desktop.svg";

import QRCode from "react-qr-code";

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const todayDate = format(new Date(), "yyyy-MM-dd");

  const urlParams = new URLSearchParams(window.location.search);
  const storeId = urlParams.get("store_id");
  const value = `https://www.oscarwylee.com.au/booking/?location=${storeId}`;

  //API request to node server to access the main API
  const getBookings = async () => {
    const details = {
      from_date: todayDate,
      now: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      store_id: storeId,
      to_date: todayDate,
      type: "default",
    };

    await axios
      .post("https://ow-bookings-view.onrender.com", details)
      .then((res) => {
        setBookings(res.data);
        setDataLoaded(true);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getBookings();

    const refresh = setInterval(getBookings, 300000); // refresh every 5 mins
    return () => {
      clearInterval(refresh);
      console.log("clear interval");
    };
  }, [storeId]);

  return (
    <div className="flex overflow-y-hidden">
      <div
        className="bg-cover bg-center min-h-screen w-full relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col p-3 my-8 mx-2">
          <h2 className="text-white font-gotham-bold text-6xl ml-10 mr-20 ">
            Book a Bulk Billed
          </h2>
          <h2 className="text-white font-gotham-bold text-6xl ml-10 mr-20 mb-10">
            Eye Test Today
          </h2>

          <h3 className="text-white font-gotham-light text-2xl mx-10 my-2">
            Times available:
          </h3>

          {dataLoaded && bookings.length === 0 ? (
            <p className="text-white font-gotham-bold text-2xl m-10 p-2">
              Fully Booked For Today {format(new Date(), "dd/MM/yyyy")}
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-8 ml-10 mr-20 my-10">
              {bookings.slice(0, 12).map((booking, index) => (
                <div key={index} className="text-zinc-800 shadow-lg">
                  <p className="bg-white text-center text-3xl font-gotham-bold py-3">
                    {booking}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-1/3 h-screen relative flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className="absolute top-0 right-0 w-44 h-14 m-10"
        />

        <p className="font-gotham text-xl text-center mx-10">
          Scan QR code to book an appointment
        </p>
        <QRCode value={value} className="w-44 h-44 m-5" />
      </div>
    </div>
  );
}

export default BookingList;
