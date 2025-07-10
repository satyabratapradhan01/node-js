const express = require("express");
const connectToMongoDB = require("./connect");
const app = express();

const router = require('./routes/user')
const port = 8080;

app.use(express.json())

// connection
connectToMongoDB("mongodb://127.0.0.1:27017/Short_Url")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.get("/", (req, res) => {
  res.send("Hello Satya.....");
});

// route
app.use('/url', router);



app.listen(port, () => {
  console.log(`App is listening on port no. ${port}`);
});
