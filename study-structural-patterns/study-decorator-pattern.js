class Employee {
    constructor(identity, fullname, salary) {
        this.identity= identity;
        this.fullname = fullname ;
        this.salary = salary;
    }
    get_salary = () => {
        return this.salary;
    }
}

class DecoratedEmployee {
    constructor(employee) {
        this.employee = employee;
    }
    get_salary = () => {
        let montly_salary = this.employee.get_salary();
        return 0.75 * (12 * montly_salary);
    }
}

let jack = new Employee("1", "jack bauer", 25000);
console.log(`Montly salary: ${jack.get_salary()}`);
let decorated_jack= new DecoratedEmployee(jack);
console.log(`Salary - Tax: ${decorated_jack.get_salary()}`);
