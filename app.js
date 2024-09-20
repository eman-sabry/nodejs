
const express=require('express')
const app=express()
app.use(express.json())
require('./config/connect')

const students=require('./models/student')

app.get('/soso',(req,res)=>{
    res.sendFile('./views/index.html',{ root:__dirname })


})

app.get('/student',(req,res)=>{
    res.send('this is students page')


})
app.post('/student',(req,res)=>{
  
  data=req.body;
    res.send(data)
    console.log(data)


})

app.post('/stu',(req,res)=>{
  res.send("student Added")
stu=new students(req.body)
stu.save()
.then (
(rs)=>{res.send(rs)}
)
.catch(
    (error)=>{res.send(error)}
)

})
app.put('/student',(req,res)=>{
    res.send('student updated')


})
app.delete('/student',(req,res)=>{
    res.send('student deleted')


})
app.listen(3000,()=>{
console.log("done")})