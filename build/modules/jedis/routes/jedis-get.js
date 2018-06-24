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
const jedis_schema_1 = require("../models/jedis-schema");
const generateFilters_1 = require("../../../helpers/generateFilters");
const getAllJedis = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const filters = generateFilters_1.default(req.query);
    const paginate = {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
        sort: { createdAt: -1 },
        lean: true
    };
    const jedis = yield jedis_schema_1.default.paginate(filters, paginate);
    res.status(200).json(jedis);
});
exports.default = getAllJedis;
