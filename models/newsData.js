const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsDataSchema = new Schema({
  data:  [
    {
      title:{
        type:String
      },
      image_url:{
        type:String
      },
      url:{
        type:String
      },
      published_at:{
        type:String
      },
      description:{
        type:String
      }
     }
   ]
}, 
{timestamps: true}
);

newsData = mongoose.model("newsData", newsDataSchema);
module.exports = newsData;