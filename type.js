const newdata = {
    first_name: "naveen",
    last_name: "Plevey",
    email: "jpleveyl@devhub.com",
    gender: "Female",
    salary: "$48530.92",
    phone: "250 389 3796",
    
}
// json-server --watch db.json

function fet(){
    fetch("http://localhost:3000/empData?first_name=naveen")
    .then(res => res.json())
    .then(data => console.log(data))
}

var id = 1
function delet(){
    fetch("http://localhost:3000/empdata/" + id,{
        method: "DELETE"
    })

    id++
}

function post(){
    var image = document.getElementsByTagName("img")[0].src
    console.log(image)
    fetch("http://localhost:3000/empData", {
        method: "POST",
        body: JSON.stringify(image),
        headers: {
            "Content-type": "application/json"
        }
    });
}
function put(){

    fetch("http://localhost:3000/empData", {
        method: "PUT",
        body: JSON.stringify("male"),
        headers: {
            "Content-type": "application/json"
        }
    });
}


