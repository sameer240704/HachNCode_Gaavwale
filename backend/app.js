import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";
import { createServer } from "http";
import { userJoin, userLeave, getUsers } from "./utils/user.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173/",
    method: "GET, PUT, POST, DELETE, PATCH",
    optionsSuccessStatus: 200,
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//Routes
import authRoutes from "./routes/auth.routes.js";
import pointsRoutes from "./routes/points.routes.js";
import postsRoutes from "./routes/posts.routes.js";
app.use("/api/auth", authRoutes);
app.use("/api/points", pointsRoutes);
app.use("/api/posts", postsRoutes);

//Socket.io
const server = createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

// Setting up socket.io
let imageUrl, userRoom;
io.on("connection", (socket) => {
  socket.on("user-joined", (data) => {
    const { roomId, userId, userName, host, presenter } = data;
    userRoom = roomId;
    const user = userJoin(socket.id, userName, roomId, host, presenter);
    const roomUsers = getUsers(user.room);
    socket.join(user.room);
    socket.emit("message", {
      message: "Welcome to ChatRoom",
    });
    socket.broadcast.to(user.room).emit("message", {
      message: `${user.username} has joined`,
    });

    io.to(user.room).emit("users", roomUsers);
    io.to(user.room).emit("canvasImage", imageUrl);
  });

  socket.on("drawing", (data) => {
    imageUrl = data;
    socket.broadcast.to(userRoom).emit("canvasImage", imageUrl);
  });

  socket.on("disconnect", () => {
    const userLeaves = userLeave(socket.id);
    const roomUsers = getUsers(userRoom);

    if (userLeaves) {
      io.to(userLeaves.room).emit("message", {
        message: `${userLeaves.username} left the chat`,
      });
      io.to(userLeaves.room).emit("users", roomUsers);
    }
  });
});

export { server };
