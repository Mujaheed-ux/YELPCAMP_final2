
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ade:ade@123@cluster0-vmpa8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = connectDB;


