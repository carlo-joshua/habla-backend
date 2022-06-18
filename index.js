const express = require("express");
const cors = require("cors");



const server = express();
const port = process.env.PORT || 9000;

server.use(express.json());
server.use(cors());


server.get("/", (req,res) => {
    res.status(200).send("Hello from habla app");
});

server.post("/",(req,res) => {
    if(!req.body.name || !req.body) {
    return    res.status(500).json({
            message:"Please send in body with a property of name"
        });
    }

    res.send(`Hello from habla app ${req.body.name}`);
});


server.listen(port,() => {
    console.log(`server running on port: ${port}`);
})