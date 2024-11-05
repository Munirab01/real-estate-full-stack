import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Use an environment variable for the socket URL
    const socketUrl ="https://real-estate-full-stack-socket.onrender.com";
    console.log("Connecting to socket at:", socketUrl);
    const newSocket = io(socketUrl);
    setSocket(newSocket);

    // Cleanup on unmount
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (currentUser && socket) {
      socket.emit("newUser", currentUser.id);
    }
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
