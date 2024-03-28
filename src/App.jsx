

import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import './index.css'
import AddTask from './components/AddTask';
import Sidebar from './components/Sidebar';
import AllTasks from './components/AllTasks';

const App = () => {

  return (

    <div className='flex h-full'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/allTask" element={<AllTasks />} />
      </Routes>
    </div>

  );
};

export default App;