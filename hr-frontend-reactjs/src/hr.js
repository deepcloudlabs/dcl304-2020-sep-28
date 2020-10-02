import React from "react";
import Employee from "./employee";

export default class Hr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: new Employee('N/A', 'N/A', 'TR'),
            employees: []
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Employee Panel</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="identityNo">Identity No:</label>
                        <input type="text"
                               name="identityNo"
                               value={this.state.employee.identityNo}
                               onChange={this.props.handleEmployeeInput}
                               className="form-control"
                               id="identityNo"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text"
                               name="fullname"
                               value={this.state.employee.fullname}
                               onChange={this.props.handleEmployeeInput}
                               className="form-control"
                               id="fullname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="iban">Iban:</label>
                        <input type="text"
                               name="iban"
                               value={this.state.employee.iban}
                               onChange={this.props.handleEmployeeInput}
                               className="form-control"
                               id="iban"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary:</label>
                        <input type="text"
                               className="form-control"
                               id="salary"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="byear">Birth Year:</label>
                        <input type="text"
                               className="form-control"
                               id="byear"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <select className="form-control"
                                name="department"
                                value={this.props.employee.department}
                                onChange={this.handleEmployeeInput}
                                id="department">
                            <option>IT</option>
                            <option>Sales</option>
                            <option>Finance</option>
                            <option>HR</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Photo:</label>
                        <input type="file"
                               className="form-control"
                               id="photo"/>
                        <img></img>
                    </div>
                    <div className="form-group">
                        <label>Fulltime?</label>
                        <input type="checkbox"
                               className="form-control">
                        </input>
                    </div>
                </div>
            </div>
        );
    }

    handleEmployeeInput = (event) => {
        let target = event.target;
        let name = target.name;
        let value= target.value;
        let emp = this.state.employee;
        emp[name] = value;
        console.log(emp)
        this.setState({
            employee : emp
        })
    }
}