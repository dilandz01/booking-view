import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import BookingList from "./BookingList";

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [storeId, setStoreId] = useState();
  const navigate = useNavigate();

  // const getBookings = async (e) => {
  //   e.preventDefault();

  //   const details = {
  //     from_date: format(startDate, "yyyy-MM-dd"),
  //     now: format(new Date(), "yyyy-MM-dd h:mm:ss"),
  //     store_id: storeId,
  //     to_date: format(endDate, "yyyy-MM-dd"),
  //     type: "default",
  //   };

  //   await axios
  //     .post("http://localhost:3001", details)
  //     .then((res) => {
  //       setBookings(res.data);
  //       console.log(res.data);
  //       console.log(storeId);
  //       navigate(`/${storeId}`);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  //console.log(bookings);

  return (
    <div>
      <label>Store ID:</label>
      <input
        type="text"
        placeholder="Store ID"
        value={storeId}
        onChange={(e) => setStoreId(e.target.value)}
      />

      <label> Select Starting Date:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      <label> Select Ending Date:</label>
      {/* <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /> */}

      <BookingList startDate={startDate} />

      {/* <button onClick={getBookings}>Search</button> */}

      <Link to={`/${storeId}`}>
        <button>Search</button>
      </Link>
    </div>
  );
}

export default SearchBar;
