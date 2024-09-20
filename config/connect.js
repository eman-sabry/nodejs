const mongoose = require('mongoose');
mongoose.connect('mongodp://localhost:27017/sch')
.then(()=>{console.log("connected")})
.catch(()=>{console.log("erorr")})
module.exports=mongoose;


