const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/products", (req, res) => {
    res.send("products page");
})

app.listen(5000, () => {
    console.log("listening");
})