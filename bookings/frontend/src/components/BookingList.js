import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import SearchBar from "./SearchBar";

function BookingList() {
  const location = useLocation();
  const { data } = location.state; //Getting state from Search Component

  const [bookings, setBookings] = useState([]);
  const { storeId } = useParams();
  const todayDate = format(data, "yyyy-MM-dd");

  //API request to node server to access the main API
  const getBookings = async () => {
    const details = {
      from_date: todayDate,
      now: format(new Date(), "yyyy-MM-dd h:mm:ss"),
      store_id: storeId,
      to_date: todayDate,
      type: "default",
    };

    await axios
      .post("http://localhost:3001", details)
      .then((res) => {
        setBookings(res.data);
        console.log(res.data);
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getBookings();

    const refresh = setInterval(getBookings,300000); // refresh every 5 mins
    return () =>{
      clearInterval(refresh);
      console.log("clear interval")
    }
  }, [todayDate, storeId]);

  return (
    <div>
      <SearchBar />
      <h2>Booking for store {storeId}</h2>
      {bookings.length === 0 ? (
        <p>There no booking for {todayDate} </p>
      ) : (
        <ul>
          <p>Bookings for {todayDate} </p>
          {bookings.map((bookings, index) => (
            <li key={index}>{bookings}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingList;
