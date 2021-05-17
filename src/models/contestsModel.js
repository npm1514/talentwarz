const mongoose = require('mongoose');

  var contestsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    judgmentrules: {type: String, required: true}
  });

  module.exports = mongoose.model('contests', contestsSchema);
