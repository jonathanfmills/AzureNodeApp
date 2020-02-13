var express = require('express');
var router = express.Router();
var {MongoClient} = require('mongodb');

const title = process.env.TITLE;

/* GET home page. */
router.get('/', function(req, res, next) {
  const URL = process.env.URL;
  const dbName = 'Library';
  (async function mongo(){
    let client;
    try{
      client = await MongoClient.connect(URL);
      const db=client.db(dbName);
      const response = await db.collection('books').find().toArray();
      res.json(response);
    }catch(err){
      console.log(err);
    }
  }());
});

module.exports = router;
