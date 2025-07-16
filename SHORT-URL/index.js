const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser')
const connectToMongoDB = require("./connect");
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth')
const app = express();

const router = require('./routes/user');
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/theUser');

const url = require('./models/url');
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// connection
connectToMongoDB("mongodb://127.0.0.1:27017/Short_Url")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.get("/home", (req, res) => {
  res.render('home.ejs')
});

// route
app.use('/', checkAuth, staticRouter);
app.use('/user', userRouter);
app.use('/url', restrictToLoggedinUserOnly, router);



app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;

  try {
    const entry = await url.findOneAndUpdate(
      { shortId: shortId },  
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true }  
    );

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Error in redirect route:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(port, () => {
  console.log(`App is listening on port no. ${port}`);
});
