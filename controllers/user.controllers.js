
const User = require('../models/user.model')


//   api/user : GET
const getAllUsers = (req,res)=>{
    res.status(200).json({
        message:"all users"
    });
}

//   api/user/:id : GET
const getOneUsers = (req,res)=>{
    res.status(200).json({
        message:"get one users"
    });
}

//   api/user/ : POST
const createUser = (req,res)=>{
    const newUser = new User({
        id:
        name:req.body.name,
        age:Number(req.body.name)
    })
    res.status(201).json({
        message:"Create users"
    });
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

module.exports = getAllUsers;