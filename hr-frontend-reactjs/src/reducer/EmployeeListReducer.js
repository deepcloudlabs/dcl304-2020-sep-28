/** @author Binnur Kurt <binnur.kurt@gmail.com>
 * EmployeeListReducer.js
 */
import {Config} from "../utility";
import {showSuccessMessage} from "../toastr-util";

export default function EmployeeListReducer(state, action) { // reducer function
    if (state === undefined) {
        return {
            employees: []
        };
    }
    let newState = {...state};
    switch (action.type) {
        case "refresh":
            newState.employees = newState.employees
                  .map( emp => { if(emp.identityNo === action.employee.identityNo) return action.employee; return emp});
            break;
        case "all":
            newState.employees = action.employees;
            newState.employees.forEach( emp => {if (emp.photo === null) emp.photo= Config.NO_IMAGE} )
            showSuccessMessage('Employees are retrieved!');
            break;
        case "remove":
            let identity = action.response.identityNo;
            newState.employees = newState.employees.filter( emp => emp.identityNo !==identity );
            // alert(action.response.fullname + " is deleted!");
            break;
        default:
    }
    return newState;
}