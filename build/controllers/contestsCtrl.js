"use strict";

var ContestsModel = require('./../models/contestsModel');

module.exports = {
  create: function create(req, res) {
    var contests = new ContestsModel(req.body);
    contests.save(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function read(req, res) {
    ContestsModel.find(req.query).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function readOne(req, res) {
    ContestsModel.findById(req.params.id).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    ContestsModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function destroy(req, res) {
    ContestsModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};