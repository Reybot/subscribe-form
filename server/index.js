const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors({ origin: "http://127.0.0.1:5501" }));
app.use(express.json());

const subscriberSchema = new mongoose.Schema(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

const subscriberModel = mongoose.model("subscribers", subscriberSchema);

app.get("/", async (req, res) => {
  const response = await subscriberModel.find();
  res.json(response);
});

app.post("/subscribers", async (req, res) => {
  console.log(req.body);
  await subscriberModel.create(req.body);
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
});
