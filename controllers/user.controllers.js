


const getAllUsers = (req,res)=>{
    res.status(200).json({
        message:"all users"
    });
}
const getOneUsers = (req,res)=>{
    res.status(200).json({
        message:"get one users"
    });
}
const createUser = (req,res)=>{
    res.status(201).json({
        message:"Create users"
    });
}
const updateUser = (req,res)=>{
    res.status(200).json({
        message:"update users"
    });
}
const deleteUser = (req,res)=>{
    res.status(200).json({
        message:"update users"
    });
}

module.exports = getAllUsers;