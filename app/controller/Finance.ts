import * as express from "express";
import * as projectService from "../service/ProjectService";
import {Project} from '../model/Project'
import * as nodeCache from "node-cache";

const router = express.Router();
const myCache = new nodeCache();

module.exports = router