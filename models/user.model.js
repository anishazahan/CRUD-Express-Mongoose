const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type :String,
        require :true,
    },
    name: {
        type :String,
        require :true,
    },
})