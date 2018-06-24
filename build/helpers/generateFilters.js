"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const generateFilters = (filters) => _.pickBy(_.omit(filters, 'page', 'limit'), _.identity);
exports.default = generateFilters;
