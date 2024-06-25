const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:Azlauskai123@cluster0.36osdpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(connectionString);

let conn;
let db;

const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

async function connect() {
  try {
    conn = await client.connect();
    db = conn.db("FinalReactJob");
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Failed to connect to MongoDB", e);
  }
}

connect();

// Endpointas POST užklausai įrašyti
app.post("/requests", async (req, res) => {
  try {
    const requestData = req.body;
    const result = await db.collection("requests").insertOne(requestData);
    res.json({ message: "Užklausa pridėta sėkmingai", id: result.insertedId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE užklausos trynimas pagal _id
app.delete("/requests/:id", async (req, res) => {
  const requestId = req.params.id;
  try {
    const result = await db
      .collection("requests")
      .deleteOne({ _id: new ObjectId(requestId) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Užklausa nerasta" });
    }
    res.status(204).end();
  } catch (error) {
    console.error("Klaida trinant užklausą:", error);
    res.status(500).json({ error: "Serverio klaida trinant užklausą" });
  }
});

// Endpointas GET visiems užklausų įrašams gauti
app.get("/requests", async (req, res) => {
  try {
    const requests = await db.collection("requests").find().toArray();
    res.json(requests);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT užklausos atnaujinimas kaip užbaigta
app.put("/requests/:id/complete", async (req, res) => {
  const requestId = req.params.id;
  const { completed } = req.body;

  try {
    const filter = { _id: new ObjectId(requestId) };
    const updateDoc = {
      $set: {
        completed: completed,
      },
    };
    const result = await db.collection("requests").updateOne(filter, updateDoc);

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Užklausa nerasta" });
    }

    const updatedRequest = await db.collection("requests").findOne(filter);
    res.json(updatedRequest);
  } catch (error) {
    console.error("Klaida keičiant užklausos būseną:", error);
    res
      .status(500)
      .json({ error: "Serverio klaida keičiant užklausos būseną" });
  }
});
// PUT užklausos atnaujinimas
app.put("/requests/:id", async (req, res) => {
  const requestId = req.params.id;
  console.log("Gautas užklausos ID:", requestId);
  const { name, number, email, message, flow } = req.body;

  try {
    const filter = { _id: new ObjectId(requestId) };
    const updateDoc = {
      $set: {
        name,
        number,
        email,
        message,
        flow,
      },
    };
    const result = await db.collection("requests").updateOne(filter, updateDoc);

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Užklausa nerasta" });
    }

    const updatedRequest = await db.collection("requests").findOne(filter);
    res.json(updatedRequest);
  } catch (error) {
    console.error("Klaida atnaujinant užklausą:", error);
    res.status(500).json({ error: "Serverio klaida atnaujinant užklausą" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
