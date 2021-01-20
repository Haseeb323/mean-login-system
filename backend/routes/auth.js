require("dotenv").config();
const Router = require("express").Router();
const userController = require("../controllers/userController");
const verify = require("./verifyToken");

Router.post("/login", userController.login);
Router.post("/register", userController.register);
Router.get("/info", verify, userController.info);

module.exports = Router;
