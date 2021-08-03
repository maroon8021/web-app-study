import express, { Request } from "express"
import { TodoApplicationService } from "../application"

const router = express.Router()

router.get("/:userId/list", async (req, res) => {
  try {
    const { userId } = req.params
    const todos = await TodoApplicationService.getTodosByUser(userId)
    res.send(todos)
  } catch (error) {
    console.log(error)
    res.status(401).send({ message: "todos cannot get" })
  }
})

router.get("/:userId/:todoId", async (req, res) => {
  try {
    const { userId, todoId } = req.params
    const todo = await TodoApplicationService.getTodo(userId, todoId)
    res.send(todo)
  } catch (error) {
    res.status(401).send({ message: "todo cannot get" })
  }
})

router.put(
  "/create/:userId",
  async (req: Request<{ userId: string }, {}, { title: string }>, res) => {
    try {
      const { userId } = req.params
      const { title } = req.body
      const todo = await TodoApplicationService.createTodo(userId, title)
      res.send(todo)
    } catch (error) {
      res.status(401).send({ message: "todo cannot get" })
    }
  }
)

router.post(
  "/update/:todoId",
  async (
    req: Request<
      { todoId: string },
      {},
      { title?: string; isFinished?: boolean }
    >,
    res
  ) => {
    try {
      const { todoId } = req.params
      const { title, isFinished } = req.body
      const todo = await TodoApplicationService.updateTodo({
        id: todoId,
        title,
        isFinished,
      })
      res.send(todo)
    } catch (error) {
      res.status(401).send({ message: "todo cannot get" })
    }
  }
)

router.put("/delete/:todoId", async (req, res) => {
  try {
    const { todoId } = req.params
    await TodoApplicationService.deleteTodo(todoId)
    res.send()
  } catch (error) {
    res.status(401).send({ message: "todo cannot get" })
  }
})

export { router }
