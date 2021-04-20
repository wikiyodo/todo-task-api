const TodoTask = require("../models/todo");
const { error, success } = require("./response");

const AddTodoController = async (req, res) => {
  let { title } = req.body;

  if (typeof title != "string" || title == "")
    return error(res, "Your todo content cannot be empty");

  const todoTask = new TodoTask({
    title,
    status: "pending",
  });

  try {
    let todo = await todoTask.save();

    success(res, "Todo added", { todo });
  } catch (err) {
    console.log(err);
    error(res, "Could not create your todo at the moment. Try again.");
  }
};

module.exports = AddTodoController;
