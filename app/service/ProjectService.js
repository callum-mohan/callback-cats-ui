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

exports.getAllProjects = async() => {
    let allProjects = [];
    try {
      const response = await axiosInstance.get(
        //port 8080 is the JAVA api but 3000 is the JS
        `http://localhost:8080/api/talent/projects `
      );
  
      allProjects = response.data;
  
      return allProjects;
    } catch (e) {
      return new Error("Could not get project, error on the api get request");
    }
  }

  exports.getEmployeesWithoutProject = async() => {
    let EmployeesWithoutProject = [];
    try {
      const response = await axiosInstance.get(
        //port 8080 is the JAVA api but 3000 is the JS
        `http://localhost:8080/api/talent/unassigned-employees`
      );
  
      EmployeesWithoutProject = response.data;
  
      return EmployeesWithoutProject;
    } catch (e) {
      return new Error("Could not get project, error on the api get request");
    }
  }


  exports.getProjectsWithoutEmployees = async() => {
    let ProjectsWithoutEmployees = [];
    try {
      const response = await axiosInstance.get(
        //port 8080 is the JAVA api but 3000 is the JS
        `http://localhost:8080/api/talent/unassigned-projects`
      );
  
      ProjectsWithoutEmployees = response.data;
  
      return ProjectsWithoutEmployees;
    } catch (e) {
      return new Error("Could not get project, error on the api get request");
    }
  }