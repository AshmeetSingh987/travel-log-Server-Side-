const mongoose = require('mongoose');
const { Schema } = mongoose;


// * Title - Text 
// * Description - Text 
// * Comments  -Text 
//  * image - Text - URL 
//  * Rating  - scale of 1 to 20 
// * Start Date  - DateTime  
// * Date Visited - DateTime  
// * latitiude - Number 
// * longitute  - Number
// * Created At  - DateTime
// * Updated At - DateTime 

const requiredNumber =  {
    type:Number  , 
    required:true
  };

// const defaultDate =  { type: Date, default: Date.now , required:true };
    
 
  
const logEnterySchema = new Schema({
  title:{
    type:String , 
    required:true , 
} ,
  description : String,
  body:   String,
  comments: String,
  image : String,
  rating :{
      type:Number , 
      min:  0  , 
      max: 6 , 
      default:0,

  },
  latitude :{...requiredNumber , 
min: -90 , 
max: 90 },
  longitude :{ ...requiredNumber , 
    min: -180 , 
    max: 180 },
  visitDate : {
      required : true,
      type:Date,
  },
//  created_at: defaultRequiredDate,
//  updated_at : defaultRequiredDate
} , {
    timestamps:true,
});

const LogEntry = mongoose.model('LogEntry' , logEnterySchema);
module.exports = LogEntry;