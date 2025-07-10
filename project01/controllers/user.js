const User = require('../models/user');


async function  handleGateAllUsers(req, res){
  const user = await User.find({})
  res.json(user);
}

async function handleGateUserById(req, res){
  const id = req.params.id;
  const user = await User.findById(id)
  if(!user){
    res.status(400).json({error: "user not found"});
  }
  res.json(user);
}

async function handleUpdateUserById(req, res){
 await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"});
 res.json({ status: "success update" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "success delete" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email 
    || !body.gender || !body.job_title ){
    res.status(400).json({error: "add every value"});
  };
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title
  });
  console.log(result);
  res.status(201).json({msg : 'success', id: result._id});
}

module.exports = {
    handleGateAllUsers,
    handleGateUserById,
    handleDeleteUserById,
    handleUpdateUserById, 
    handleCreateNewUser
}