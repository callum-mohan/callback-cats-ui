import * as express from "express";
import * as PRODUCT_DATA_SERVICE_LAYER from "../service/Project";
import * as nodeCache from "node-cache";
import { Employee } from "../model/Employee";
import { formatDiagnosticsWithColorAndContext } from "typescript";
import { EmployeePersonal } from "../model/EmployeePersonal.js";

const router = express.Router();
const myCache = new nodeCache();

router.get("/get-all-projects", async (req, res) => {
    var allProjects = await PRODUCT_DATA_SERVICE_LAYER.getAllProjects();
  res.render("list-sales-employee", { projects: allProjects });
});