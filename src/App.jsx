import { Route, Routes } from 'react-router-dom'
import './index.css'
import api from "./axiosConfig";
import AuthForm from "./components/AuthForm";
import AddTask from './components/AddTask';
import Sidebar from './components/Sidebar';
import AllTasks from './components/AllTasks';
import CompleteTask from './components/CompleteTask';
import InProgressTask from './components/InProgressTask';
import Dashboard from './components/Dashboard';
import PendingTask from './components/PendingTask';
import Deployed from './components/Deployed';
import Deferred from './components/Deferred';
import './App.css'
import React, { useState, useEffect } from "react";

const App = () => {

    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (token) {
            api
                .get("/tasks")
                .then((res) => setTasks(res.data))
                .catch(() => {
                    setToken("");
                    localStorage.removeItem("token");
                });
        }
    }, [token]);

    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
        setTasks([]);
    };

    if (!token) {
        return <AuthForm setToken={setToken} />;
    }

  return (

    <div className='flex h-full'>

      <Sidebar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/allTask" element={<AllTasks />} />
        <Route path="/completeTask" element={<CompleteTask />} />
        <Route path="/pendingTask" element={<PendingTask />} />
        <Route path="/deployedTask" element={<Deployed />} />
        <Route path="/deferredTask" element={<Deferred />} />
        <Route path="/inProgressTask" element={<InProgressTask />} />
        <Route path="/statsTask" element={<Dashboard />} />
      </Routes>
    </div>

  );
};

export default App;