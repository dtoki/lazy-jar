const MongoClient = require('mongodb').MongoClient;

process.env.IP = process.env.IP || "localhost";
process.env.MONGO_PORT = process.env.MONGO_PORT || 27017;

const mongoUrl = `mongodb://${process.env.IP}:${process.env.MONGO_PORT}`, 
  dbName = 'lazyJar';

let db = null;

// Use connect method to connect to the server
async function connectToMongo() {
   let result = await MongoClient.connect(mongoUrl);
   return result.db(dbName);
}

module.exports = { connectToMongo };


