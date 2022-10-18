const express = require('express');
const cors = require('cors');
const app = express();

////,,,,middle ware,,,,

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get ("/",(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html")
})


app.use ((req,res,next)=>{
    res.status(404).json({
        "message":"Route Not Found"
    });
})


///---------server error handling------------
app.use ((err,req,res,next)=>{
    res.status(5000).json({
        "message":"Something broke"
    });
})


module.exports = app;