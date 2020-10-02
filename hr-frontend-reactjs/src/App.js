import React from 'react';
import './App.css';
import 'toastr/build/toastr.css';
import EmployeeConnector from "./component/EmployeeConnector";
import EmployeeListConnector from "./component/EmployeeListConnector";
import {initializeToastr} from "./toastr-util";

export default class App extends React.Component {

    componentDidMount() {
        initializeToastr({
            timeOut: 3000,
            closeDuration: 500,
            closeEasing: 'swing',
            progressBar: true,
            preventDuplicates: true,
            closeButton: true,
            positionClass: 'toast-top-center'
        });
    }

    render() {
        return (
            <div>
                <p></p>
                <div className="container">
                    <EmployeeConnector/>
                    <p></p>
                    <EmployeeListConnector/>
                </div>
            </div>
        );
    }
};
