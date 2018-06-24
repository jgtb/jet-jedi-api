"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statues_get_1 = require("./statues-get");
const StatuesRoutes = express_1.Router();
StatuesRoutes
    .get('/', statues_get_1.default);
exports.default = StatuesRoutes;
