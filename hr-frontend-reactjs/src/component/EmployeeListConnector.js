import {connect} from "react-redux";
import EmployeeList from "./EmployeeList";
import {getFindEmployees} from "../utility";
import {showSuccessMessage} from "../toastr-util";
import 'toastr/build/toastr.css';

let mapDispatchToProps = function (dispatch) {
    return {
        findEmployees: getFindEmployees(dispatch),
        removeEmployee: async function (employee) {
            let response = await fetch('http://localhost:4001/employees/' + employee.identityNo, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            }).then(res => res.json());
            showSuccessMessage('Employee is removed!');
            return dispatch({type: 'remove', response});
        }
    }
}

let mapStateToProps = function (state) {
    return {
        employees: state.employeesStore.employees
    }
}

let EmployeeListConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList);

export default EmployeeListConnector;