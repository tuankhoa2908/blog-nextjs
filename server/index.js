"use strict";

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

const dbConnect = require('./src/config/dbConfig');
const indexRouter = require('./src/routes/index.route');
const { errorHandler } = require('./src/middleware/errorMiddleware');

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

dbConnect();

app.use("/api", indexRouter);

app.use("/welcome", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
})
