const express = require("express");
const router = express.Router();
const axios = require("axios");
const https = require("https");
const { response } = require("express");

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
  rejectUnauthorized: false,
  }),
});

exports.addEmployee = async (newEmployee) => {
  let employees = [];
  try {
    const response = await axiosInstance.post(
      "http://localhost:8080/api/employees/add/type=Employee",
      newEmployee
    );
    employees = response.data;
  } catch (e) {
    console.log(e);
    return new Error("Could not add employee");
  }
  return employees;
};

exports.addDeliveryEmployee = async (newEmployee) => {
  let employees = [];
  try {
    const response = await axiosInstance.post(
      "http://localhost:8080/api/employees/add/type=Delivery",
      newEmployee
    );
    employees = response.data;
  } catch (e) {
    console.log(e);
    return new Error("Could not add delivery employee");
  }
  return employees;
};

exports.addSalesEmployee = async (newEmployee) => {
  let employees = [];
  try {
    const response = await axiosInstance.post(
      "http://localhost:8080/api/employees/add/type=Sales",
      newEmployee
    );
    employees = response.data;
  } catch (e) {
    console.log(e);
    return new Error("Could not add delivery employee");
  }
  return employees;
};



exports.getAllEmployeesFromAPI = async () => {
  let employees = [];
  try {
    const response = await axiosInstance.get(
      //port 8080 is the JAVA api but 3000 is the JS
      `http://localhost:8080/api/employees/get `
    );

    employees = response.data;

    return employees;
  } catch (e) {
    return new Error("Could not get emmployee, error on the api get request");
  }
};


exports.getEmployeesFromApiBySales = async() => {
  let salesEmployees = [];
  try {
    const response = await axiosInstance.get(
      //port 8080 is the JAVA api but 3000 is the JS
      `http://localhost:8080/api/employees/get/type=Sales `
    );

    salesEmployees = response.data;

    return employees;
  } catch (e) {
    return new Error("Could not get emmployee, error on the api get request");
  }
}