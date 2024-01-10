const newdata = {
    first_name: "jaya",
    last_name: "Plevey",
    email: "jpleveyl@devhub.com",
    gender: "Female",
    salary: "$48530.92",
    phone: "250 389 3796",
    
}
// json-server --watch db.json

function fet(){
    fetch("http://localhost:3000/empData/11")
    .then(res => res.json())
    .then(data => console.log(data))
}

var id = 1
function delet(){
    fetch("http://localhost:3000/empdata/1",{
        method: "DELETE"
    })

    id++
}

function post(){
    fetch("http://localhost:3000/empData", {
        method: "POST",
        body: JSON.stringify(newdata),
        headers: {
            "Content-type": "application/json"
        }
    });
}
function put(){

    fetch("http://localhost:3000/empData/11", {
        method: "PUT",
        body: JSON.stringify(newdata),
        headers: {
            "Content-type": "application/json"
        }
    });
}


