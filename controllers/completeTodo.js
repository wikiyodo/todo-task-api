const TodoTask = require("../models/todo");
const { error, success } = require("./response");

const CompleteTodoController = async (req, res) => {
  let { id } = req.params;

  TodoTask.findByIdAndUpdate(id, { status: "completed" }, (err) => {
    if (err) return error(res, "Unknown error occured, please try again");

    success(res, "Todo has been completed");
  });
};

module.exports = CompleteTodoController;
