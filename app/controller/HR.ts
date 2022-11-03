import * as express from 'express';
import * as EMP_DATA_SERVICE_LAYER from '../service/EmployeeService.js';
import * as nodeCache from 'node-cache';
import {Employee} from '../model/Employee'
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { EmployeePersonal } from '../model/EmployeePersonal.js';

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
router.get('/add-employee-type', async (req,res) => {
    res.render('addemployeetype')
})

router.post('/add-employee-type', async (req,res) =>{
    var formData = req.body
    myCache.set('empType', formData.empType)
    res.redirect('/add-employee-name')
})

router.get('/add-employee-name', async (req,res) => {
    res.render('addemployeename')
})

router.post('/add-employee-name', async (req,res) =>{
    var formData = req.body
    console.log(formData)
    myCache.set('empID', formData.empID)
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
    console.log(myCache.data)
    res.redirect('add-employee-financial')

})

router.get('/add-employee-financial', async (req,res) => {
    res.render('addemployeefinancial')
})

router.post('/add-employee-financial', async (req,res) =>{
    var formData = req.body
    const EMPLOYEE_PERSONAL_DETAILS: EmployeePersonal =
    myCache.get("employee-personal");

    var Employee: Employee = {
      empID: EMPLOYEE_PERSONAL_DETAILS.empID,
      firstname: EMPLOYEE_PERSONAL_DETAILS.firstname,
      lastname: EMPLOYEE_PERSONAL_DETAILS.lastname,
      address: EMPLOYEE_PERSONAL_DETAILS.address,
      postcode: EMPLOYEE_PERSONAL_DETAILS.postcode,
      nin: formData.nin,
      bankNo: formData.bankNo,
      startSalary: formData.startSalary,
      departmentID: formData.departmentID
    }
    await EMP_DATA_SERVICE_LAYER.addEmployee(Employee)

    res.redirect('addemployeeconfirmation')
})

router.get('/get-employees',async (req, res) => {
    const allEmployees = await EMP_DATA_SERVICE_LAYER.getAllEmployeesFromAPI();
    res.render('list-employees', {employees: allEmployees});
})

module.exports = router
