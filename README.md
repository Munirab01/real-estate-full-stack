# 🏠 InstantEstate - Real Estate Web Application with Real-Time Chat

InstantEstate is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to list, explore, and communicate about real estate properties in real time. Built with scalability and user experience in mind, it features JWT-based authentication, real-time messaging using Socket.io, and a clean, responsive UI.

---

## 🚀 Features

- 🏡 Property Listings with filters and search
- 🔒 JWT Authentication & Authorization
- 💬 Real-Time Chat between buyers and sellers (Socket.io)
- 🗂️ Role-based routing with protected pages
- 🔄 React Router for seamless navigation
- 🧩 Modular backend using Express and Prisma
- 🌐 MongoDB for data storage
- 🎨 Responsive UI with SCSS and React Hooks
- 🧰 Clean codebase with reusable components and API routes

## 🛠️ Tech Stack
### Frontend
- React.js
- SCSS (SASS)
- React Router
- Axios
- Context API
### Backend
- Node.js
- Express.js
- MongoDB
- Prisma ORM
- Socket.io
- JSON Web Tokens (JWT)
- Bcrypt
---
# BLOCK DIAGRAM
```mermaid
graph TB
    User((User))

    subgraph "Frontend Container"
        direction TB
        Client["Web Application<br>(React + Vite)"]
        
        subgraph "Frontend Components"
            AuthContext["Auth Context<br>(React Context)"]
            SocketContext["Socket Context<br>(React Context)"]
            APIClient["API Client<br>(Axios)"]
            
            subgraph "UI Components"
                NavBar["Navbar<br>(React Component)"]
                Chat["Chat<br>(React Component)"]
                Card["Card<br>(React Component)"]
                Map["Map<br>(React Component)"]
                SearchBar["SearchBar<br>(React Component)"]
                Filter["Filter<br>(React Component)"]
                UploadWidget["UploadWidget<br>(React Component)"]
            end
            
            subgraph "Page Components"
                HomePage["HomePage<br>(React)"]
                ListPage["ListPage<br>(React)"]
                ProfilePage["ProfilePage<br>(React)"]
                LoginPage["LoginPage<br>(React)"]
                RegisterPage["RegisterPage<br>(React)"]
            end
        end
    end

    subgraph "Backend Containers"
        direction TB
        
        subgraph "API Server"
            APIServer["API Server<br>(Express.js)"]
            
            subgraph "API Components"
                AuthController["Auth Controller<br>(Express)"]
                UserController["User Controller<br>(Express)"]
                PostController["Post Controller<br>(Express)"]
                ChatController["Chat Controller<br>(Express)"]
                MessageController["Message Controller<br>(Express)"]
                TokenVerifier["Token Verifier<br>(JWT)"]
            end
        end

        subgraph "WebSocket Server"
            SocketServer["Socket Server<br>(Socket.io)"]
            
            subgraph "Socket Components"
                UserManager["Online User Manager<br>(Socket.io)"]
                MessageHandler["Message Handler<br>(Socket.io)"]
            end
        end

        subgraph "Database"
            MongoDB[("Database<br>MongoDB")]
            PrismaORM["Prisma ORM<br>(Prisma Client)"]
        end
    end

    %% User Interactions
    User -->|"Accesses"| Client
    
    %% Frontend Connections
    Client -->|"Uses"| AuthContext
    Client -->|"Uses"| SocketContext
    Client -->|"Makes API Calls"| APIClient
    
    %% API Communications
    APIClient -->|"HTTP Requests"| APIServer
    Client -->|"WebSocket Connection"| SocketServer
    
    %% Backend Internal Communications
    APIServer -->|"Uses"| PrismaORM
    PrismaORM -->|"Queries"| MongoDB
    
    %% Controller Relations
    APIServer -->|"Routes to"| AuthController
    APIServer -->|"Routes to"| UserController
    APIServer -->|"Routes to"| PostController
    APIServer -->|"Routes to"| ChatController
    APIServer -->|"Routes to"| MessageController
    
    %% Socket Server Relations
    SocketServer -->|"Manages"| UserManager
    SocketServer -->|"Handles"| MessageHandler
    
    %% Security
    AuthController -->|"Validates"| TokenVerifier
    UserController -->|"Validates"| TokenVerifier
    PostController -->|"Validates"| TokenVerifier
    ChatController -->|"Validates"| TokenVerifier
    MessageController -->|"Validates"| TokenVerifier
```

```plaintext
InstantEstate/
├── .gitignore
├── README.md
├── client/                     # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── router/
│   │   └── utils/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                     # Backend (Node.js + Express)
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   ├── .env
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
├── prisma/
│   └── schema.prisma
└── LICENSE
```

## Getting Started
### Prerequisites
Node.js and npm installed

MongoDB set up locally or using MongoDB Atlas

### Installation
Clone the repository:
- git clone https://github.com/your-username/InstantEstate.git
- cd InstantEstate

### Set up environment variables:
In the /server/.env file:
- PORT=5000 ,
- MONGO_URI=your_mongodb_uri ,
- JWT_SECRET=your_jwt_secret 

### Install backend dependencies:
- cd server
- npm install

### Install frontend dependencies:
- cd ../client
- npm install

### Running the Application
### Start Backend Server:
- cd server
- npm run dev
### Start Frontend Client:
- cd client
- npm run dev

Visit [http://localhost:5173](http://localhost:5173) to view the app.
 
