var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var someBizObjSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: {type: Date, default : Date.now}
});



