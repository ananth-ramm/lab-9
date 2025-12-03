const router = require("express").Router();
const Controllers = require("../controllers");

router.post("/create", Controllers.likeController.likePost);

module.exports = router;
