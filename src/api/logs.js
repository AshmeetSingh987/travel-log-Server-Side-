const {Router} = require('express');
const router =  Router();
const {API_KEY} = process.env;
const LogEntry = require('../models/LogEntry');
router.get('/',async (req , res , next) => {
    try {
        const entries =await  LogEntry.find();
        res.json(entries);
    } catch (error){
next(error);
    }


});

router.post('/', async (req, res, next) => {
    try {
     if(req.get('X-API-KEY') !== API_KEY) {
       res.status(401);
       throw new Error('UnAuthorized');
     }
      const logEntry = new LogEntry(req.body);
      const createdEntry = await logEntry.save();
      res.json(createdEntry);
    } catch (error) {
        console.error(error.name);

        if(error.name === 'ValidationError') {
            res.status(442);
        }
      next(error);
    }
  });
module.exports = router ; 
