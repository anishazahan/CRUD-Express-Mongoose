const express = require("express");
const {getAllUsers,createUser, getOneUsers, deleteUser} = require("../controllers/user.controllers");
const router = express.Router();

router.get("/allUsers", getAllUsers);
router.get("/allUsers/:id", getOneUsers);
router.get("/allUsers/:id", deleteUser);
router.post("/",createUser);


module.exports = router;