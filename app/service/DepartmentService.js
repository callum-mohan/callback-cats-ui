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

exports.getAllDepartments = async() => {
    let allDepartments = [];
    try {
      const response = await axiosInstance.get(
        `http://localhost:8080/api/department/get `
      );
  
      allDepartments = response.data;
  
      return allDepartments;
    } catch (e) {
      return new Error("Could not get departments, error on the api get request");
    }
  }

  exports.addDepartment = async (newDepartment) => {
    let departments = [];
    try {
      const response = await axiosInstance.post(
        "http://localhost:8080/api/department/add",
         newDepartment
      );
      departments = response.data;
    } catch (e) {
      console.log(e);
      return new Error("Could not add department");
    }
    return departments;
  };