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
const updateJedi = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    const update = { $set: req.body };
    const options = { new: true };
    const jedi = yield jedis_schema_1.default.findByIdAndUpdate(id, update, options);
    res.status(200).json(jedi);
});
exports.default = updateJedi;
