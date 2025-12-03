const router = require("express").Router();
const Controllers = require("../controllers");

router.post("/create", Controllers.commentController.createComment);

module.exports = router;
