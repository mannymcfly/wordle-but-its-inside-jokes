const express = require('express');
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;

const MONGODB_URI =
  "{insert URI Here}";


async function connectToDatabase() {
 
    // Connect to our MongoDB database hosted on MongoDB Atlas
    const client = await MongoClient.connect(MONGODB_URI);
  
    // Specify which database we want to use
    const db = await client.db("pizzowordle");
  
    cachedDb = db;
    return db;
  }

//get today's wotd//

router.get("/get/:id", async function (req, res) {
    const db = await connectToDatabase()
    const id = req.params.id;
    var o_id = new ObjectId(id);
    db.collection("wordoftheday").findOne({ _id: o_id }, function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get word");
      } else {
        res.status(200).json(docs);
      }
    });
  });


//update the wotd - I have removed the data here for privacy. Eventually, I plan to store this in a Database to make it more secure.//
router.put('/update', async (req, res) => {
    const WORDS = [ { "word": 'this is the word you are guessing', "description": 'A brief fun description that shows up when you have finished guessing' } ]
    
    let wotd = WORDS[Math.floor(Math.random() * WORDS.length)]
    try{const db = await connectToDatabase(); 
        
        await db.collection('wordoftheday').updateOne({"_id" :new ObjectId('{insert Object ID}')},{$set: {
              "word": wotd.word,
              "description": wotd.description}})
        res.status(201).json(wotd)
        } catch {res.status(500).json({ message: err.message })}

});

module.exports = router
