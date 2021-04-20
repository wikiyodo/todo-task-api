const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const AddTodoController = require("./controllers/addTodo");
const GetTodoController = require("./controllers/getTodo");
const DeleteTodoController = require("./controllers/deleteTodo");
const CompleteTodoController = require("./controllers/completeTodo");
const TodoTask = require("./models/todo");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.post("/todo/add", async (req, res) => {
  AddTodoController(req, res);
});

app.get("/todo/all", async (req, res) => {
  GetTodoController(req, res);
});

app.delete("/todo/remove/:id", async (req, res) => {
  DeleteTodoController(req, res);
});

app.put("/todo/complete/:id", async (req, res) => {
  CompleteTodoController(req, res);
});

mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log("Couldn't connect to db!");
    return;
  }
  console.log("Connected to db!");
  app.listen(3004, () => console.log("Server Up and running"));
});
