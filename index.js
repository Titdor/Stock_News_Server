const express = require("express");
const mongoose = require("mongoose");
const feedRoutes = require("./routes/feed");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use("/test1",feedRoutes);
mongoose.connect("mongodb+srv://titdor:simpdor123@cluster0.l1fktor.mongodb.net/?retryWrites=true&w=majority");
app.listen(3001);