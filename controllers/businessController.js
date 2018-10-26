const db = require("../models");

module.exports = {
  add: function(req, res) { //Create a new business
    console.log(req.body);
    db.Business
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  
};
