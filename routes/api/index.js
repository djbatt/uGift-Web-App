const router = require("express").Router();
const businessRoutes = require("./business");

// App Routes
router.use("/business", businessRoutes);

module.exports = router;
