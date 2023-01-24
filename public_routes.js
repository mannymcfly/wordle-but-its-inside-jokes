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


//update the wotd//
router.put('/update', async (req, res) => {
    const WORDS = [ { "word": 'PIZZO', "description": 'The family name' },
    { "word": 'DAVID', "description": 'The Pizzo patriarch' },
    { "word": 'BRAIN', "description": 'Big braiiins' },
    { "word": 'NERTS',
      "description": 'The game that destroys family' },
    { "word": 'JESUS', "description": 'Our Lord and Savior' },
    { "word": 'PETER', "description": 'As in Peter Reid' },
    { "word": 'CABIN', "description": 'The annual "snow trip"' },
    { "word": 'CRACK', "description": 'The crackpipe kids' },
    { "word": 'GRAFF', "description": 'Lisa\'s maiden name' },
    { "word": 'ASHES',
      "description": 'When the Castillos desecrated the moment' },
    { "word": 'CROSS', "description": 'Nothing but the blood' },
    { "word": 'DRINK', "description": 'Something Pizzos don\'t do' },
    { "word": 'TEETH',
      "description": 'When Megan shattered her front teeth' },
    { "word": 'DRIVE',
      "description": 'Something Pizzos love to do' },
    { "word": 'MOVIE', "description": 'We love these' },
    { "word": 'SLEDS',
      "description": 'The "snow trip" or Dave\'s "State and Local Government and Education"' },
    { "word": 'TACOS',
      "description": 'One of our favorite cuisines' },
    { "word": 'HERMON', "description": 'Mount' },
    { "word": 'LIBERTY', "description": 'Go Flames' },
    { "word": 'DANGELO', "description": 'Cousin or Ninja Turtle' },
    { "word": 'OBLIVION',
      "description": 'How we all spent our evenings circa 2005' },
    { "word": 'VIDEO', "description": 'Games' },
    { "word": 'GAMES', "description": 'Video' },
    { "word": 'TACOBELL',
      "description": 'Don\'t eat my cinnamon twists' },
    { "word": 'CHIKFILA', "description": 'Eat mor chickin' },
    { "word": 'FERNANDOS',
      "description": '$3 burritos, enough said' },
    { "word": 'BURRITO', "description": 'A Pizzo staple' },
    { "word": 'CHIPOTLE',
      "description": 'Our lives changed when mom and dad started going here' },
    { "word": 'CHILIS', "description": 'The ranch people' },
    { "word": 'OFFICE', "description": 'As in "The"' },
    { "word": 'DENNIS',
      "description": 'Graff or Adair, you choose' },
    { "word": 'CRABS', "description": 'They\'re my dogs' },
    { "word": 'HAWAII', "description": 'The infamous Hawaii trip' },
    { "word": 'HELLS', "description": 'Itch' },
    { "word": 'RIFLE', "description": 'We have a thing for guns' },
    { "word": 'USCIS',
      "description": 'The dreaded United States Citizenship and Immigration Services' },
    { "word": 'DOCTOR', "description": 'Megan Pizzo' },
    { "word": 'TRICKS', "description": 'Gymnastics' },
    { "word": 'RANCH',
      "description": 'How they know they Pizzos are at Chili\'s' },
    { "word": 'PRIME', "description": 'Amazon' },
    { "word": 'SILLY', "description": 'It runs in the family' },
    { "word": 'PENNY',
      "description": 'When mom watched Ryan Trahan\'s entire series in a matter of days' },
    { "word": 'THICK', "description": 'Ryan\'s cakes' },
    { "word": 'EARLY', "description": 'Something Pizzo\'s are not' },
    { "word": 'WITTY',
      "description": 'I\'d like to think we all fall into this category' },
    { "word": 'FISHY', "description": 'Crackers' },
    { "word": 'SPANK', "description": 'With a wooden spoon' },
    { "word": 'CIRCA', "description": "1991" },
    { "word": 'FRICK', "description": 'Frick' },
    { "word": 'HELLA', "description": 'Tight' },
    { "word": 'CANADA', "description": 'Manfred\'s homeland' },
    { "word": 'MEGYN', "description": 'Kelly' },
    { "word": 'MEGAN', "description": 'Pizzo' },
    { "word": 'MANNY', "description": 'Pizzo (jk)' },
    { "word": 'MANDY',
      "description": 'Megan\'s nickname for Amanda' },
    { "word": 'MANDA',
      "description": 'Panda... Ryan\'s nickname for Amanda' },
    { "word": 'RANGE', "description": 'Can we go to the range?' },
    { "word": 'CAPITAL', "description": 'Christian School' },
    { "word": 'CARPOOL', "description": 'The Ramsay\'s' },
    { "word": 'NETAPP', "description": 'Dad\'s longest job' },
    { "word": 'CRUISE', "description": 'Disney' },
    { "word": 'COFFEE',
      "description": 'McCafe, Temple, Golf Park, Old Hand' },
    { "word": 'TEMPLE', "description": 'Coffee' },
    { "word": 'RUSTY', "description": 'Ryan\'s first love' },
    { "word": 'TUCKER', "description": 'Ryan\'s second love' },
    { "word": 'OCEAN', "description": 'Love that ocean air' },
    { "word": 'MARIE', "description": 'Marie\'s Donuts' },
    { "word": 'KOFFEE', "description": 'Kup' },
    { "word": 'THOMAS', "description": 'Jefferson' },
    { "word": 'WORLD', "description": 'Genius' },
    { "word": 'SKATE', "description": 'Rats' },
    { "word": 'CAMERA', "description": 'We take too many photos' },
    { "word": 'WALKIE',
      "description": 'Talkies (the Hutcheson\'s)' },
    { "word": 'COWBOY', "description": 'The Hutcheson\'s' },
    { "word": 'COUSIN', "description": 'All of them' },
    { "word": 'VISTA', "description": 'Del Lago' },
    { "word": 'ISHAN', "description": 'Megan\'s bff' },
    { "word": 'AINSLEY', "description": 'Melton' },
    { "word": 'SOPHIE',
      "description": 'Not to be confused with Sophia' },
    { "word": 'AMGPOD',
      "description": 'The best podcast in the world' },
    { "word": 'JEDIS', "description": 'Jedi Nights soccer' },
    { "word": 'YACHTY', "description": 'Lil' },
    { "word": 'SWITCH', "description": 'Foot' },
    { "word": 'FOURTH', "description": 'Of July' },
    { "word": 'CIRCLE', "description": 'Tarbolton' },
    { "word": 'SPOTIFY', "description": 'Wrapped' },
    { "word": 'BALLS', "description": 'Christmas...Balls...' },
    { "word": 'CRABS',
      "description": 'Ryan\'s friends from Hawaii' },
    { "word": 'DEATH', "description": 'As in, THE death hike' },
    { "word": 'KELCEMA',
      "description": 'Amanda and Megan\'s 2012 era' },
    { "word": 'APPLE', "description": 'Pies from McDonald\'s' },
    { "word": 'PRESCOTT',
      "description": 'It\'s Dak Prescott y\'all' },
    { "word": 'LIGHTS', "description": 'Ryan\'s first job' },
    { "word": 'DETAIN',
      "description": 'What Switzerland did to y\'all' },
    { "word": 'CHAIR',
      "description": 'Amanda flying off Megan\'s swivel chair' },
    { "word": 'COSTCO', "description": 'Hill' },
    { "word": 'NICOLE', "description": 'All of our middle name' },
    { "word": 'PUMPKIN', "description": 'Patch' },
    { "word": 'BLUE', "description": 'Lake' },
    { "word": 'WILD', "description": 'Dave\'s Wild Ride' },
    { "word": 'TRADER', "description": 'Joe\'s' },
    { "word": 'CLOSED',
      "description": 'Megan\'s eyes in every photo' },
    { "word": 'GARDEN', "description": 'Duke, where Megan peed' },
    { "word": 'DISNEY', "description": 'Cruise' },
    { "word": 'HALAL', "description": 'Brothers' },
    { "word": 'PORCH',
      "description": 'When Amanda dropped her ring' },
    { "word": 'MILLION',
      "description": 'Grandma\'s friend with a million miles on her car' },
    { "word": 'MURPHY',
      "description": 'The first, second, third, etc.' },
    { "word": 'HOTSHOT', "description": 'Imagine going 13-0' },
    { "word": 'FERRARI',
      "description": '"This hair dryer will blow your head off" - Grandma' },
    { "word": 'TUCKER', "description": 'Ryan\'s second love' },
    { "word": 'RUSTY', "description": 'The OG' },
    { "word": 'KIWI', "description": 'The bird' },
    { "word": 'ROCKET',
      "description": 'When the field caught on fire' },
    { "word": 'CANDLE',
      "description": 'When Amanda lit her hair on fire' } ]
    
    let wotd = WORDS[Math.floor(Math.random() * WORDS.length)]
    try{const db = await connectToDatabase(); 
        
        await db.collection('wordoftheday').updateOne({"_id" :new ObjectId('{insert Object ID}')},{$set: {
              "word": wotd.word,
              "description": wotd.description}})
        res.status(201).json(wotd)
        } catch {res.status(500).json({ message: err.message })}

});

module.exports = router