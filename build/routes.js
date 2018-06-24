"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./modules/jedis/routes/index");
const index_2 = require("./modules/reports/routes/index");
const index_3 = require("./modules/statues/routes/index");
const ROUTES = [
    {
        component: index_1.default,
        module: 'jedis'
    },
    {
        component: index_2.default,
        module: 'reports'
    },
    {
        component: index_3.default,
        module: 'statues'
    }
];
const urlBase = '/api/v1/';
const allRoutes = (server) => {
    ROUTES.forEach((route) => server.use(`${urlBase}${route.module}`, route.component));
    server.use((req, res, next) => {
        res.status(500).json({
            status: 500,
            message: `Invalid Route`,
            route: req.originalUrl
        });
        next();
    });
};
exports.default = allRoutes;
