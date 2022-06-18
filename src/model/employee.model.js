var dbConn = require("../config/db.config");

var Employee = function (employee) {
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.email = employee.email;
  this.phone = employee.phone;
  this.organization = employee.organization;
  this.designation = employee.designation;
  this.salary = employee.salary;
  this.status = employee.status ? employee.status : 1;
  this.create_at = new Date();
  this.update_at = new Date();
};

//get All employess
Employee.getAllEmployee = (result) => {
  dbConn.query("SELECT * FROM employee WHERE is_delete=0", (err, res) => {
    if (err) {
      console.log("Error while fetching employee", err);
      result(null, err);
    } else {
      console.log("Employee fetched succesfully");
      result(null, res);
    }
  });
};

//get employee by ID
Employee.getEmployeeByID = (id, result) => {
  dbConn.query("SELECT * FROM employee WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching employee bt id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//create employee
Employee.createEmployee = (employeeData, result) => {
  dbConn.query("INSERT INTO employee SET ?", employeeData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//update employee
Employee.updateEmployee = (id, employeeData, result) => {
  dbConn.query(
    "UPDATE employee SET first_name=?, last_name=?, email=?,phone=?,organization=?,designation=?,salary=?,status=? WHERE id=?",
    [
      employeeData.first_name,
      employeeData.last_name,
      employeeData.email,
      employeeData.phone,
      employeeData.organization,
      employeeData.designation,
      employeeData.salary,
      employeeData.status,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the record");
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// delete employee
Employee.deleteEmployee = (id, result) => {
//   dbConn.query("DELETE FROM employee WHERE id=?", [id], (err, res) => {
//     if (err) {
//       console.log("Error while deleting the employee");
//       result(null, err);
//     } else {
//       result(null, res);
//     }
//   });
dbConn.query("UPDATE employee SET is_delete=? WHERE id=?", [1,id], (err, res) => {
    if (err) {
      console.log("Error while deleting the employee");
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Employee;
