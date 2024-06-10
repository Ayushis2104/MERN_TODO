const express = require ("express");
const app =express();
const cors = require ("cors");
const dotenv = require('dotenv').config()
const dbConn = require("./connection/conn");
const auth =require("./routes/auth");
const list =require("./routes/list");
app.use(express.json());
app.use(cors());

dbConn();
app.get("/", (req , res) =>{
    res.send("hello");
});

  
app.use("/api/v1", auth);
app.use("/api/v2", list); 
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });

app.listen(1000, ()=>
{
    console.log("server started");
});