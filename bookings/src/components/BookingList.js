import React from "react";
import { useLocation } from "react-router-dom";

function BookingList({bookings,dateToday}) {
    //const {bookings, startDate, storeId} = useLocation().state;
    // const location = useLocation();
    // //const {startDate, bookings} = location.state;

    // console.log("bookings", location.state);
  return (
    <div>
      {bookings.length === 0 ? (
        <p>There no booking for {dateToday.toDateString()}</p>
      ) : (
        <ul>
            <p>Bookings for {dateToday.toDateString()}</p>
          {bookings.map((bookings, index) => (
            <li key={index}>{bookings}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingList;
