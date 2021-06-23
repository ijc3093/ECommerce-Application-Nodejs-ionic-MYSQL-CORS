const Bus = require("../models/bus.model.js");

// Create and Save a new Bus
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Bus
  const bus = new Bus({
    name: req.body.name,
    description: req.body.description
  });

  // Save Bus in the database
  Bus.create(bus, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bus."
      });
    else res.send(data);
  });
};

// Retrieve all Buss from the database.
exports.findAll = (req, res) => {
  Bus.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving buss."
      });
    else res.send(data);
  });
};

// Find a single Bus with a bus_id
exports.findOne = (req, res) => {
  Bus.findById(req.params.bus_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Bus with id ${req.params.bus_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Bus with id " + req.params.bus_id
        });
      }
    } else res.send(data);
  });
};

// Update a Bus identified by the bus_Id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Bus.updateById(
    req.params.bus_id,
    new Bus(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Bus with id ${req.params.bus_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Bus with id " + req.params.bus_id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Bus with the specified Bus_Id in the request
exports.delete = (req, res) => {
  Bus.remove(req.params.bus_Id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Bus with id ${req.params.bus_id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Bus with id " + req.params.bus_id
        });
      }
    } else res.send({ message: `Bus was deleted successfully!` });
  });
};

// Delete all Buss from the database.
exports.deleteAll = (req, res) => {
  Bus.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all buss."
      });
    else res.send({ message: `All Buss were deleted successfully!` });
  });
};