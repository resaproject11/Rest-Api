const EmployeeModel = require("../model/employee.model");

//get all employee
exports.getEmployeeList = (req, res) => {
  EmployeeModel.getAllEmployee((err, employee) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("Employee", employee);
    res.send(employee);
  });
};

//get employee by ID

exports.getEmployeeByID = (req, res) => {
  EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.send(employee);
  });
};

//create employee
exports.createNewEmployee = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    console.log("valid data");
    EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Employee Created Succesfully",
        data: employee.id,
      });
    });
  }
};

//update employee
exports.updateEmployee = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    console.log("valid data");
    EmployeeModel.updateEmployee(
      req.params.id,
      employeeReqData,
      (err, employee) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Employee updated Succesfully",
        });
      }
    );
  }
};

//delete employee
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Employee delete successfully!" });
  });
};
