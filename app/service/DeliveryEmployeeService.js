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

exports.getDeliveryEmployees = async() => {
    let deliveryEmployees = [];
    try {
      const response = await axiosInstance.get(
        `http://localhost:8080/api/employees/get/type=Delivery `
      );
  
      deliveryEmployees = response.data;
     
      return deliveryEmployees;
    } catch (e) {
      return new Error("Could not get delivery employees, error on the api get request");
    }
  }