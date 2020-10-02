import React from "react";

export default class EmployeeList extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Employees</h4>
                    <button onClick={this.props.findEmployees}
                            className="btn btn-success">Find All</button>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Photo</th>
                                <th>Identity No</th>
                                <th>Full Name</th>
                                <th>Salary</th>
                                <th>Iban</th>
                                <th>Department</th>
                                <th>Birth Year</th>
                                <th>Full time?</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.employees.map( (emp,i) => <tr key={emp.identityNo}>
                                <td>{i+1}</td>
                                <td><img className="img-thumbnail"
                                         style={{width: '64px', height: '64px'}}
                                         src={emp.photo} alt="n/a"></img></td>
                                <td>{emp.identityNo}</td>
                                <td>{emp.fullname}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.iban}</td>
                                <td>{emp.department}</td>
                                <td>{emp.birthYear}</td>
                                <td>{
                                    emp.fulltime ? 'true' : 'false'
                                }</td>
                                <td><button  onClick={() => this.props.removeEmployee(emp)}
                                             className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
