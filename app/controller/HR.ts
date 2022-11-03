import * as express from 'express';
import * as EMP_DATA_SERVICE_LAYER from '../service/EmployeeService.js';
import * as nodeCache from 'node-cache';
import {Department} from '../model/Department'
import { DeliveryEmployee } from '../model/DeliveryEmployee.js';
import { SalesEmployee } from '../model/SalesEmployee.js';
import * as departmentService from '../service/DepartmentService.js';
import {Employee} from '../model/Employee'

const router = express.Router()
const myCache = new nodeCache();

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
   
    myCache.set('empID', 0)

    myCache.set('firstname', formData.firstname)
    myCache.set('lastname', formData.lastname)
    res.redirect('add-employee-address')
})

router.get('/add-employee-address', async (req,res) => {
    res.render('addemployeeaddress')
})

router.post('/add-employee-address', async (req,res) =>{
    var formData = req.body
    myCache.set('address', formData.address)
    myCache.set('postcode', formData.postcode)
    res.redirect('add-employee-financial')

})

router.get('/add-employee-financial', async (req,res) => {
    res.render('addemployeefinancial')
})

router.post('/add-employee-financial', async (req,res) =>{
    var formData = req.body 
   
    if(myCache.get("empType") == "Standard"){
        console.log(myCache.data)

            var Employee: Employee = {
            employeeId: myCache.get("empID"),
            first_name:myCache.get("firstname"),
            last_name: myCache.get("lastname"),
            address: myCache.get("address"),
            postcode: myCache.get("postcode"),
            nin: formData.nin,
            bankNo: formData.bankNo,
            startSalary: formData.startSalary,
            departmentId: formData.departmentId
            }
            await EMP_DATA_SERVICE_LAYER.addEmployee(Employee)

            res.redirect('addemployeeconfirmation')
    }
    if(myCache.get("empType") == "Delivery"){

        console.log(myCache.data)

        var DeliveryEmployee: DeliveryEmployee = {
            employeeId: myCache.get("empID"),
            first_name:myCache.get("firstname"),
            last_name: myCache.get("lastname"),
            address: myCache.get("address"),
            postcode: myCache.get("postcode"),
            nin: formData.nin,
            bankNo: formData.bankNo,
            startSalary: formData.startSalary,
            departmentId: formData.departmentId,
            deliveryId: 0
            }
            console.log(DeliveryEmployee)
            await EMP_DATA_SERVICE_LAYER.addDeliveryEmployee(DeliveryEmployee)

            res.redirect('addemployeeconfirmation')

    }
    if(myCache.get("empType") == "Sales"){

            myCache.set('nin', formData.nin)
            myCache.set('bankNo', formData.bankNo)
            myCache.set('startSalary', formData.startSalary)
            myCache.set('departmentId', formData.departmentId)

            res.redirect('/add-employee-sales')
    }
})

router.get('/add-employee-sales', async (req,res) => {
    res.render('addemployeesales')
})

router.post('/add-employee-sales', async (req,res) =>{
    var formData = req.body
    myCache.set('commissionRate', formData.commissionRate)
    myCache.set('totalSales', formData.totalSales)

    var SalesEmployee: SalesEmployee = {
        employeeId: myCache.get("empID"),
        first_name:myCache.get("firstname"),
        last_name: myCache.get("lastname"),
        address: myCache.get("address"),
        postcode: myCache.get("postcode"),
        nin: formData.nin,
        bankNo: formData.bankNo,
        startSalary: formData.startSalary,
        departmentId: formData.departmentId,
        salesId: 0,
        commissionRate: myCache.get("commissionRate"),
        totalSales: myCache.get("totalSales")
        }
    
        await EMP_DATA_SERVICE_LAYER.addSalesEmployee(SalesEmployee)
        res.redirect('addemployeeconfirmation')
})


router.get('/get-employees',async (req, res) => {
    const allEmployees = await EMP_DATA_SERVICE_LAYER.getAllEmployeesFromAPI();
    res.render('list-employees', {employees: allEmployees});
})

router.get("/get-all-departments", async (req, res) => {
    var departments = await departmentService.getAllDepartments();
  res.render("list-all-departments", { departments: departments });
});

router.get('/add-department', async (req,res) => {
    res.render('adddepartment')
  })
  
  router.post('/add-department', async (req,res) =>{
    var formData = req.body
    var Department: Department = {
      departmentId: 0,
      departmentName: formData.departmentName,
      departmentDescription: formData.departmentDescription
    }
    await departmentService.addDepartment(Department)
    res.redirect('list-all-projects')
  })

module.exports = router
