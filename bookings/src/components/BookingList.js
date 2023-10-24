import React from "react";
import { useLocation } from "react-router-dom";

function BookingList() {
    const {bookings, startDate, storeId} = useLocation().state;
  return (
    <div>
      {bookings.length === 0 ? (
        <p>There no booking for {startDate.toDateString()}</p>
      ) : (
        <ul>
            <p>Bookings for {startDate.toDateString()}</p>
          {bookings.map((bookings, index) => (
            <li key={index}>{bookings}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingList;
