"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const jedis_model_1 = require("./jedis-model");
const jedisSchema = new mongoose_1.Schema(jedis_model_1.default, {
    timestamps: true
});
jedisSchema.plugin(mongoosePaginate);
const JedisSchema = mongoose_1.model('jedis', jedisSchema);
exports.default = JedisSchema;
