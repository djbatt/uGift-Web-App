const db = require('../models');
const passport = require('passport');

module.exports = {
    addUser: function (req, res) {
        console.log(req.body);
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}