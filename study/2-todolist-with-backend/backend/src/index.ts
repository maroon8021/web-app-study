import express from "express"
import { todoRouter } from "./interfaces"
import { connect } from "./utils/typeorm"

const app = express()

app.use("/todo", todoRouter)

app.listen(8080, async () => {
  await connect()
  console.log("Start on port 8080")
})
