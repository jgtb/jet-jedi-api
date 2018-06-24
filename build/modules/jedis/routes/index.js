"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jedis_get_1 = require("./jedis-get");
const jedis_get_by_id_1 = require("./jedis-get-by-id");
const jedis_post_1 = require("./jedis-post");
const jedis_patch_1 = require("./jedis-patch");
const jedis_delete_1 = require("./jedis-delete");
const JedisRoutes = express_1.Router();
JedisRoutes
    .get('/', jedis_get_1.default)
    .get('/:id', jedis_get_by_id_1.default)
    .post('/', jedis_post_1.default)
    .patch('/:id', jedis_patch_1.default)
    .delete('/:id', jedis_delete_1.default);
exports.default = JedisRoutes;
