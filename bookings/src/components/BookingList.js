import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import SearchBar from "./SearchBar";

function BookingList({ startDate }) {
  const location = useLocation();
  const { data } = location.state;

  console.log("data",data);

  const [bookings, setBookings] = useState([]);
  const { storeId } = useParams();
  const todayDate = format(data,"yyyy-MM-dd");
  

  

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
        console.log(storeId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

    useEffect(() => {
      getBookings();
    }, [storeId]);

 

  return (
    <div>
        <SearchBar/>
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
