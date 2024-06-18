const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const bodyParser = require("body-parser"); // Susikuriu modulį, kuris leis mums gauti POST užklausos duomenis iš req.body
require("dotenv").config(); //.env failas

const app = express();
const MongoClient = mongodb.MongoClient;

const PORT = process.env.PORT || 3000;
const connectionString =
  process.env.MONGO_URI ||
  "mongodb+srv://admin:Azlauskai123@cluster0.36osdpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(connectionString);

app.use(cors());
app.use(bodyParser.json());

let conn;
let db;

app.listen(PORT, () => {
  if (myEnv === "TEST") {
    console.log(`TEST Serveris paleistas ant PORT ${MyPort}`);
    return;
  }
  console.log(`Nežinomas Serveris paleistas ant PORT ${MyPort}`);
});
