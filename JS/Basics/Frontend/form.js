fetch("http://localhost:8000/login",{
    method: "POST",
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
        'Access-Control-Allow-Credentials': "true",
        'Access-Control-Allow-Headers':
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    },
    mode: "cors",
    body: JSON.stringify({
        firstname: "John",
        lastname: "Wick"
    })
}).then(e=>{
    console.log(e.status)
}).catch(e=>{
    console.log(e)
})