const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
let products = require('./products');
let contacts = require('./contacts');
let vehicles = require('./vehicles');
let comments = require('./comments');
let tasks = require('./tasks');
let messages = require('./messages');
let orders = require('./orders');

// change this to your mongodb atlas uri
const url = "mongodb+srv://Joe_Cluster:cluster@cluster0-2avxp.mongodb.net/checkpoint-backend-1";
//"mongodb+srv://Joe_Cluster:cluster@cluster0-2avxp.mongodb.net //checkpoint-backend-1";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(doStuffAfterConnected, { useNewUrlParser: true });
function doStuffAfterConnected(err){
    if(err){
      console.log(err);
      return;
    }
    console.log("Connected successfully to server");
    const db = client.db("checkpoint-backend-1");
    insertSomething(db,()=>{
      findSomething(db,()=>{
        client.close();
      });
    });
}
const findSomething = function(db,callback) {
    // Get the documents collection
    const collection = db.collection('checks');
    // Find some documents
    //let found = collection.find({name:'Almond'});
    // found.toArray(function(err, docs) {
    //   assert.equal(err, null);
    //   console.log("Found the following records");
    //   console.log(docs)
    //   callback();
    // });
  }
const insertSomething = function(db,callback) {
    // Get the documents collection
    const collection = db.collection('messages');
    // Insert some documents
    collection.insertMany(messages, function(err, result) {
      console.log("Inserted documents into the collection");
      callback();
    });
  }