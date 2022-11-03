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
var _this = this;
var express = require("express");
var router = express.Router();
var axios = require("axios");
var https = require("https");
var response = require("express").response;
var axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
});
exports.getAllProjects = function () { return __awaiter(_this, void 0, void 0, function () {
    var allProjects, response_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                allProjects = [];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axiosInstance.get(
                    //port 8080 is the JAVA api but 3000 is the JS
                    "http://localhost:8080/api/talent/projects ")];
            case 2:
                response_1 = _a.sent();
                allProjects = response_1.data;
                return [2 /*return*/, employees];
            case 3:
                e_1 = _a.sent();
                return [2 /*return*/, new Error("Could not get project, error on the api get request")];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getEmployeesWithoutProject = function () { return __awaiter(_this, void 0, void 0, function () {
    var EmployeesWithoutProject, response_2, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                EmployeesWithoutProject = [];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axiosInstance.get(
                    //port 8080 is the JAVA api but 3000 is the JS
                    "http://localhost:8080/api/talent/projects ")];
            case 2:
                response_2 = _a.sent();
                allProjects = response_2.data;
                return [2 /*return*/, employees];
            case 3:
                e_2 = _a.sent();
                return [2 /*return*/, new Error("Could not get project, error on the api get request")];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getProjectsWithoutEmployees = function () { return __awaiter(_this, void 0, void 0, function () {
    var ProjectsWith, response_3, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ProjectsWith = [];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axiosInstance.get(
                    //port 8080 is the JAVA api but 3000 is the JS
                    "http://localhost:8080/api/talent/projects ")];
            case 2:
                response_3 = _a.sent();
                allProjects = response_3.data;
                return [2 /*return*/, employees];
            case 3:
                e_3 = _a.sent();
                return [2 /*return*/, new Error("Could not get project, error on the api get request")];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addProject = function (newProject) { return __awaiter(_this, void 0, void 0, function () {
    var projects, response_4, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projects = [];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axiosInstance.post("http://localhost:8080/api/projects/add", newProject)];
            case 2:
                response_4 = _a.sent();
                projects = response_4.data;
                return [3 /*break*/, 4];
            case 3:
                e_4 = _a.sent();
                console.log(e_4);
                return [2 /*return*/, new Error("Could not add project")];
            case 4: return [2 /*return*/, projects];
        }
    });
}); };
//# sourceMappingURL=ProjectService.js.map