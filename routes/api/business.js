const router = require("express").Router();
const businessController = require("../../controllers/businessController");

// All routes point to /api/business before the .route()

router.route("/add")
  .post(businessController.add) //Create a new business

module.exports = router;
