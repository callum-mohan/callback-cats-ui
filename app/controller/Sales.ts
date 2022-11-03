import * as express from "express";
import * as SALES_EMP_DATA_SERVICE_LAYER from "../service/SalesEmployeeService";
import * as nodeCache from "node-cache";
import { Employee } from "../model/Employee";
import { formatDiagnosticsWithColorAndContext } from "typescript";
import { EmployeePersonal } from "../model/EmployeePersonal.js";

const router = express.Router();
const myCache = new nodeCache();

router.get("/list-sales-employee", async (req, res) => {
  var allSalesEmployees =
    await SALES_EMP_DATA_SERVICE_LAYER.getEmployeesFromApiBySales();
  res.render("list-sales-employee", { salesEmployees: allSalesEmployees });
});
