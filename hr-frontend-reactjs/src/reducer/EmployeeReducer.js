/** @author Binnur Kurt <binnur.kurt@gmail.com>
 * EmployeeReducer.js
 */
import EmployeeModel from "../model/employee";
import {showSuccessMessage} from "../toastr-util";

export default function EmployeeReducer(state, action) { // reducer function
    if (state === undefined) {
        return {
            employee: new EmployeeModel('12345678910', 'Jack Bauer', 'TR')
        };
    }
    let newState = {...state};
    switch (action.type) {
        case "find":
            newState.employee = action.employee;
            break;
        case "add":
            break;
        case "update":
            break;
        case "loadImage":
            newState.employee = {...state.employee}
            newState.employee.photo = action.data;
            showSuccessMessage('Image is loaded!');
            break;
        case "handle":
            newState.employee = {...state.employee}
            if (action.event.target.name === 'fulltime'){
                newState.employee[action.event.target.name] = !newState.employee[action.event.target.name];
            }
            else
                newState.employee[action.event.target.name] = action.event.target.value;
            break;
        default:
    }
    return newState;
}