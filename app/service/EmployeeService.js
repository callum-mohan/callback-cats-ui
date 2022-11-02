const express = require('express')
const router = express.Router()
const axios = require('axios');
const https = require('https');
const { response } = require('express');

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

exports.addEmployee = async (newEmployee) =>{
    let employees = []
    try{
        const response = await axiosInstance.post('http://localhost:8080/api/employees/add/type=Employee', newEmployee);
        employees = response.data;
      }
      catch(e){
        console.log(e)
        return new Error('Could not add employee');
      }
      return employees;
 }
 