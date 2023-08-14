const fs = require("fs")

// fs.writeFileSync("../docs/data.json",`{"Sample":"acdasd"}`)
try{
 fs.writeFileSync("data.txt","Sample")
} catch(err){
    console.log(err)
}
fs.appendFileSync("data.txt"," Extra Data")

const content = fs.readFileSync("data.txt","utf-8")
console.log(content)

fs.writeFile("./sadhvadyasd/async.txt","Written Asynchronously",(err)=>{
    if(err){
        console.log("Failed to write File")
        return
    }
    console.log("File written successfully")
})

fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Failed to read file")
        return
    }
    console.log(data)
})