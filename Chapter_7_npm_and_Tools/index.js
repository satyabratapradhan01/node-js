const express = require('express');
const app = express();
const port = 8080;

// app.get("/", (req, res) => {
//     res.send(`hello satya...`)
// })

// quastion 2
// app.use("/", (req, res, next) => {
//     console.log(req.path, req.method);
//     next()
// })
// app.use("/satya", (req, res, next) => {
//     console.log(req.path, req.method);
// })

// Quastion 3

// app.use("/", (req, res, next) => {
//     console.log("path:", req.path, "method", req.method);

//     res.send("this is first middleware");
// });
// app.use("/satya", (req, res, next) => {
//     console.log("path:", req.path, "method", req.method);
   
//     res.send("this is first middleware");
// });
// app.use("/satya/sonu", (req, res, next) => {
//     console.log("path:", req.path, "method", req.method);
//     res.send("this is first middleware");
// });

app.get("/contactUs", (req, res) => {
    res.send(`
        <h1>Please Give Your Details Here</h1>
        <form action="/contactUs" method="post">
            <input type="text" name="name" placeholder="Enter Your Name" />
            <input type="text" name="email" placeholder="Enter Your Email" />
            <input type="submit" />
        </form>
    `);
});

app.post("/contactUs", (req, res) => {
    res.send(`
        <h1>submit succesfully</h1>
        
    `);
});


app.listen(port, (req, res) => {
    console.log(`server is listing port http://localhost:${port}`);
})