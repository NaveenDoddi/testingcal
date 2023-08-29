var text = "this is naveen kumar naidu reddy shuklam baradharam matharam vandhe matharam...".split("")
var count = 0
function run(){

    
    var current = document.getElementById("input").value
    console.log(text[count]== current[count])
    if (text[count] == current[count]){
        document.getElementById("result").append(current[count]) 
    }else{
        document.getElementById("result1").innerText = current
    }
    count++
}