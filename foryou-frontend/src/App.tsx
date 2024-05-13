import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {DASHBOARD_PAGE, LOGIN_PAGE, REGISTER_PAGE, TASK_UPLOAD_PAGE, SPECIFIC_TASK} from "./constants/routes";
import {Register} from "./pages/register/register";
import {Login} from "./pages/login/login";
import {TaskUpload} from "./pages/task-upload/task-upload";
import {Dashboard} from "./pages/dashboard/dashboard";
import {SpecificTask} from "./pages/specific-task/specific-task";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={REGISTER_PAGE} element={<Register/>}/>
                <Route path={LOGIN_PAGE} element={<Login/>}/>
                <Route path={TASK_UPLOAD_PAGE} element={<TaskUpload/>}/>
                <Route path={`${SPECIFIC_TASK}/:taskId`} element={<SpecificTask/>}/>
                <Route path={`${DASHBOARD_PAGE}/page/:pageNumber`} element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
