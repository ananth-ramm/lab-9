const router = require("express").Router();
const Controllers = require("../controllers");

router.post("/create", Controllers.postController.createPost);
router.get("/", Controllers.postController.getAllPosts);

module.exports = router;
