
const User = require('../models/user.model')
const {v4:uuidv4} = require ("uuid");



//   api/user : GET
const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find()
    res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}

//   api/user/:id : GET
const getOneUsers = (req,res)=>{
    res.status(200).json({
        message:"get one users"
    });
}

//   api/user/ : POST
const createUser = async(req,res)=>{


    try {
       console.log(req.body)
        const newUser = new User({
            id:uuidv4(),
            name: req.body.name,
            age:Number(req.body.age)
        })
       
        await newUser.save();
        res.status(201).json(newUser);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
   
}

//   api/user/:id : PATCH
const updateUser = (req,res)=>{
    res.status(200).json({
        message:"update users"
    });
}

//   api/user/:id : DELETE
const deleteUser = (req,res)=>{
    res.status(200).json({
        message:"update users"
    });
}

module.exports = {
    getAllUsers,
    getOneUsers,
    createUser,
    updateUser,
    deleteUser
};