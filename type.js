const newdata = {
    first_name: "Jacintha",
    last_name: "Plevey",
    email: "jpleveyl@devhub.com",
    gender: "Female",
    salary: "$48530.92",
    phone: "250 389 3796",
    
}

function fet(){
    fetch("http://localhost:3000/empData")
    .then(res => res.json())
    .then(data => console.log(data))
}
var id = 1
function delet(){
    fetch('http://localhost:3000/empdata/' + id,{
        method: "DELETE"
    })
    id++
}

function post(){

    fetch("http://localhost:3000/empData", {
        method: "POST",
        body: JSON.stringify(newdata),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}
function put(){

    fetch("http://localhost:3000/empData/6", {
        method: "PUT",
        body: JSON.stringify(newdata),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}
