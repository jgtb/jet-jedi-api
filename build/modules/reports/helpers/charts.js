"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const groupBy = (arr, key) => _.groupBy(arr, key);
const chartsData = (arr, type) => Object
    .keys(groupBy(arr, type))
    .reduce((acc, key) => {
    acc.push([key, groupBy(arr, type)[key].length]);
    return acc;
}, []);
exports.chartsData = chartsData;
