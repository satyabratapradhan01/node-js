const express = require("express");
const fs = require("fs");
let users = require("./MOCK_DATA.json");
const { stringify } = require("querystring");

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

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map(
      (user) =>
        `<li>${user.first_name}, <br> ${user.last_name}, <br> ${user.email}</li>`
    )}
    <ul>`;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "SUCCESS", id: users.length + 1 });
  });
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
