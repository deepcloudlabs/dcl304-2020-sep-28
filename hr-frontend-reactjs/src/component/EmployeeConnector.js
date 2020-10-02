import {connect} from "react-redux";
import Employee from "./Employee";
import {Config, refreshEmployees} from "../utility";
import {showSuccessMessage} from "../toastr-util";

let mapDispatchToProps = function(dispatch){
    return {
        findEmployee: async function(identity){
            let idx = Math.floor(Math.random()*1000);
            let employee = await fetch('http://localhost:9100/hr/api/v1/employees/'+identity+'?_='+idx)
                               .then( res => res.json());
            if (employee.photo === null) employee.photo=Config.NO_IMAGE;
            showSuccessMessage('Employee is retrieved!');
            return dispatch({type: 'find', employee});
        },
        addEmployee: async function(emp){
            let response = await fetch('http://localhost:9100/hr/api/v1/employees',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(emp)
            }).then(res => res.json());
            refreshEmployees(dispatch,emp)();
            showSuccessMessage('Employee is created!');
            return dispatch({type: 'add', response});
        },
        updateEmployee: async function(emp){
            let response = await fetch('http://localhost:9100/hr/api/v1/employees',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(emp)
            }).then(res => res.json());
            refreshEmployees(dispatch,emp)();
            showSuccessMessage('Employee is updated!');
            return dispatch({type: 'update', response});
        },
        handleFileInput: function(event){
            event.preventDefault();
            var files = event.target.files || event.originalEvent.dataTransfer.files;
            console.log(files[0]);
            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function (e) {
                dispatch({type: 'loadImage', data: e.target.result});
            };
        },
        handleImageDrop: function(event){
            event.preventDefault();
            var reader = new FileReader();
            reader.readAsDataURL(event.dataTransfer.files[0]);
            reader.onload = function (e) {
                dispatch({type: 'loadImage', data: e.target.result});
            };
        },
        handleImageDragOver: function(e){
            e.preventDefault();
        },
        handleInput: function(event){
            return dispatch({type: 'handle', event})
        }
    }
}

let mapStateToProps = function(state){
    return {
        employee : state.employeeStore.employee
    }
}

let EmployeeConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Employee);

export default EmployeeConnector;