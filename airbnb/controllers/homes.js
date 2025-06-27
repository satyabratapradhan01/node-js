const Home = require("../models/home");

 const registereHomes = [];

exports.getAddHome = (req, res, next) => {
 res.render("add-home")};

 exports.postAddHome = (req, res, next) => {
   console.log(req.body);
   const {houseName, price, location, rating, image} = req.body;
   const home = new Home( houseName, price, location, rating, image);
   home.save();

   res.render("homeAdded");
 };

 exports.getHome = (req, res, next) => {
  const registereHomes = Home.fetchAll();
  console.log(registereHomes)
  res.render('home', {registereHomes});
};

exports.getError = (req, res, next) => {
  res.status(404).render('error');
}

 exports.registereHomes = registereHomes;