import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectToDB from "./db/connectToDB.js"

dotenv.config()
const app=express()
//middlewares
app.use(express.json())
app.use(cors())


//routes
import transactionRoutes from "./routes/transaction.routes.js"
app.use("/api/v1/transactions",transactionRoutes)

app.get('/api/v1/',(req,res)=>{
    res.send("hello")
})

app.listen(process.env.PORT,()=>{
  console.log("server started running")
//   connectToDB()
  
})
