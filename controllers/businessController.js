const db = require("../models");

module.exports = {
  create: function(req, res) { //Create a new business
    db.Business
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateBusiness: function(req, res) {
    db.Business
    .update({_id: req.params.id}, {$set: {businessName: req.body.businessName, businessAddress: req.body.businessAddress, 
      businessPostal: req.body.businessPostal, businessCity: req.body.businessCity, businessState: req.body.businessState, 
      businessFirst: req.body.businessFirst, businessLast: req.body.businessLast, businessEmail: req.body.businessEmail, 
      businessWork: req.body.businessWork, businessCell: req.body.businessCell, colorOne: req.body.colorOne, colorTwo: req.body.colorTwo} })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },

  getMany: function(req, res) { //Get all business(s) from userID
    db.Business
    .find({user: req.params.id})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getBusiness: function(req, res) { //Get business details from ID
    db.Business
    .find({_id: req.params.id}).limit(1)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  deleteBusiness: function(req, res) { //Delete a business from ID
    db.Business
    .deleteOne({_id: req.params.id})
    .then(dbModel => res.json(dbModel), console.log(req.body))
    .catch(err => res.status(422).json(err));
  }
};
