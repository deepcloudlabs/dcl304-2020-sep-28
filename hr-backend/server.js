import mongoose from "mongoose";
import utils from "./utils";

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
    "_id": mongoose.Schema.Types.ObjectId,
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
