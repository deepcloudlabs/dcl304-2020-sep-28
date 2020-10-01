class Employee {
    constructor() {
        this.identityNo = ko.observable("51203761038");
        this.fullname = ko.observable("james sawyer");
        this.iban = ko.observable("TR440006296293449422424167");
        this.photo = ko.observable(AppConfig.NO_IMAGE);
        this.birthYear = ko.observable(1995);
        this.salary = ko.observable(100000)
        this.department = ko.observable("IT");
        this.fulltime = ko.observable(true);
    }

    update = (emp) => {
        for (let field in this) {
            if (emp.hasOwnProperty(field)) {
                let prop = this[field];
                if (ko.isObservable(prop))
                    prop(emp[field]);
                else
                    prop = emp[field];
            }
        }
    }
    update_es7 = (emp) => {
        Object.entries(this)
            .filter(entry => emp.hasOwnProperty(entry[0]))
            .forEach(entry => {
                let key = entry[0];
                let value = entry[1];
                if (ko.isObservable(value))
                    value(emp[key]);
                else
                    value = emp[key];
            });
    }
}

class HrViewModel {
    constructor() {
        this.employee = new Employee();
        this.employees = ko.observableArray([]);
    }

    findAll = () => {
        fetch(`${AppConfig.REST_API_BASE_URL}/employees`)
            .then(res => res.json())
            .then(employees => this.employees(employees))
            .catch(err => toastr.error(err))
    }
    findEmployeeByIdentity = () => {
        fetch(`${AppConfig.REST_API_BASE_URL}/employees/${this.employee.identityNo()}`)
            .then(res => res.json())
            .then(employee => this.employee.update_es7(employee))
            .catch(err => toastr.error(err))
    }

    hireEmployee = () => {
        fetch(
            `${AppConfig.REST_API_BASE_URL}/employees`,
            {
                method: "POST",
                body: ko.toJSON(this.employee),
                headers: new Headers({"Content-Type": "application/json"})
            }
        ).then(status => toastr.success("Employee is hired!"));
    }

    fireEmployee = () => {

    }
    updateEmployee = () => {

    }
};