import * as express from "express";
import * as nodeCache from "node-cache";

const router = express.Router();
const myCache = new nodeCache();

module.exports = router