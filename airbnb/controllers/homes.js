 const registereHomes = [];

exports.getAddHome = (req, res, next) => {
 res.render("add-home")};

 exports.postAddHome = (req, res, next) => {
   console.log(req.body.houseName);
   registereHomes.push({ houseName: req.body.houseName }); 
   res.render("homeAdded");
 };

 exports.getHome = (req, res, next) => {
  console.log(registereHomes)
  res.render('home', {registereHomes});
};

exports.getError = (req, res, next) => {
  res.status(404).render('error');
}

 exports.registereHomes = registereHomes;