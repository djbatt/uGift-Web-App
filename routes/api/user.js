const router = require("express").Router();
const userController = require('../../controllers/userController')

// All routes point to /api/user before the .route()

router.route("/add")
  .post(userController.addUser) //Create a new business

module.exports = router;
