const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/login',(req,res)=>{
    res.send("U are complete your starting stage on node")
})
app.listen(3000,()=>{
    console.log("Server running")
}) 