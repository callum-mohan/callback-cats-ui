"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var EMP_DATA_SERVICE_LAYER = require("../service/EmployeeService.js");
var nodeCache = require("node-cache");
var router = express.Router();
var myCache = new nodeCache();
// async function buildEmployeeData() {
//   const dbEmployees = await employeeService.getEmployees()
//   for (let i = 0; i < dbEmployees.length; i++){
//     dbEmployees[i].deleteLink = `<form method="POST" action="/employees/${dbEmployees[i].EmployeeID}/delete"> <input type='submit' value='Delete Employee' class='delete-button'></form>`
//   }
//   return dbEmployees;
// }
// router.post('/addemployee', async (req,res) =>{
//     await employeeService.addEmployee(req.body);
//     res.render('list-employees', {employees: await buildEmployeeData()})
// })
router.get('/add-employee-type', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.render('addemployeetype');
        return [2 /*return*/];
    });
}); });
router.post('/add-employee-type', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var formData;
    return __generator(this, function (_a) {
        formData = req.body;
        myCache.set('empType', formData.empType);
        res.redirect('/add-employee-name');
        return [2 /*return*/];
    });
}); });
router.get('/add-employee-name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.render('addemployeename');
        return [2 /*return*/];
    });
}); });
router.post('/add-employee-name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var formData;
    return __generator(this, function (_a) {
        formData = req.body;
        myCache.set('empID', 0);
        myCache.set('firstname', formData.firstname);
        myCache.set('lastname', formData.lastname);
        res.redirect('add-employee-address');
        return [2 /*return*/];
    });
}); });
router.get('/add-employee-address', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.render('addemployeeaddress');
        return [2 /*return*/];
    });
}); });
router.post('/add-employee-address', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var formData;
    return __generator(this, function (_a) {
        formData = req.body;
        myCache.set('addressLine', formData.address);
        myCache.set('postcode', formData.postcode);
        res.redirect('add-employee-financial');
        return [2 /*return*/];
    });
}); });
router.get('/add-employee-financial', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.render('addemployeefinancial');
        return [2 /*return*/];
    });
}); });
router.post('/add-employee-financial', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var formData, Employee, DeliveryEmployee;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                formData = req.body;
                if (!(myCache.get("empType") == "Standard")) return [3 /*break*/, 2];
                console.log(myCache.data);
                Employee = {
                    empID: myCache.get("empID"),
                    firstname: myCache.get("firstname"),
                    lastname: myCache.get("lastname"),
                    address: myCache.get("address"),
                    postcode: myCache.get("postcode"),
                    nin: formData.nin,
                    bankNo: formData.bankNo,
                    startSalary: formData.startSalary,
                    departmentID: formData.departmentID
                };
                return [4 /*yield*/, EMP_DATA_SERVICE_LAYER.addEmployee(Employee)];
            case 1:
                _a.sent();
                res.redirect('addemployeeconfirmation');
                _a.label = 2;
            case 2:
                if (!(myCache.get("empType") == "Delivery")) return [3 /*break*/, 4];
                DeliveryEmployee = {
                    empID: myCache.get("empID"),
                    firstname: myCache.get("firstname"),
                    lastname: myCache.get("lastname"),
                    address: myCache.get("address"),
                    postcode: myCache.get("postcode"),
                    nin: formData.nin,
                    bankNo: formData.bankNo,
                    startSalary: formData.startSalary,
                    departmentID: formData.departmentId,
                    deliveryID: 0
                };
                return [4 /*yield*/, EMP_DATA_SERVICE_LAYER.addDeliveryEmployee(DeliveryEmployee)];
            case 3:
                _a.sent();
                res.redirect('addemployeeconfirmation');
                _a.label = 4;
            case 4:
                if (myCache.get("empType") == "Sales") {
                    myCache.set('nin', formData.nin);
                    myCache.set('bankNo', formData.bankNo);
                    myCache.set('startSalary', formData.startSalary);
                    myCache.set('departmentId', formData.departmentId);
                    res.redirect('/add-employee-sales');
                }
                return [2 /*return*/];
        }
    });
}); });
router.get('/add-employee-sales', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.render('addemployeesales');
        return [2 /*return*/];
    });
}); });
router.post('/add-employee-sales', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var formData, SalesEmployee;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                formData = req.body;
                myCache.set('commissionRate', formData.commissionRate);
                myCache.set('totalSales', formData.totalSales);
                SalesEmployee = {
                    empID: myCache.get("empID"),
                    firstname: myCache.get("firstname"),
                    lastname: myCache.get("lastname"),
                    address: myCache.get("address"),
                    postcode: myCache.get("postcode"),
                    nin: formData.nin,
                    bankNo: formData.bankNo,
                    startSalary: formData.startSalary,
                    departmentID: formData.departmentID,
                    salesID: 0,
                    commissionRate: myCache.get("commissionRate"),
                    totalSales: myCache.get("totalSales")
                };
                return [4 /*yield*/, EMP_DATA_SERVICE_LAYER.addSalesEmployee(SalesEmployee)];
            case 1:
                _a.sent();
                res.redirect('addemployeeconfirmation');
                return [2 /*return*/];
        }
    });
}); });
router.get('/get-employees', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allEmployees;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, EMP_DATA_SERVICE_LAYER.getAllEmployeesFromAPI()];
            case 1:
                allEmployees = _a.sent();
                res.render('list-employees', { employees: allEmployees });
                return [2 /*return*/];
        }
    });
}); });
module.exports = router;
//# sourceMappingURL=HR.js.map