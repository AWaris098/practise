const express = require("express");
const app = express();
require("./db/conn");
const Teacher = require("./models/teachers");
const teacherRouter = require("./routers/teacher")

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(teacherRouter)

app.listen(port, () => {
  console.log("Server up on port " + port);
});
