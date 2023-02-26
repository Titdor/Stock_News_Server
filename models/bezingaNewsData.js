const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bezingaSchema = new Schema({
  data:  [
    {
      title:{
        type:String
      },
      url:{
        type:String
      },
      created:{
        type:String
      },
      teaser:{
        type:String
      },
      image:[{
        size:{
            type:String,
        },
        url:{
            type:String
        }
      }]
     }
   ]

}, 
{timestamps: true}
);

BezingaNewsArticles = mongoose.model("BezingaNewsArticle", bezingaSchema);
module.exports = BezingaNewsArticles;