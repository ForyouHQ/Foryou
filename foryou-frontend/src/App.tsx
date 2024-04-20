import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {LOGIN_PAGE, REGISTER_PAGE, TASK_UPLOAD_PAGE} from "./constants/routes";
import {Register} from "./pages/register/register";
import {Login} from "./pages/login/login";
import {TaskUpload} from "./pages/task-upload/task-upload";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={REGISTER_PAGE} element={<Register/>}/>
                <Route path={LOGIN_PAGE} element={<Login/>}/>
                <Route path={TASK_UPLOAD_PAGE} element={<TaskUpload/>}/>
            </Routes>
        </Router>
    );
}

export default App;
