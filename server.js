const express = require('express')
const app = express()
const path = __dirname+'/client'
const dbPath =require(__dirname+'/DB.json')
const bp = require('body-parser')
const fs = require('fs')
let username =''
app.use(express.static('client'));
app.use(bp.urlencoded())

app.get('/',(req,res)=>{
    res.sendFile(path+'/home.html')
});
app.post('/',(req,res)=>{
    console.log(req.body.username)
    username = req.body.username
    res.sendFile(path+'/signup.html')
})
app.get('/username',(req,res)=>{
    res.json({"username":username})
})
app.get('/signup',(req,res)=>{
    
    res.sendFile(path+'/signup.html')
});

app.post('/signup',(req,res)=>{
    console.log(req.body)
    importName(req.body)
    res.sendFile(path+'/home.html')
})
const importName = (information) => {

    let item = null
    try{
     item =JSON.parse( fs.readFileSync(__dirname+'/DB.json','utf-8'))
    }
    catch{}
    delete information.confirm
    delete information.submit
    item.push(information)
    try{
        fs.writeFileSync(__dirname+'/DB.json',JSON.stringify(item))
    }
    catch{}
}
//importName({"hello world":"nono","confirm":"1234$"})
app.listen(3000,()=>{console.log('server is on prot 3000')});