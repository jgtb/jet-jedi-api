"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const jwt = require("express-jwt");
const session = require("express-session");
const helmet = require("helmet");
const mongoose = require("mongoose");
const passport = require("passport");
const unlessPath_1 = require("./config/unlessPath");
const routes_1 = require("./routes");
const server = express();
const PORT = process.env.PORT || 3000;
const config = require('./config');
server.use(BodyParser.urlencoded({ extended: true }));
server.use(BodyParser.json());
server.use(cors());
server.use(compression());
server.use(session({ secret: config.jwtSecret, resave: true, saveUninitialized: true }));
server.use(passport.initialize());
server.use(passport.session());
server.use(helmet());
mongoose.Promise = global.Promise;
mongoose
    .connect(config.mongoDB)
    .then(() => console.log('Conected on MongoDB'), err => console.log({ error: err.message }));
if (process.env.NODE_ENV !== 'production') {
    const morgan = require('morgan');
    server.use(morgan('dev'));
    server.use('/doc', express.static('src/public/doc'));
    server.use('/', express.static('src/public/app'));
    server.use('/app', express.static('src/public/app'));
}
else {
    server.use('/doc', express.static('build/public/doc'));
    server.use('/', express.static('build/public/app'));
    server.use('/app', express.static('build/public/app'));
    server.use(jwt({ secret: config.jwtSecret }).unless(unlessPath_1.unlessPath));
}
server.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Unauthorized');
    }
});
routes_1.default(server);
server.listen(PORT, () => console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`));
exports.default = server;
