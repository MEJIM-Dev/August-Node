const http = require("http")

const app = http.createServer((req,res)=>{
    if(req.url=="/login" && req.method=="GET"){
        res.write("Login page")
        return res.end()
    }
    if(req.url=="/login" && req.method=="POST"){
        req.body
        res.write("Login Succesfully")
        return res.end()
    }
    console.log(req.method)
    res.write("404")
    res.end()
})

app.listen(8000,(err)=>{
    console.log("started")
})