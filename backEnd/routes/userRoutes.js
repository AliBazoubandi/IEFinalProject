const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.post("/logout", authenticateUser, userController.logOutUser);
router.patch(
  "/profile/username",
  authenticateUser,
  userController.updateUsername
);
router.post(
  "/profile/picture",
  authenticateUser,
  userController.updateProfilePicture
);

module.exports = router;