/* es6 -> Array
    A. Filter-Map-Reduce -> Hadoop (i. HDFS ii. MapReduce)
    B. Functional Programming: Lambda Expression
    filter
    map
    reduce
    forEach
*/
let jack = {
    identity: "1", fullname: "jack bauer",
    birthYear: 1956, salary: 100000, department: "IT"
}
let kate = {
    identity: "2", fullname: "kate austen",
    birthYear: 1986, salary: 200000, department: "FINANCE"
}
let james = {
    identity: "3", fullname: "james sawyer",
    birthYear: 1990, salary: 300000, department: "SALES"
}
let ben = {
    identity: "4", fullname: "ben linus",
    birthYear: 1960, salary: 400000, department: "FINANCE"
}
let employees = [jack, kate, james, ben];
let ifWorkingInFinanceDepartment = employee => {
    console.log("filter(ifWorkingInFinanceDepartment) is running.")
    return employee.department == "FINANCE";
}
let add = (accumulator, salary) => {
    console.log("reduce(add) is running.")
    return accumulator + salary;
}
let toSalary = employee => {
    console.log("map(toSalary) is running.")
    return employee.salary;
}
let totalFinanceSalary =
    employees.filter(ifWorkingInFinanceDepartment)
        .map(toSalary)
        .reduce(add, 0)
//console.log(`Finance Dept. Total Salary is ${totalFinanceSalary}`)

//           [jack, kate, james, ben]
// filter -> [kate, ben]
// map    -> [200000, 400000]
// reduce -> accumulator:0      (1) (0, 200000)     -> 200000
//           accumulator:200000 (2) (200000,400000) -> 600000
//           accumulator:600000 -> return

let filteredEmps = employees.filter(ifWorkingInFinanceDepartment);
let mappedEmps = filteredEmps.map(toSalary);
let total = mappedEmps.reduce(add, 0);

for (let employee of employees) {
    if (employee.department === "FINANCE")
        total = total + employee.salary;
}
let max_by = (field_getter) =>
    (maxemp, emp) => field_getter(maxemp) < field_getter(emp) ? emp : maxemp;
let get_salary = emp => emp.salary
let get_birth_year = emp => emp.birthYear
let employee_max = employees.reduce(max_by(get_salary), {salary: -1})
let youngest_employee = employees.reduce(max_by(get_birth_year), {birthYear: -Infinity})

//console.log(employee_max)
//console.log(youngest_employee)

function* my_filter(items, fn) {
    for (let item of items)
        if (fn(item)) yield item;
    return;
}

function* my_map(items, fn) {
    for (let item of items)
        yield fn(item);
    return;
}

function my_reduce(items, fn, init) { // terminate
    let accumulator = init;
    for (let item of items)
        accumulator = fn(accumulator, item);
    return accumulator;
}

let acc = my_reduce(my_map(my_filter(employees, ifWorkingInFinanceDepartment), toSalary), add, 0);
console.log(acc)