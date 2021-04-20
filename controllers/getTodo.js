const TodoTask = require("../models/todo");
const { error, success } = require("./response");

const GetTodoController = async (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    if (err) return error(res, "could not get your todos, at the moment");

    success(res, "Fetched tasks", { tasks });
  });
};

module.exports = GetTodoController;
