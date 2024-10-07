require('dotenv').config()
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("Hello world!")
})
app.get('/twitter',(req,res)=>{
    res.send("hello twitter")
})

app.get('/login',(req,res)=>{
    res.send(`user is trying to login  <h1> hello User </h1>`)
    
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})