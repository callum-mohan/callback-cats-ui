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

exports.getEmployeesFromApiBySales = async() => {
    let salesEmployees = [];
    try {
      const response = await axiosInstance.get(
        //port 8080 is the JAVA api but 3000 is the JS
        `http://localhost:8080/api/employees/get/type=Sales `
      );
  
      salesEmployees = response.data;
     
  
      return salesEmployees;
    } catch (e) {
      return new Error("Could not get sales employees, error on the api get request");
    }
  }