import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {combineReducers, createStore} from "redux";
import EmployeeReducer from "./reducer/EmployeeReducer";
import EmployeeListReducer from "./reducer/EmployeeListReducer";
import App from "./App";
import {Provider} from "react-redux";

let reducers = combineReducers({employeeStore: EmployeeReducer, employeesStore: EmployeeListReducer});

let store = createStore(reducers);
console.log(store.getState())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
