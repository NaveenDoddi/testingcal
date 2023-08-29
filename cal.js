function run(){
    var data = document.getElementById("input").value
    var solution = eval(data)
    document.body.append(solution)
}
function sum(){

    var data = document.getElementById("input1").innerText

    document.getElementById("input1").innerText=data+"+"

    
}

function ans(){
    var data = document.getElementById("input1").innerText
    document.getElementById("para").innerText = ""
    document.getElementById("para").append(eval(data))
    //yeayyy
}


function sub(){
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value

    var num1 = parseFloat(input1)
    var num2 = parseFloat(input2)

    document.getElementById("para").append(num1-num2)
}
function mul(){

    var input1 = document.getElementById("input1").innerText
    document.getElementById("para").append(eval(input1))

}


function push1(){
    var data = document.getElementById("input1").innerText

    var solution = data+"1"

    document.getElementById("input1").innerText = solution

    
}
function push2(){
    var data = document.getElementById("input1").innerText

    document.getElementById("input1").innerText=data+"2"
}

// date : 26/7/2023

