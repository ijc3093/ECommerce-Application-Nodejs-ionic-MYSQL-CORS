const sql = require("../../connection/db.js");

// constructor
const Bus = function(bus) {
  this.name = bus.name;
  this.leader_first = bus.leader_first;
  this.leader_last = bus.leader_last;
  this.leader_nametag = bus.leader_nametag;
  this.leader_phone = bus.leader_phone;
  this.leader_tee = bus.leader_tee;
  this.hs_first = bus.hs_first;
  this.hs_last = bus.hs_last;
  this.hs_nametag = bus.hs_nametag;
  this.hs_phone = bus.hs_phone;
  this.gl_first = bus.gl_first;
  this.gl_last = bus.gl_last;
  this.gl_nametag = bus.gl_nametag;
  this.gl_phone = bus.gl_phone;
  this.gl_tee = bus.gl_tee;
};

Bus.create = (newBus, result) => {
  sql.query("INSERT INTO bus SET ?", newBus, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created bus: ", { bus_id: res.insertId, ...newBus });
    result(null, { bus_id: res.insertId, ...newBus });
  });
};

Bus.findById = (bus_id, result) => {
  sql.query(`SELECT * FROM bus WHERE bus_id = ${bus_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found bus: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found bus with the bus_id
    result({ kind: "not_found" }, null);
  });
};

Bus.getAll = result => {
  sql.query("SELECT * FROM bus", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("buss: ", res);
    result(null, res);
  });
};

Bus.updateById = (bus_id, bus, result) => {
  sql.query(
    "UPDATE bus SET name = ?, description = ? WHERE bus_id = ?",
    [bus.name, bus.description, bus_id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found bus with the bus_id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated bus: ", { bus_id: bus_id, ...bus });
      result(null, { bus_id: bus_id, ...bus });
    }
  );
};

Bus.remove = (bus_id, result) => {
  sql.query("DELETE FROM bus WHERE bus_id = ?", bus_id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found bus with the bus_id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted bus with bus_id: ", bus_id);
    result(null, res);
  });
};

Bus.removeAll = result => {
  sql.query("DELETE FROM bus", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} buss`);
    result(null, res);
  });
};

module.exports = Bus;