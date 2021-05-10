const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {cors:{credentials:true}});
try{
    let activeUsers = [];
    io.sockets.on("connection", socket => {
        console.log("SERVER: connecting to client");
        socket.room = "grp-cal";

        socket.on("adduser", async (username) => {
            console.log("SERVER: responding to adduser");
            if(activeUsers.includes(username)){
                console.log(`SERVER: "${username}" is already used`);
                return;
            }
            socket.username = username;
            activeUsers.push(username);
            socket.join("grp-cal");
            console.log("########ACTIVE USER########");
            console.log(activeUsers);
            console.log("###########################");
            socket.broadcast.to(socket.room).emit("sendactiveusers", activeUsers);
            socket.emit("sendactiveusers", activeUsers);
        });

        socket.on("sendlog", async logObj => {
            console.log("SERVER: responding to sendlog");
            io.sockets.in(socket.room).emit("updatelog", logObj);
        });

        socket.on("disconnect", () => {
            console.log("SERVER: responding to disconnect");
            activeUsers = activeUsers.filter(name => name !== socket.username);
            socket.broadcast.to(socket.room).emit("sendactiveusers", activeUsers);
            socket.leave(socket.room);
        });
        
        socket.on("disconnectmanually", () => {
            console.log("SERVER: responding to disconnectmanually");
            activeUsers = activeUsers.filter(name => name !== socket.username);
            socket.broadcast.to(socket.room).emit("sendactiveusers", activeUsers);
            socket.leave(socket.room);
        });
    });
}catch(e){
    console.log(
        "###############################\n"+
         "socket connection failed\n" + e + 
        "\n###############################"
    );
}

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    req.io = io;
    next();
});
app.use("/", express.Router().get("/", (req, res) => {
    res.render("index.html");
}));

app.use((req, res, next) => {
    next(createError(404));
});

server.listen(4000, () => {
    console.log("Server is running");
});



module.exports = app;