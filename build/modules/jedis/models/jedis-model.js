"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../statues/helpers/enums");
exports.default = {
    name: {
        type: String,
        required: true
    },
    planet: {
        type: String,
        required: true
    },
    master: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: enums_1.statues,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
};
