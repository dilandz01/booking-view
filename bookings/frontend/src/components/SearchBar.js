import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [storeId, setStoreId] = useState();

  return (
    <div>
      <h1>Store Booking</h1>
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

      <Link to={{ pathname: `/${storeId}` }} state={{ data: startDate }}>
        <button>Search</button>
      </Link>
    </div>
  );
}

export default SearchBar;
