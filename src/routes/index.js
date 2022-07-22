const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionRouter = require("./session.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter);
routes.use("/movie_notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;
