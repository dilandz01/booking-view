import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Link} from "react-router-dom";
import BookingList from "./BookingList";

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [storeId, setStoreId] = useState();



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
     

      <BookingList startDate={format(startDate, "yyyy-MM-dd")} />

      <Link to={`/${storeId}`}>
        <button>Search</button>
      </Link>
    </div>
  );
}

export default SearchBar;
