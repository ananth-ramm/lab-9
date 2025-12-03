const router = require("express").Router();
const Controllers = require("../controllers");

router.post("/create", Controllers.userController.createUser);
router.get("/", Controllers.userController.getUsers);

module.exports = router;
