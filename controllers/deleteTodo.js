const TodoTask = require("../models/todo");
const { error, success } = require("./response");

const DeleteTodoController = async (req, res) => {
  let { id } = req.params;

  TodoTask.findByIdAndRemove(id, (err) => {
    if (err) return error(res, "Unknown error occured, please try again");

    success(res, "Todo has been removed");
  });
};

module.exports = DeleteTodoController;
