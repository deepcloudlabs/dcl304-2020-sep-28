import mongoose from "mongoose";
import utils from "./utils";
import bodyParser from "body-parser";
import logger from "morgan";
import express from "express";
import swaggerUi from "swagger-ui-express";
import openApiDoc from "./swagger-hr-api.json";

/*
    Creating REST Api using Express.js
 */
const port = 9100;
const api = express();

/*
    REST API Configuration
 */
api.use(bodyParser.json({limit: "5mb"}));
api.use(logger('dev'));
// CORS Settings: Add a filter
api.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD, POST, PUT, DELETE, PATCH, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDoc))
/*
     Persistence with MongoDB using Mongoose Library
 */
const mongodb_url = "mongodb://localhost:27017/hrdb";
const mongo_opts = { // Dictionary
    "useNewUrlParser": true,
    "socketTimeoutMS": 0,
    "keepAlive": true,
    "useCreateIndex": true,
    "useUnifiedTopology": true
};
mongoose.connect(mongodb_url, mongo_opts);

const employeeSchema = new mongoose.Schema({
    "_id": {
        type: String,
        required: true
    },
    "fullname": {
        type: String,
        required: true,
        minLength: 5
    },
    "identityNo": {
        type: String,
        required: true,
        unique: true,
        validate: [
            utils.tcKimlikNoValidator,
            'You must provide a valid identity no'
        ]
    },
    "photo": {
        type: String,
        required: false,
        default: utils.NO_IMAGE
    },
    "iban": {
        type: String,
        required: true,
        unique: true,
        validate: [
            utils.ibanValidator,
            'You must provide a valid iban'
        ]
    },
    "birthYear": {
        type: Number,
        required: true
    },
    "salary": {
        type: Number,
        required: true,
        min: 3500
    },
    "fulltime": {
        type: Boolean,
        required: false,
        default: true
    },
    "department": {
        type: String,
        enum: ["IT", "Sales", "Finance", "HR"],
        required: false,
        default: "Finance"
    }
});

const Employee = mongoose.model('employees', employeeSchema);

/*
     REST API DEFINITION
 */

// Hiring an employee
api.post("/hr/api/v1/employees", (req,res) => {
    let emp = req.body;
    emp._id = emp.identityNo;
    let employee = new Employee(emp);
    employee.save((err, newemp) => { // async
        res.set("Content-Type", "application/json");
        if (err) {
            res.status(400).send({"status": err})
        } else {
            res.status(200).send(newemp);
        }
    });
});

// Updating an employee
api.put("/hr/api/v1/employees/:identity", (req,res) => {

});

// Updating an employee
api.patch("/hr/api/v1/employees/:identity", (req,res) => {

});

// Firing the employee with the given identity
// http delete http://localhost:9001/hr/api/v1/employees/11111111110
api.delete("/hr/api/v1/employees/:identity", (req,res) => {

});

// Querying the employee for the given identity
api.get("/hr/api/v1/employees/:identity", (req,res) => {
   let identity = req.params.identity;
   Employee.findOne( // async
       {"identityNo": identity},
       {"_id": false},
       (err,emp) => {
           res.set("Content-Type", "application/json");
           if (err) {
               res.status(404).send({"status": "Not found"});
           } else {
               res.status(200).send(emp);
           }
       }
   )
});

// Querying the employees with pagination
// http get http://localhost:9001/hr/api/v1/employees?page=10&size=15
api.get("/hr/api/v1/employees", (req,res) => {

});

api.listen(port);
console.log(`REST Api is up and running at port (${port}).`);
