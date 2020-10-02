import React from "react";
import '../App.css';

export default class Employee extends React.Component {
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
                               value={this.props.employee.identityNo}
                               onChange={this.props.handleInput}
                               className="form-control"
                               id="identityNo"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text"
                               name="fullname"
                               value={this.props.employee.fullname}
                               onChange={this.props.handleInput}
                               className="form-control"
                               id="fullname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="iban">Iban:</label>
                        <input type="text"
                               name="iban"
                               value={this.props.employee.iban}
                               onChange={this.props.handleInput}
                               className="form-control"
                               id="iban"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary:</label>
                        <input type="text"
                               name="salary"
                               value={this.props.employee.salary}
                               onChange={this.props.handleInput}
                               className="form-control"
                               id="salary"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="byear">Birth Year:</label>
                        <input type="text"
                               name="birthYear"
                               value={this.props.employee.birthYear}
                               onChange={this.props.handleInput}
                               className="form-control"
                               id="byear"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <select className="form-control"
                                name="department"
                                value={this.props.employee.department}
                                onChange={this.props.handleInput}
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
                        <img className="img-thumbnail"
                             style={{width: '128px', height: '128px'}}
                             src={this.props.employee.photo} alt=''></img>
                        <label className="btn btn-info btn-file">
                            <input type="file"
                                   onChange={this.props.handleFileInput}
                                   className='d-none' id="photo"/>
                            <span>Browse</span>
                        </label>
                        <p/>
                        <div className="drop-zone"
                             onDrop={this.props.handleImageDrop}
                             onDragOver={this.props.handleImageDragOver}
                             type="text" id="filedrag"></div>
                    </div>
                    <div className="form-check">
                        <div className="checkbox">
                            <input type="checkbox"
                                   className="form-check-input"
                                   checked={this.props.employee.fulltime}
                                   onChange={this.props.handleInput}
                                   name="fulltime"></input>
                            <label className="form-check-label">Fulltime?</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button onClick={() => this.props.findEmployee(this.props.employee.identityNo)}
                                className="btn btn-success">Find</button>
                        <button onClick={() => this.props.addEmployee(this.props.employee)}
                                className="btn btn-info">Add</button>
                        <button onClick={() => this.props.updateEmployee(this.props.employee)}
                                className="btn btn-warning">Update</button>
                    </div>
                </div>
            </div>
        );
    }
}

