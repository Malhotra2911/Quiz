const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuizSchema = new Schema({
  question : {
    type : String,
    required : true
  },
  options : {
    type : Array,
    required : true
  },
  rightAnswer : {
    type : Array,
    required : true
  },
  startDate : {
    type : Date,
    required : true
  },
  endDate : {
    type : Date,
    required : true
  }
});

module.exports = mongoose.model('quiz', QuizSchema);