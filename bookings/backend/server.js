const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const response = await axios.post(
      "https://oscarwylee.com.au/rest/V1/appointment/slots",
      req.body
    );
    console.log(response.data[0].results);
    res.json(response.data[0].results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => {
  console.log("Node server started on port 3001");
});
