import * as express from 'express';
import * as EMP_DATA_SERVICE_LAYER from '../service/EmployeeService.js';
import * as nodeCache from 'node-cache';
import {Employee} from '../model/Employee'
import { formatDiagnosticsWithColorAndContext } from 'typescript';

const router = express.Router()
const myCache = new nodeCache();

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

router.get('/add-employee-id', async (req,res) => {
    res.render('addemployeeid')
})

router.post('/add-employee-id', async (req,res) =>{
    var formData = req.body
    myCache.set('empID', formData.empID)
    res.redirect('/add-employee-name')
})

router.get('/add-employee-name', async (req,res) => {
    res.render('addemployeename')
})

router.post('/add-employee-name', async (req,res) =>{
    var formData = req.body
    myCache.set('firstname', formData.firstname)
    myCache.set('lastname', formData.lastname)
    res.redirect('add-employee-address')
})

router.get('/add-employee-address', async (req,res) => {
    res.render('addemployeeaddress')
})

router.post('/add-employee-address', async (req,res) =>{
    var formData = req.body
    myCache.set('addressLine', formData.addressLine)
    myCache.set('postcode', formData.postcode)
    res.redirect('add-employee-personal')
})

router.get('/add-employee-financial', async (req,res) => {
    res.render('addemployeefinancial')
})

router.post('/add-employee-financial', async (req,res) =>{
    var formData = req.body
    var Employee: Employee = {
      empID: Number(myCache.get('empID')),
      firstname: String(myCache.get('firstname')),
      lastname: String(myCache.get('lastname')),
      address: String(myCache.get('addressLine')),
      postcode: String(myCache.get('postcode')),
      nin: formData.nin,
      bankNo: formData.bankNo,
      startSalary: formData.startSalary,
      departmentID: formData.departmentID
    }
    await EMP_DATA_SERVICE_LAYER.addEmployee(Employee)
    res.redirect('list-employees')
})

router.get('/get-employees',async (req, res) => {
    const allEmployees = EMP_DATA_SERVICE_LAYER.getAllEmployeesFromAPI();

    //this rendered page doesnt exist yet
    res.render('list-employees', {employee: allEmployees});
})

module.exports = router
