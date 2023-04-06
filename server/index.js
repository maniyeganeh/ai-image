import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongodb/connect.js";

import postRoutes from "./routes/post.js"
import dalleRoutes from "./routes/dalle.js"

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb" }))
app.use("/api/v1/post", postRoutes)
app.use("/api/v1/dalle", dalleRoutes)

app.get("/", async (req, res) => {
    res.send("Hello From DALL-E")
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => {
            console.log("Server Has Started on port http://localhost:8080");


        })
    }
    catch (err) {
        console.log(err.message);
    }


}
startServer()