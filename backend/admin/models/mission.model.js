const sql = require("../../connection/db.js");

// constructor
const Mission = function(mission) {
  this.title = mission.title;
  this.flight_num = mission.flight_num;
  this.show_on_front = mission.show_on_front;
  this.start_date = mission.start_date;
  this.end_date = mission.end_date;
};

Mission.create = (newMission, result) => {
  sql.query("INSERT INTO mission SET ?", newMission, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created mission: ", { mission_id: res.insertId, ...newMission });
    result(null, { mission_id: res.insertId, ...newMission });
  });
};

Mission.findById = (mission_id, result) => {
  sql.query(`SELECT * FROM mission WHERE mission_id = ${mission_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found mission: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found mission with the mission_id
    result({ kind: "not_found" }, null);
  });
};

Mission.getAll = result => {
  sql.query("SELECT * FROM mission", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("missions: ", res);
    result(null, res);
  });
};

Mission.updateById = (mission_id, mission, result) => {
  sql.query(
    "UPDATE mission SET name = ?, description = ? WHERE mission_id = ?",
    [mission.name, mission.description, mission_id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found mission with the mission_id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated mission: ", { mission_id: mission_id, ...mission });
      result(null, { mission_id: mission_id, ...mission });
    }
  );
};

Mission.remove = (mission_id, result) => {
  sql.query("DELETE FROM mission WHERE mission_id = ?", mission_id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found mission with the mission_id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted mission with mission_id: ", mission_id);
    result(null, res);
  });
};

Mission.removeAll = result => {
  sql.query("DELETE FROM mission", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} missions`);
    result(null, res);
  });
};

module.exports = Mission;