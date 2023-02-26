const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeStampSchema = new Schema ({
    time: {
        type:Date
    }
}
, {timestamps:true}
);

timeStamp = mongoose.model("timeStamp", timeStampSchema);
module.exports = timeStamp;

