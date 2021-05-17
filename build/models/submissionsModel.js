"use strict";

var mongoose = require('mongoose');

var submissionsSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  scores: [{
    type: String
  }],
  //file: {},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  contest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "contests"
  }
});
module.exports = mongoose.model('submissionss', submissionsSchema);