const express = require('express');
const ConnectMongo = require('./db');
const Users = require('./model');

require('dotenv').config();

const app = express();

app.use(express.json());
ConnectMongo()

//getting user data
app.get("/", async (req, res) => {
  try {
    const data = await Users.find({});
    res.send(data);
  } 
  catch (error) {
    res.send(error);
  }
});

//posting user data
app.post("/", async (req, res) => {
  try {
    const payload = req.body;

    const User = new Users(payload);
    await User.save();

    res.status(200).json({status: "success"});
  } 
  catch (error) {
    res.send(error);
  }
});

const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {console.log(`Server is running on port ${process.env.PORT}`);
});