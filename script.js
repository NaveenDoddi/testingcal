// function run(){
//   const oauth = {
//   consumer_key: 'gplDmdY6Xa8UXMdqEj6u4l6r3',
//   consumer_secret: '47y9qYuFd8BnKYNKtkRdLLyVOq9wyOMpY4X7eKgTZgPSO4IP6l',
//   token: '1327446257216802816-TysKuv5fk0EptctNQVJdP4rfC98pF7',
//   token_secret: '8QRNppt9vaiMBNqEpa1ZUBQ5MmwiAoRJjz6WzXxFXT7lD'
// };

// const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

// const requestData = {
//   method: 'GET',
//   headers: {
//     'Authorization': createTwitterAuthHeader(oauth, url, 'GET')
//   }
// };

// fetch(url + '?screen_name=twitterapi', requestData)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// function createTwitterAuthHeader(oauth, url, method) {
//   const timestamp = Math.floor(Date.now() / 1000);
//   const nonce = generateNonce();
//   const parameters = {
//     oauth_consumer_key: oauth.consumer_key,
//     oauth_nonce: nonce,
//     oauth_signature_method: 'HMAC-SHA1',
//     oauth_timestamp: timestamp,
//     oauth_token: oauth.token,
//     oauth_version: '1.0'
//   };

//   const baseString = createBaseString(parameters, method, url);
//   const signature = createSignature(baseString, oauth.consumer_secret, oauth.token_secret);
//   const authHeader = `OAuth oauth_consumer_key="${encodeURIComponent(oauth.consumer_key)}", oauth_nonce="${encodeURIComponent(nonce)}", oauth_signature="${encodeURIComponent(signature)}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${encodeURIComponent(timestamp)}", oauth_token="${encodeURIComponent(oauth.token)}", oauth_version="1.0"`;

//   return authHeader;
// }

// function generateNonce() {
//   return Math.random().toString(36).substring(2);
// }

// function createBaseString(parameters, method, url) {
//   const encodedParams = Object.keys(parameters)
//     .sort()
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`)
//     .join('&');

//   return `${method.toUpperCase()}&${encodeURIComponent(url)}&${encodeURIComponent(encodedParams)}`;
// }

// function createSignature(baseString, consumerSecret, tokenSecret) {
//   const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;
//   // const signature = crypto.createHmac('sha1', signingKey)
//     // .update(baseString)
//     // .digest('base64');

//   // return signature;
// }

// }



// function run(){
    
// //   let kothaDhi = {
// //     firstname : "naveen",
// //     lastname  : "doddi",
// //     DOB : 1111111,
// //     gender : "M",
// //     email : "prasadnaveen@123",
// //     username : "n",
// //     password : "n"
// //   }

//     // kothaDhi = JSON.stringify(kothaDhi)
//     // console.log(kothaDhi)

// // let naveen = [
// //   {
// //     0: "Elbertine",
// //     1: "Gissing",
// //     2: "egissing0@npr.org",
// //     4: "female",
// //     3: "$44802.77",
// //     5: "514 625 0311",
// //     6: 1,
// //     // "+7":"usha",
// //   }
// // ]

// // naveen.map(n)
// // console.log(n)
// // function n(item){
//     // console.log(item)
// // }
// //  var n = Object.keys(empdata1to20[0]).length
// // // console.log(empdata1to20[0][1])
// // // console.log(empdata1to20[0][+7])
// // for(let i=0; i<empdata1to20.length;i++){
// //     for(let j= 0; j<n; j++){
// //       console.log(empdata1to20[i][j])
// //     }
// // }

//   //   const options = {
//   //     method: 'GET',
//   //     headers: {
//   //         'X-RapidAPI-Key': '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
//   //         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//   //     }
//   // };
  
//   // fetch("https://deezerdevs-deezer.p.rapidapi.com/infos",options)
//   //     .then(response => response.json())
//   //     .then(data => console.log(data.ads.audio))
//   //     .catch(error => console.error(error));



















//     // fetch("C:\Users\Doddi Naveen\Desktop\files\cal\testingcal\batabase.json", {
//     //   method: "POST",
//     //   body: kothaDhi,
//     //   headers: {
//     //     "Content-type": "application/json; charset=UTF-8"
//     //   }
//     // })
//     //   .then((response) => response.json())

//     //   // .then(rrr());
//     //   .then((data)=>console.log(data))
//     // console.log(promise.status)
    
// // }
// // // function sum(){

// // //     var data = document.getElementById("input1").innerText

// // //     document.getElementById("input1").innerText=data+"+"

    
// // // }

// // // function ans(){
// // //     var data = document.getElementById("input1").innerText
// // //     document.getElementById("para").innerText = ""
// // //     document.getElementById("para").append(eval(data))
// // //     //yeayyy
// // // }


// // // function sub(){
// // //     var input1 = document.getElementById("input1").value
// // //     var input2 = document.getElementById("input2").value

// // //     var num1 = parseFloat(input1)
// // //     var num2 = parseFloat(input2)

// // //     document.getElementById("para").append(num1-num2)
// // // }
// // // function mul(){

// // //     var input1 = document.getElementById("input1").innerText
// // //     document.getElementById("para").append(eval(input1))

// // // }


// // // function push1(){
// // //     var data = document.getElementById("input1").innerText

// // //     var solution = data+"1"

// // //     document.getElementById("input1").innerText = solution

    
// // // }
// // // function push2(){
// // //     var data = document.getElementById("input1").innerText

// // //     document.getElementById("input1").innerText=data+"2"
// // // }


// // setTimeout(
// //   function rrr(data){
// //     console.log(data)
// //     value = data
// //     alert("fuck")
// //   }, 3000); 

// // persons = JSON.stringify(persons)
// // fetch("", {
// //   method: "POST",
// //   body: persons,
// //   headers: {
// //     "Content-type": "application/json; charset=UTF-8"
// //   }
// // })
// //   .then((response) => response.json())
  
// //   .then(rrr()); 

// // var value;
// // function run(){

// // var namee = document.getElementById("f").innerText
// // persons[0].name = namee

  
// // // var value1
// //   // 
// //   // setTimeout(rrr, 1000);
  
// //   // fetch('https://reqres.in/api/users')      //api for the get request
// //   // .then(response => response.json())
// //   // .then(data => console.log(data));
// // //     var name = document.getElementById("name").value
// // //     var passcode = document.getElementById("passcode").value
// // //     var para = document.createElement("p")
// // //     para.innerText = passcode
// // //     para.id = "para1"
// // //     para.style.visibility="hidden"
// // //     // para.id = "para1"

// // //     var div = document.createElement("div")
// // //     div.style.border="2px solid red"
// // //     div.style.height="200px"
// // //     div.style.width="200px"
// // //     div.id="div1"
// // //     div.append(name,para)
// // //     // passcode.style.visibility="hidden"
// // // // document.getElementById("passcode").style.visibility="hidden"
// // //     var button = document.createElement("button")
// // //     button.innerText= "created"
// // //     // button.addEventListener("click",run1)
// // //     button.onclick = run1
// // //     div.append(button)
// // //     document.body.append(div)


// // // var table = document.createElement("table")
// // // var row = document.createElement("tr")
// // // var col = document.createElement("td")
// // // var col1 = document.createElement("td")
// // // var col2 = document.createElement("td")

// // // col.innerText = "Name"
// // // col1.innerText = "class"
// // // col2.innerText = "age"
// // // row.append(col,col1,col2)

// // // var row1 = document.createElement("tr")
// // // var col3= document.createElement("td")
// // // var col4 = document.createElement("td")
// // // // var col5 = document.createElement("td")
// // // col3.innerText = "naveen"
// // // col4.innerText = "10"
// // // col4.setAttribute("colspan","2")
// // // // col5.innerText = "12"
// // // row1.append(col3,col4)
// // // table.append(row,row1)

// // // document.body.append(table)



// // // var forms = document.getElementsByClassName('needs-validation');

// // // var validation = Array.prototype.filter.call(forms, function(form) {
// // //     form.addEventListener('submit', function(event) {
// // //       if (form.checkValidity() === false) {
// // //         event.preventDefault();
// // //         // event.stopPropagation();
// // //       }
// // //       form.classList.add('was-validated');
// // //     });
// // //   });




    
// // }
// // const empdata1to20 = [
// //   {
// //     name: "Elbertine",
// //     1: "Gissing",
// //     2: "egissing0@npr.org",
// //     4: "female",
// //     3: "$44802.77",
// //     5: "514 625 0311",
// //     6: 1,
// //     "+7":"run",
// // }
// // ]


// // // console.log(empdata1to20[0][+7])
// // // for(let i=0; i<empdata1to20.length;i++){
// // //     for(let j in empdata1to20[i]){
// // //         console.log(empdata1to20[i][j])
// // //     }
// // // }


// // // var person = new Map(empdata1to20)
// // // const persons = [
// // //   {firstname : "Malcom", lastname: "Reynolds"},
// // //   {firstname : "Kaylee", lastname: "Frye"},
// // //   {firstname : "Jayne", lastname: "Cobb"},
// // //   {
// // //     firstname: "Elbertine",
// // //     1: "Gissing",
// // //     2: "egissing0@npr.org",
// // //     4: "female",
// // //     3: "$44802.77",
// // //     5: "514 625 0311",
// // //     6: 1,
// // //     "+7":"run",
// // //   },
// // //   {
// // //     firstname: "Elbertine",
// // //     1: "Gissing",
// // //     2: "egissing0@npr.org",
// // //     4: "female",
// // //     3: "$44802.77",
// // //     5: "514 625 0311",
// // //     6: 1,
// // //     "+7":"run",
// // //   },
// // //   {
// // //     firstname: "Elbertine",
// // //     1: "Gissing",
// // //     2: "egissing0@npr.org",
// // //     4: "female",
// // //     3: "$44802.77",
// // //     5: "514 625 0311",
// // //     6: 1,
// // //     "+7":"run",
// // //   },
// // // ]
// // let persons=[
// //   {
// //     three:3,
// //     one:1,
// //     four:4,
// //     two:2,
    
// //   }
// // ]
// // persons.map(n)
// // // console.log(n)
// // function n(item){
// //   // console.log(item)
// // }
// // // // n.set("name","naveen")
// // // // console.log(n.get("run"))
// // // function n(item) {
// // //   // console.log(item.reduce((a,b)=>a+b))
// // // }

// // const run1 = {
// //   three:3,
// //   one:1,
// //   four:4,
// //   two:2,
  
// // }
// // var run2 = {...run1}
// // // console.log(run2)

// // function quicksort(arr){
// //   if (arr.length <= 1) {
// // 		return arr;
// // 	} else {
// //     var pivot = arr[0]
// //     var left = []
// //     var right = []
// //     for (let i = 1 ; i<arr.length; i++){
// //       if(arr[i]<pivot){
// //         left.push(arr[i])
// //       }else{
// //         right.push(arr[i])
// //       }
// //     }
// //     // return [quicksort(...left),pivot,quicksort(...right)]
// //     return quicksort(left).concat( quicksort(right),pivot);
// //   }

// // }
// // var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
// // var arrrr = [29382,28820,280802]
// // // console.log(typeof([...array,...arrrr]))
// // // console.log(quicksort(array))

// // var str = "cat"
// // var arr = str.split("")
// // var arr1 = [];
// // var temp;
// // for(let i=0 ; i< arr.length; i++){
// //   var temp= arr[i]
// //   arr1[i] = [];
  
// //   for(let j=0; j<arr.length; j++){
    
// //     arr1[i][j]=arr[j];
// //     // arr1[i][]=temp;
// //   }
  
  
  
  
// // }
// // // console.log(arr1)

// // let permArr = [];
// // let usedChars = [];

// // function permute(input) {

// //   const chars = input.split("");
// //   for (let i = 0; i < chars.length; i++) {
// //       const ch = chars.splice(i, 1);
// //       usedChars.push(ch);
// //       if (chars.length == 0) {
// //         permArr[permArr.length] = usedChars.join("");
// //       }
// //       permute(chars.join(""));
// //       chars.splice(i, 0, ch);
// //       usedChars.pop();
// //   }
// //   return permArr
// // };
// // console.log(permute("123456789"))

// // // const xhr = new XMLHttpRequest();
// // // xhr.open("POST", "https://jsonplaceholder.typicode.com/todos");
// // // xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
// // // const body = JSON.stringify({
// // //   userId: 1,
// // //   title: "Fix my bugs",
// // //   completed: false
// // // });
// // // xhr.onload = () => {
// // //   if (xhr.readyState == 4 && xhr.status == 201) {
// // //     console.log(JSON.parse(xhr.responseText));
// // //   } else {
// // //     console.log(`Error: ${xhr.status}`);
// // //   }
// // // };
// // // xhr.send(body);
// // console.log("run")
// // var mat = []
// // count  = 1
// // for (let i=0; i<3; i++){
// //   mat[i] = []
// //   for(let j=0; j<3; j++){
// //       mat[i][j] = count;
// //       count++
// //   }
// // }
// // console.log(mat)

// // var str = "hello world".split("")
// // var j = 0;
// // for(let i = str.length-1; i>=0; i--){
// //   str[j]=str[i];
// //   j++

// // }
// // console.log(str.join(""))
// // var str = "naveenqaakldaadkaa";
// // var count = 0
// // for (let i=0; i<str.length; i++){
// //   if(str[i] == "a"){
// //     count++
// //   }
// // }
// // console.log(count)
// // var s = "aba"
// // var n = 1000000000000
// // var str = ''
// // var t = Math.floor(n/s.length)
// // var r = n%s.length
// // for (let i=0; i<t; i++){
// //   str += s
// // }
// // console.log(t,r)

// // console.log("a")




var s = [1,1,2,3,4]
// // var target = 5
// // var count = 0
// // s.forEach(element => {
// //     // console.log(element)
// //     // count++
// // })
// // var sum = s.reduce((s,r)=>{
// //     return s/r
// // })
// // // console.log(sum)
// s.map((i=>i==1 ? s.map((i)=>console.log(i)):0))
// // // console.log(number)
// // function dhandam(count){
// //     // console.log(s.map((i)=>target = target-i))
// //     // console.log(s.map((j)=>j))
// //     return count
// // }
// // // devuda
// // // console.log((count))
// var input = "a1b10"
// var arr = input.split("")
// console.log(arr)

// const person = {
//     0:{
//     name:"naveen",
//     age:[20,19,30,20]},
//     1:{
//     name:"usha",
//     age:19
//     }
// }

// person[2]={
//     name:"vishnu",
//     age:21
// }

// Objeyct.keys(person).map((i=>i==1 ? Object.values(person).map((i=>i.name=="naveen"?console.log(i.name):0)):0))
// Object.keys(person).map((i=>i==1 ? Object.values(i).map((i=>i.name=="naveen"?console.log(i.name):0)):0))
// Object.keys(person).map((i=>i==1 ? Object.values(i).map((i=>i.name=="naveen"?console.log(i.name):0)):0))
// Object.entries(person).map((i)=>i[0]>0&&i[0]<2?console.log(i[1].name):0)
// var age = person[0].age.some((i=>i==20))
// console.log(age)
// console.log(Object.keys(person[0].age))


// Boolean = false
// var bool = true
// function run(){
    
//     var input = document.getElementById("input").value
//     // document.getElementById("para").innerText = input
//     var div = document.createElement("li")
//     // div.addEventListener("click",go)
//     var span = document.createElement("span")

//     span.innerText = input
//     span.id = "span"
//     // list.addEventListener("click", go1)
//     var edit = document.createElement("button")
//     edit.innerText = "edit"
//     edit.addEventListener("click",update)
//     div.append(span,edit)
//     document.getElementById("list1").append(div)

// }

// function update(clickedElement){
//     if(bool == true){
//         clickedElement.srcElement.innerText = "update"
//         var input = document.getElementById("input").value
        
//         document.getElementById("span").innertext = input
//         console.log(document.getElementById("span").innertext)
//         bool = false
//     }else{
//         clickedElement.srcElement.innerText = "edit"
//         bool = true
//     }
//     console.log(clickedElement.srcElement)
    
// }

// function run(){
    
//     var input = document.getElementById("input").value
//     document.getElementById("para").innerText = input
//     var list = document.createElement("li")
//     list.innerText = input
//     document.getElementById("para").contentEditable = "true"
//     document.getElementById("list").append(list)
//     document.getElementById("editbtn").style.visibility = "visible"
//     document.getElementById("delbtn").style.visibility = "visible"
//     document.getElementById("activespan").style.visibility = "visible"
//     document.getElementById("editbtn").innerText = "edit"
//     // document.getElementById("editbtn").addEventListener("click",go)
    
    
// }
// function go(){
//     // document.getElementById("button").style.display = "none"
//     // var input = document.getElementById("input")
    
//     // input.placeholder  = "enter text that you want to edit"

//     document.getElementById("editbtn").innerText = "update"
    
//     var input = document.getElementById("input").value
//     var arr = document.getElementsByTagName("li")
//     document.getElementsByTagName("li")[arr.length-1].innerText = input
//     document.getElementById("para").innerText = document.getElementById("para").innerText 
//     document.getElementById("para").innerText = document.getElementById("input").value 
//     document.getElementById("input").value = ""


// }
// function go1(){
//     document.getElementById("para").innerText = ""
//     // document.getElementById("input").value = ""
//     var arr = document.getElementsByTagName("li")
//     document.getElementsByTagName("li")[arr.length-1].style.display = "none"
   
//     document.getElementById("editbtn").style.visibility = "hidden"
//     document.getElementById("delbtn").style.visibility = "hidden"
//     document.getElementById("activespan").style.visibility = "hidden"

// }
// var count = 0
// var  B = [2, 1, 1]
// for (let i=0; i<B.length; i++){
//     if(B[i] % 2 != 0){
//         if(B[i+1] % 2 != 0){
//             B[i]++
//             B[i+1]++
//         }else if(B[i-1] % 2 != 0){
//             B[i]++
//             B[i-1]++
//         }else{
//             B[i]++
//             B[i+1]++
//         }
//         count += 2
//     }
//     // console.log(B)
//     if(i==B.length){
//         B.every((x)=> x%2==0)?console.log(count):console.log(no)
//     }
    
// }
// console.log(count)
// B.map((i=> i%2!=0 ? console.log(i):0))


// var str = ['Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes.'
// ,'Warning: PowerShell detected that might be using a screen reader and has disabled PSReadLine for compatibility purposes.'
// ,'Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes.']

// var sub = "you"
// for(let i=0; i<str.length; i++){
//     var arr = str[i].split(" ")
//     for(let j = 0; j<arr.length; j++){
//         if(sub==arr[j]){
//             console.log("yes")
//         }
//     }
// }
// var arr = str.split(" ")
// arr.map((i=> i==sub ? console.log("YES") : console.log("NO")))
// sub==arr.map((i)=>console.log(i)) ? console.log(i) : console.log("NO")


// var s = 2, m = 19, n = 7
// var numberofseats = (s+m-1)%n 
// let count = s-1
// for(let i = 0; i < numberofseats; i++){
//     count++
// }
// console.log(count)
// console.log(numberofseats)
// function run(){
//     var str = document.getElementById("input").value.toLowerCase().split("")
//     var alpha = "abcdefghijklmnopqrstuvwxyz".split("")
//     var num = "1234567890".split("")
//     var special = "!@#$%^&*()_-+=';:.>,</?"
//     var alphabool = false, numbool = false, Abool = false, dotbool = false, combool = false, legthbool = true, spacebool = true
//     var arr = []
//     const tlds = [".com", ".org", ".net", ".edu", ".gov", ".mil", ".int", ".info", ".biz", ".pro", ".name", ".coop", ".mobi", ".asia", ".eu", ".aero", ".cat", ".jobs", ".tel", ".travel"];
    
//     var Acounting = 0
//     for(let i = 0; i < str.length; i++){
//         if(str[i]==" "){
//             spacebool = false
//         }
//         if(str[i]=="@"){
//             Abool = true
//             if(str[i+1]=="."){
//                 Abool = false
//             }
//             Acounting++
    
//             if(Acounting>1){
//                 Abool = false
//             }
            
//         }
//         if(str[i]=="."){
//             dotbool = true
//             let com = str.slice(i).join("")
//             combool = tlds.some((i)=> i==com)
    
//             if(str[i+1]=="."){
//                 dotbool = false
//             }
            
//         }
//         for(let j = 0; j < alpha.length; j++){
//             if(str[i]==str[j]){
//                 alphabool = true
//             }
            
//         }
//         for(let j = 0; j < num.length; j++){
//             if(str[i]==str[j]){
//                numbool = true
//             }
            
//         }
    
//     }
//     if(str[str.length-1] == "."){
//         dotbool = false
//     }
//     if(str[str.length-1] == "@" || str[0]=="@"){
//         Abool = false
//     }
//     if(str.lenght>64){
//         legthbool = false
//     }
//     if(alphabool && numbool && Abool && dotbool && combool && legthbool && spacebool){
//         alert("valid")
//     }else{
//         alert("invalid")
//     }
// }

// // console.log(str)

// var input = "feedthedog"
// var input = 'haveaniceday'
// // var input = 'chill outeeeee'
// var input = "wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny"

// input = input.split(" ").join("")
// console.log(input.length)
// var arr = []
// var col = Math.floor(Math.sqrt(input.length))


// if(col * col < input.length){
//     col = col + 1
//     var row = col
// }else if(col * col == input.length){
//     var row = col
// }else{
//     var row = col + 1

// }

// var count = 0
// var str = ""
// for(let i = 0; i < col; i++){
//     arr[i] = []
//     for( j = 0; j < row; j++){
//         arr[i][j] = input[count]
//         count++
//         // if(count == input.length){
//         //     break
//         // }
//     }
    
// }
// console.log(arr)
// count = 0
// for(let i = 0; i < row; i++){
//     for( j = 0; j < col; j++){
//         if(arr[j][count] != undefined)
//         str += arr[j][count]
        
//     }
//     str += " "
//     count++
// }


// console.log(str)


// var start = 35
// var end = 70
// var arr = []
// var count = 0
// var startRoot = Math.floor( Math.sqrt(start) )
// var endRoot = Math.floor( Math.sqrt(end) )
// // for( let i = start; i <= end; i++){
// //     if(Math.floor(Math.sqrt(i)) == Math.sqrt(i)){
// //         arr.push(i)
// //         count++
// //     }
// // }
// if(Math.floor(Math.sqrt(start)) == Math.sqrt(start)){
//     console.log(endRoot - startRoot +1)
// }else{
//     console.log(endRoot - startRoot)
// }

// console.log(count)

// const person = {
//   name:"naveen",
//   age: [20,50],

//   sayhi(){
//     console.log(this["age"][0])
//     console.log(Object.keys(this).length)
//   }
// }
// var person1 = {...person} 
// // var person1 = person
// // var person1 = {}
// // for (let key in person) {
// //   person1[key] = person[key]
// // }
// console.log(person === person1)
// // person.age = [10]
// person1.sayhi()

// var s = "abcefg"
// var t = "abcef"
// var k = 3
// var bool = false
// var count = 0
// if(s == t){
//   console.log(s.length + t.length + 1)
// }else{
  
//   if(s.length > t.length){
//     var length = s.length
//   }else{
//     var length = t.length
//   }
//   for(let i = 0; i < length; i++){
//     if(s[i] != t[i]){
//       console.log(t[i],s.length - i)
//      count = s.length - i + t.length - i
//      console.log(count)
//      break
//     }
    
//   }
// }



// var arr = [1,2,3,4,5]
// arr.shift(arr.pop())
// // arr.forEach((i)=> i == 2 ? console.log(i) : "")
// var newarr = arr.map((i)=>i == 2 ? i : "")
// console.log(newarr)

// var bill = [ 3, 10, 2, 9 ]
// var k = 1
// var b = 4

// bill.splice(k,1)
// var sum = bill.reduce((a,i) => a+i)
// if(sum / 2 == b){
//     console.log("anna")
// }else if(sum / 2 < b){
//     console.log(b - sum / 2)
// }

// // console.log(sum)
// var arr = [1,2,3,4,5,6,7,8,9,0,2]

// arr.filter((i)=> i==2 ? console.log(i) : "")

// var n = 3
var line = [3,4,7]
for(let i = 0; i < line.length; i++){
    var digit = (2**line[i]).toString()
    var sum = 0
    // console.log((digit))
    
    for(let j = 0; j < digit.length; j++){
        sum += Number(digit[j])
    }
    
    console.log(sum)
    
}

var n = 3
var line = [3,4,7]
for(let i = 0; i < line.length; i++){
    var digit = (2**line[i]).toString().split("")
    var sum = 0
    digit.forEach(( i)=> sum += (Number(i)))
    console.log(sum)
    
}
