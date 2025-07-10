const express = require('express');
const router = express.Router();

const {handleGateAllUsers, 
       handleGateUserById, 
       handleDeleteUserById, 
       handleUpdateUserById,
       handleCreateNewUser} = require('../controllers/user')

router.get("/", handleGateAllUsers);

router.get("/:id", handleGateUserById);

router.post("/", handleCreateNewUser);

router.patch("/:id", handleUpdateUserById);

router.delete("/:id", handleDeleteUserById);

module.exports = router;