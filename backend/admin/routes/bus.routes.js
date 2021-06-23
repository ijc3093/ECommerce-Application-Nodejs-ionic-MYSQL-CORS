module.exports = app => {
  const bus = require("../controllers/bus.controller");

  // Create a new Bus
  app.post("/bus", bus.create);

  // Retrieve all Buss
  app.get("/bus", bus.findAll);

  // Retrieve a single Bus with bus_id
  app.get("/bus/:bus_id", bus.findOne);

  // Update a Bus with bus_id
  app.put("/bus/:bus_id", bus.update);

  // Delete a Bus with bus_Id
  app.delete("/bus/:bus_id", bus.delete);

  // Create a new Bus
  app.delete("/bus", bus.deleteAll);
};