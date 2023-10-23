const express = require('express');
const cors = require('cors');
const axios =require('axios');
//const bodyParser = require('body-parser');

const app = express();
//app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors());


app.post('/', async(req,res) =>{
    console.log(req.body);
    try {
        const response =await axios.post("https://oscarwylee.com.au/rest/V1/appointment/slots", req.body);
        console.log(req.body.data);
        res.json(req.body.data);
    } catch (error) {
        //console.error("Axios", error);
        res.status(500).json({message: error.message});
    }
});

app.post('/data', async(req,res) =>{
    
    try {
    
        console.log(req.body.store_id);
        res.json(res.data);
    } catch (error) {
        //console.error("Axios", error);
        res.status(500).json({message: error.message});
    }
});

app.listen(3001,()=>{
    console.log("Node server started on port 3001");
})