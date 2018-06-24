"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jedis_schema_1 = require("../../jedis/models/jedis-schema");
const charts_1 = require("../helpers/charts");
const getDashboardReport = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const jedis = yield jedis_schema_1.default.find({});
        res.status(200).json({
            statues: charts_1.chartsData(jedis, 'status'),
            planets: charts_1.chartsData(jedis, 'planet')
        });
    }
    catch (err) {
        res.send(400);
    }
});
exports.default = getDashboardReport;
