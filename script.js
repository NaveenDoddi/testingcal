// function run(){
//     var data = document.getElementById("input").value
//     var solution = eval(data)
//     document.body.append(solution)
// }
// function sum(){

//     var data = document.getElementById("input1").innerText

//     document.getElementById("input1").innerText=data+"+"

    
// }

// function ans(){
//     var data = document.getElementById("input1").innerText
//     document.getElementById("para").innerText = ""
//     document.getElementById("para").append(eval(data))
//     //yeayyy
// }


// function sub(){
//     var input1 = document.getElementById("input1").value
//     var input2 = document.getElementById("input2").value

//     var num1 = parseFloat(input1)
//     var num2 = parseFloat(input2)

//     document.getElementById("para").append(num1-num2)
// }
// function mul(){

//     var input1 = document.getElementById("input1").innerText
//     document.getElementById("para").append(eval(input1))

// }


// function push1(){
//     var data = document.getElementById("input1").innerText

//     var solution = data+"1"

//     document.getElementById("input1").innerText = solution

    
// }
// function push2(){
//     var data = document.getElementById("input1").innerText

//     document.getElementById("input1").innerText=data+"2"
// }





function run(){
//     var name = document.getElementById("name").value
//     var passcode = document.getElementById("passcode").value
//     var para = document.createElement("p")
//     para.innerText = passcode
//     para.id = "para1"
//     para.style.visibility="hidden"
//     // para.id = "para1"

//     var div = document.createElement("div")
//     div.style.border="2px solid red"
//     div.style.height="200px"
//     div.style.width="200px"
//     div.id="div1"
//     div.append(name,para)
//     // passcode.style.visibility="hidden"
// // document.getElementById("passcode").style.visibility="hidden"
//     var button = document.createElement("button")
//     button.innerText= "created"
//     // button.addEventListener("click",run1)
//     button.onclick = run1
//     div.append(button)
//     document.body.append(div)


// var table = document.createElement("table")
// var row = document.createElement("tr")
// var col = document.createElement("td")
// var col1 = document.createElement("td")
// var col2 = document.createElement("td")

// col.innerText = "Name"
// col1.innerText = "class"
// col2.innerText = "age"
// row.append(col,col1,col2)

// var row1 = document.createElement("tr")
// var col3= document.createElement("td")
// var col4 = document.createElement("td")
// // var col5 = document.createElement("td")
// col3.innerText = "naveen"
// col4.innerText = "10"
// col4.setAttribute("colspan","2")
// // col5.innerText = "12"
// row1.append(col3,col4)
// table.append(row,row1)

// document.body.append(table)



// var forms = document.getElementsByClassName('needs-validation');

// var validation = Array.prototype.filter.call(forms, function(form) {
//     form.addEventListener('submit', function(event) {
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         // event.stopPropagation();
//       }
//       form.classList.add('was-validated');
//     });
//   });




    
}
const empdata1to20 = [
  {
    name: "Elbertine",
    1: "Gissing",
    2: "egissing0@npr.org",
    4: "female",
    3: "$44802.77",
    5: "514 625 0311",
    6: 1,
    "+7":"run",
}
]


// console.log(empdata1to20[0][+7])
// for(let i=0; i<empdata1to20.length;i++){
//     for(let j in empdata1to20[i]){
//         console.log(empdata1to20[i][j])
//     }
// }


// var person = new Map(empdata1to20)
// const persons = [
//   {firstname : "Malcom", lastname: "Reynolds"},
//   {firstname : "Kaylee", lastname: "Frye"},
//   {firstname : "Jayne", lastname: "Cobb"},
//   {
//     firstname: "Elbertine",
//     1: "Gissing",
//     2: "egissing0@npr.org",
//     4: "female",
//     3: "$44802.77",
//     5: "514 625 0311",
//     6: 1,
//     "+7":"run",
//   },
//   {
//     firstname: "Elbertine",
//     1: "Gissing",
//     2: "egissing0@npr.org",
//     4: "female",
//     3: "$44802.77",
//     5: "514 625 0311",
//     6: 1,
//     "+7":"run",
//   },
//   {
//     firstname: "Elbertine",
//     1: "Gissing",
//     2: "egissing0@npr.org",
//     4: "female",
//     3: "$44802.77",
//     5: "514 625 0311",
//     6: 1,
//     "+7":"run",
//   },
// ]
const persons=[
  {
    three:3,
    one:1,
    four:4,
    two:2,
    
  }
]
persons.map(n)
// console.log(n)
function n(item){
  // console.log(item)
}
// // n.set("name","naveen")
// // console.log(n.get("run"))
// function n(item) {
//   // console.log(item.reduce((a,b)=>a+b))
// }

const run1 = {
  three:3,
  one:1,
  four:4,
  two:2,
  
}
var run2 = {...run1}
// console.log(run2)

function quicksort(arr){
  if (arr.length <= 1) {
		return arr;
	} else {
    var pivot = arr[0]
    var left = []
    var right = []
    for (let i = 1 ; i<arr.length; i++){
      if(arr[i]<pivot){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }
    // return [quicksort(...left),pivot,quicksort(...right)]
    return quicksort(left).concat( quicksort(right),pivot);
  }

}
var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
var arrrr = [29382,28820,280802]
console.log(typeof([...array,...arrrr]))
console.log(quicksort(array))



