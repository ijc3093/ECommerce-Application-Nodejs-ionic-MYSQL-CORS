module.exports = app => {
    const mission = require("../controllers/mission.controller");
  
    // Create a new Mission
    app.post("/mission", mission.create);
  
    // Retrieve all Missions
    app.get("/mission", mission.findAll);
  
    // Retrieve a single Mission with mission_id
    app.get("/mission/:mission_id", mission.findOne);
  
    // Update a Mission with mission_id
    app.put("/mission/:mission_id", mission.update);
  
    // Delete a Mission with mission_Id
    app.delete("/mission/:mission_id", mission.delete);
  
    // Create a new Mission
    app.delete("/mission", mission.deleteAll);
  };