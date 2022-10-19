
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
const getOneUsers = async (req,res)=>{
  try {
    
    const findOneUser = await User.findOne({id:req.params.id})
    res.status(200).json(findOneUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//   api/user/ : POST
const createUser = async(req,res)=>{

    try {
      
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
const updateUser =async (req,res)=>{
    try {
        const user = await User.findOne({id:req.params.id})
        
        user.name = req.body.name;
        user.age = Number(req.body.age);
        
         await user.save();
         res.status(200).json(user);
         
     } catch (error) {
         res.status(500).send(error.message);
     }
}

//   api/user/:id : DELETE
const deleteUser = async (req,res)=>{
    try {
        const findOneUser = await User.deleteOne({id:req.params.id})
        res.status(200).json({
            message:"delate success"
        });
      } catch (error) {
        res.status(500).send(error.message);
      }
}

module.exports = {
    getAllUsers,
    getOneUsers,
    createUser,
    updateUser,
    deleteUser
};