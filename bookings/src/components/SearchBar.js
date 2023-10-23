import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import {format} from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [storeId, setStoreId] = useState();

  // const getData =  async (req,res)=>{

  //   try {
  //     const data = await axios.post("https://oscarwylee.com.au/rest/V1/appointment/slots",
  //     {
  //       from_date: startDate,
  //       now: new Date(),
  //       store_id: storeId,
  //       to_date: endDate,
  //       type: "default"

  //     });
  //     res.status(200).json(data);

  //   } catch (error) {
  //     res.status(500).json({message: error.message});
  //   }
  // }
  

  const getBookings = async (e) => {
    e.preventDefault();

    const details = {
      from_date: format(startDate, 'yyyy-MM-dd'),
      now: format(new Date(), 'yyyy-MM-dd h:mm:ss'),
      store_id: storeId,
      to_date: format(endDate, 'yyyy-MM-dd'),
      type: "default",
    };

    console.log(details);
    await axios.post("http://localhost:3001", details)
    .then ((res) =>{
        console.log(res.data);
    })
    .catch((err) =>{
      console.log(err.message);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Store ID"
        value={storeId}
        onChange={(e) => setStoreId(e.target.value)}
      />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
       
      />
      <button onClick={getBookings}>Submit</button>
    </div>
  );
}

export default SearchBar;
