
// const uri = "mongodb+srv://naveendoddi:<zQTrjUrwyKXeIEZ2>@swiggy.jbdpwef.mongodb.net/?retryWrites=true&w=majority&appName=swiggy";

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

var ctx = document.getElementById('myChart').getContext('2d')

    const cartData = {
      labels: ['likelihood', 'outof'],
      datasets: [
        {
          data: [5,  10],
          backgroundColor: ['red', 'blue', 'yellow']
        }
      ]
    }
    const options = {}
    var myDoughnutChart = new Chart(ctx, {
          type: 'doughnut',
          data: cartData,
          options: options
    });
      