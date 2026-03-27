// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.patch("/:id", controller.patchUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
