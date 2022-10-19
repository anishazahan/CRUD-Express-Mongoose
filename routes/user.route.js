const express = require("express");
const {getAllUsers,createUser, getOneUsers, deleteUser, updateUser} = require("../controllers/user.controllers");
const router = express.Router();

router.get("/allUsers", getAllUsers);
router.get("/allUsers/:id", getOneUsers);
router.delete("/allUsers/:id", deleteUser);
router.patch("/allUsers/:id", updateUser);
router.post("/",createUser);


module.exports = router;