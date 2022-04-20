const express = require("express");
const cors = require("cors");
const prefixRouter = require("./routers/prefix");
const numberRouter = require("./routers/number");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(prefixRouter);
app.use(numberRouter);

app.get("/", (req, res) => {
	res.send("Welcome to the REST API");
});

app.get("*", (req, res) => {
	res.send("Sorry! Could find any response. Please Check your input path.");
});

module.exports = app;
