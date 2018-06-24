"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_1 = require("./dashboard");
const ReportsRoutes = express_1.Router();
ReportsRoutes
    .get('/dashboard', dashboard_1.default);
exports.default = ReportsRoutes;
