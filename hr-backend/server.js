import mongoose from "mongoose";

const mongodb_url = "mongodb://localhost:27017/hrdb";
const mongo_opts = {
    "UseNewUrlParser": true,
    "socketTimeoutMS": 0,
    "keepAlive": true,
    "reconnectTries": 10,
    useUnifiedTopology: true
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
        unique: true
    },
    "photo": {
        type: String,
        required: true
    },
    "iban": {
        type: String,
        required: true,
        unique: true
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