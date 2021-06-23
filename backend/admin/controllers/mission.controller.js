const Mission = require("../models/mission.model.js");

// Create and Save a new Mission
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Mission
  const mission = new Mission({
    name: req.body.name,
    description: req.body.description
  });

  // Save Mission in the database
  Mission.create(mission, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mission."
      });
    else res.send(data);
  });
};

// Retrieve all Missions from the database.
exports.findAll = (req, res) => {
  Mission.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving missions."
      });
    else res.send(data);
  });
};

// Find a single Mission with a mission_Id
exports.findOne = (req, res) => {
  Mission.findById(req.params.mission_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Mission with id ${req.params.mission_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Mission with id " + req.params.mission_id
        });
      }
    } else res.send(data);
  });
};

// Update a Mission identified by the mission_id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Mission.updateById(
    req.params.mission_id,
    new Mission(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Mission with id ${req.params.mission_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Mission with id " + req.params.mission_id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Mission with the specified Mission_Id in the request
exports.delete = (req, res) => {
  Mission.remove(req.params.mission_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Mission with id ${req.params.mission_id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Mission with id " + req.params.mission_id
        });
      }
    } else res.send({ message: `Mission was deleted successfully!` });
  });
};

// Delete all Missions from the database.
exports.deleteAll = (req, res) => {
  Mission.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all missions."
      });
    else res.send({ message: `All Missions were deleted successfully!` });
  });
};