import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";

function BookingList({ startDate }) {


  const [bookings, setBookings] = useState([]);
  const { storeId } = useParams();

  const getBookings = async (e) => {
    

    const details = {
      from_date: format(startDate, "yyyy-MM-dd"),
      now: format(new Date(), "yyyy-MM-dd h:mm:ss"),
      store_id: storeId,
      to_date: format(startDate, "yyyy-MM-dd"),
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
  }, []);
  

  return (
    <div>
      {bookings.length === 0 ? (
        <p>There no booking for </p>
      ) : (
        <ul>
          <p>Bookings for </p>
          {bookings.map((bookings, index) => (
            <li key={index}>{bookings}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingList;
