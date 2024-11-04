import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);

// Set up Socket.io to listen on the same server
const io = new Server(server, {
  cors: {
    origin: "https://real-estate-full-stack-client.onrender.com",
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExists = onlineUser.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
    removeUser(socket.id);
  });
});

// Instead of io.listen(), use server.listen()
const PORT = process.env.PORT || 4000; // Default to 4000 for local development
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
