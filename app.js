
// const uri = "mongodb+srv://naveendoddi:<zQTrjUrwyKXeIEZ2>@swiggy.jbdpwef.mongodb.net/?retryWrites=true&w=majority&appName=swiggy";

// const { count } = require("console");
// const { electron } = require("webpack");

// // Database Name
// const dbName = 'myproject';

// // Create a new MongoClient
// const client = new mongodb.MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   if (err) {
//     console.error('Error occurred while connecting to MongoDB', err);
//     return;
//   }
  
//   console.log('Connected successfully to server');
 
//   const db = client.db(dbName);


//   // Example: Insert document
//   db.collection('documents').insertOne({
//     name: 'John',
//     age: 30
//   }, function(err, result) {
//     if (err) {
//       console.error('Error occurred while inserting document', err);
//       return;
//     }
    
//     console.log('Document inserted successfully');
//   });

//   // Example: Find documents
//   db.collection('documents').find({}).toArray(function(err, docs) {
//     if (err) {
//       console.error('Error occurred while finding documents', err);
//       return;
//     }
    
//     console.log('Found the following documents:');
//     console.log(docs);
//   });

//   // Close the connection
//   client.close();
// });

// var ctx = document.getElementById('myChart').getContext('2d')

//     const cartData = {
//       labels: ['likelihood', 'outof'],
//       datasets: [
//         {
//           data: [5,  10],
//           backgroundColor: ['red', 'blue', 'yellow']
//         }
//       ]
//     }
//     const options = {}
//     var myDoughnutChart = new Chart(ctx, {
//           type: 'doughnut',
//           data: cartData,
//           options: options
//     });
      

// Write a program that will take one string as input. The program will then remove vowels a, e, i, o, and u (in lower or upper case ) from the string. If there are two or more vowels that occur together then the program shall ignore all of those vowels.


// function removeVowels(input){
//   var name = input.split("")
//   var dump = [...name]
//   name.forEach(( element, key) => {
//     if(element == "a" || element == "e" || element == "i" || element == "o" || element == "u"){
//       var count = 0
//       if(name[key] == name[key+1] || name[key] == name[key-1]){
//         count++
//       }
      
//       if(count == 0){
//         dump[key] = ""
//       }
//     }
//   });
//   console.log(dump.join(""))
//   // console.log(dump)
  
// }

// removeVowels("compuutereeee")

// Example 1

// Input:  Cat
// Output:  Ct
// Example 2

// Input:  Compuuter
// Output: Cmpuutr


// Write a program that will take a string as input. The program will then determine whether each left parenthesis ‘(’ has a matching right parenthesis ‘)’ and also all the ‘)’ has a  consecutive ‘(‘. If so, the program will print 0 else the program will print 1.

// function parathesis(input){
//   var dump = 0
//   for (let index = 0; index < input.length; index++) {
//     if(input[index] == "("){
//       dump += 1 
//     }else if(input[index] == ")"){
//       dump -= 1
//     }
//   }
//   console.log(dump)
// }

// parathesis("(9*(7-2)*(1*5)")

  // Example 1
  
  // Input: HELLO AND (WELCOME (TO THE) TCEA (CONTEST)TODAY)IS (SATURDAY())
  // Output: 0
  // Example 2
  
  // Input: (9*(7-2)*(1*5)
  // Output: 0


//   Write a program that will print the sum of diagonal elements of a 10X10 matrix. The program will take a total of 100 numbers as input (10 numbers will be input per line and each number will be separated by a space).

// var input = ["1 2 3 4 5 6 7 8 9 0",
//             "0 1 2 3 4 5 6 7 8 0",
//             "3 4 5 6 7 8 9 6 4 0",
//             "2 3 4 5 6 7 8 9 3 2",
//             "3 4 5 6 7 4 3 2 1 3",
//             "3 4 5 6 2 4 4 2 4 6",
//             "2 3 4 6 2 4 6 2 3 5",
//             "2 3 5 6 2 4 6 2 3 5",
//             "2 4 6 2 1 4 3 3 5 2",
//             "3 3 5 2 4 6 2 1 4 6",]
// var sum = 0;
//   for(let i = 0; i < input.length; i++){
//     var line = input[i].split(" ")
//     sum += Number(line[i])
//   }
//   console.log(sum)
          
// Example 1

// Input:         1  2 3 4 5 6 7 8 9 0 
//                0 1 2 3 4 5 6 7 8 0
//                3 4 5 6 7 8 9 6 4 0
//                2 3 4 5 6 7 8 9 3 2
//                3 4 5 6 7 4 3 2 1 3
//                3 4 5 6 2 4 4 2 4 6
//                2 3 4 6 2 4 6 2 3 5
//                2 3 5 6 2 4 6 2 3 5
//                2 4 6 2 1 4 3 3 5 2
//                3 3 5 2 4 6 2 1 4 6
// Output:  42
// Example 2

// Input:        1 22 33 44 55 66 77 88 99 100
//               100 1 88 77 66 55 44 33 22 11
//               88 88 1 66 55 44 33 22 11 100
//               88 77 66 1 44 33 22 11 100 99
//               77 66 55 44  1 22  11 88 99 100
//               66 55 44 33 22 1 77 88 99 100
//               44 33 22 11 100 99 1 77 66 55
//               33 22 11 100 99 88 77 1 55 44
//               22 11 100 99 88 77 66 55 1 33
//               100 11 22 33 44 55 99 88 77 1
// Output: 10




// Write a program to find out and display prime numbers from the given list of integers. The program will accept input in two lines. First-line contains a number indicating the total number of integers in the list and the second line contains integers separated by spaces.

// var N = 5;
// var input = "8 10 3 12 7 15 11 2 17 26".split(" ")
// var result = ""

// for(let i = 0; i < input.length; i++){
//   var num = input[i]
//   if(num == 0){
//     return false
//   }
//   var counter = 0
//   for(let i = 1; i <= num ; i++){
//     num % i == 0 ? counter++ : ""
//   }
//   if(counter == 2){
//     result += num + " "
    
//   }
  
// }
// console.log(result)
// Example 1

// Input: 5
//            4 6 9 3 7
// Output:  3 7
// Example 2

// Input:  10
//              8 10 3 12 7 15 11 2 17 26
// Output:  3 7 11 2 17


// var input = "hello World".split(" ")

// for(let i = 0; i < input.length; i++){
//   input[i] = (input[i].split(""))
//   input[i][0] = input[i][0].toUpperCase()
//   input[i] = input[i].join('')
// }
// console.log(input.join(' '))

function speek(){
  // Get available voices
function getVoices() {
  return new Promise(function (resolve, reject) {
    let voices = speechSynthesis.getVoices();
    
    if (voices.length) {
      resolve(voices);
    } else {
      // Some browsers may load voices asynchronously, so we need to wait for the 'voiceschanged' event
      speechSynthesis.onvoiceschanged = function () {
        voices = speechSynthesis.getVoices();
        resolve(voices);
      };
    }
  });
}

// Example of using a specific voice
getVoices().then(function(voices) {
  // var text = 'नवीन बहुत अच्छे लड़का  हैं';
  var text = document.getElementById('output').innerText
  var utterance = new SpeechSynthesisUtterance(text);

  // Speak the text
  speechSynthesis.speak(utterance);
});

}

const startButton = document.getElementById("startButton");
const outputDiv = document.getElementById("output");
const clearButton = document.getElementById("clear");

// Constants for the language and the default language
const LANG = "en-US";

// Event listeners for the clear button
clearButton.addEventListener("click", () => {
  outputDiv.textContent = "";
});

// Create a new SpeechRecognition object
const recognition = new   (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

// Set the language of the recognition
recognition.lang = LANG;

// Event listeners for the recognition
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  outputDiv.textContent = ` question: ${transcript}? `;
  database.forEach((q) => q.questions.forEach((q2) => q2.indexOf(transcript) > -1 ? outputDiv.textContent += `answer: ${q.ans}` : ''))
  
};

// Event listeners for the start and end of the recognition
recognition.onstart = () => startButton.textContent = "Listening...";;
recognition.onend = () => startButton.textContent = "Start Voice Input";;
startButton.addEventListener("click", () => recognition.start());

function onLanguageChange() {
  recognition.lang = document.getElementById("language").value;
}

const database = [
  {
    questions : ['what is your name', 'people calls you at'],
    ans : 'naveen'
  },
  {
    questions : ['what is your age', 'how old are you','years you have'],
    ans : '21'
  },
  {
    questions : ['who is your class teacher', 'favourite teacher'],
    ans : 'rama krishna'
  },
]