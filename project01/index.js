const express = require("express");
const fs = require("fs");
let users = require("./MOCK_DATA.json");
const mongoose = require('mongoose');

const { stringify } = require("querystring");
const { type } = require("os");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next)=> {
    // console.log("Hello from middleware 1");
    // res.json({ msg: "Hello from middleware 1"});
    fs.appendFile('test.txt', `${Date.now()}: ${req.method}: ${req.path}`, (err) => {
        
    });
    next();
})

//Connection
mongoose
 .connect("mongodb://127.0.0.1:27017/satya")
 .then(()=> console.log("MongoDB Connected"))
 .catch((err) => console.log("Mongo Error", err))


//Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type : String,
    require: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  }
}, {timestamps: true});

const User = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/users", async(req, res) => {
  const users = await User.find({})
  const html = `
    <ul>
    ${users.map(
      (user) =>
        `<li>${user.firstName}, <br> ${user.lastName}, <br> ${user.email}</li>`
    )}
    <ul>`;
  res.send(html);
});

app.get("/api/users", async(req, res) => {
  const user = await User.find({})
  res.json(user);
});

app.get("/api/users/:id", async(req, res) => {
  const id = req.params.id;
  // const user = users.find((user) => user.id === id);
  const user = await User.findById(id)
  if(!user){
    res.status(400).json({error: "user not found"})
  }
  res.json(user);
});

app.post("/api/users", async(req, res) => {
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email 
    || !body.gender || !body.job_title ){
    res.status(400).json({error: "add every value"});
  }
  
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title
  });

  console.log(result);

  res.status(201).json({msg : 'success'})
});

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  let user = users.find((user) => user.id === id);

//   console.log(user);

  Object.assign(user, req.body);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "success update" });
  });
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  console.log(users);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "success delete" });
  });
});

app.listen(port, () => {
  console.log(`server is listing port no. ${port}`);
});
