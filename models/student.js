const mongoose = require('mongoose');
const students=mongoose.model("students",
    {
        name:{type:String},
        address:{type:String},
        phone:{type:String},
        
    }
)
module.exports=students;