const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

//define route
app.get("/", (req, res) => {
  res.send("REST API");
});

//import employee route
const employeeRoutes = require("./routes/employee.route");

app.use("/api/employee", employeeRoutes);

//listen to the port
app.listen(port, () => {
  console.log(`Express Server is running at ${port}`);
});
