const { Router, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const AvatarController = require("../controllers/AvatarController");
const ensureAuth = require("../middlewares/ensureAuth");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new AvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);
usersRoutes.patch(
  "/avatar",
  ensureAuth,
  upload.single("avatar"),
  userAvatarController.update
);

module.exports = usersRoutes;
