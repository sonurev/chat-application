import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

app.use(cookieParser());
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongodb from "./db/connectToMongodb.js";
import { app,server } from "./socket/socket.js";


const PORT = process.env.PORT || 5000;

dotenv.config();


app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   //root route http://localhost:5000
//   res.send("hello world hey how are you");
// });

server.listen(PORT, () => {
  connectToMongodb();
  console.log(`server running on port ${PORT}`);
});
