import {Config} from "../utility";

export default class EmployeeModel {
    identityNo = '';
    fullname= 'any user';
    iban = '';
    photo = Config.NO_IMAGE;
    birthYear = 2019;
    salary = 2000 ;
    department	= 'Sales';
    fulltime = true;

    constructor(identityNo, fullname, iban) {
        this.identityNo = identityNo;
        this.fullname = fullname;
        this.iban = iban;
    }
}