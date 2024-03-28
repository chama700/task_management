import { useState } from 'react';
import TaskCard from "./TaskCard";
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../store/taskSlice';
import { Link } from 'react-router-dom';

const AllTasks = () => {
    const tasks = useSelector(selectAllTasks);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [statusFilter, setStatusFilter] = useState('All');
    const [priorityFilter, setPriorityFilter] = useState('All');

    const filteredTasks = tasks.filter(task => {
        const taskDate = new Date(task.startDate);
        const isDateInRange = (!startDate || taskDate >= startDate) && (!endDate || taskDate <= endDate);
        const isStatusMatch = statusFilter === 'All' || task.status === statusFilter;
        const isPriorityMatch = priorityFilter === 'All' || task.priority === priorityFilter;
        return isDateInRange && isStatusMatch && isPriorityMatch;
    });

    return (

        <div className="w-[70%] mx-auto">
            <div className="mt-10">
                <h1 className="text-3xl font-bold my-8 text-center">Task Board</h1>
                <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <div className='flex flex-col sm:flex-row gap-2 items-center'>
                            <p className='font-bold text-xl text-blue-400'>Filter </p>
                            <div className='flex justify-center gap-[10px] sm:gap-2 flex-row items-center'>
                                <input
                                    className='bg-gray-200 p-2 rounded-xl'
                                    type="date"
                                    value={startDate ? startDate.toISOString().split('T')[0] : ''}
                                    onChange={(e) => setStartDate(new Date(e.target.value))}
                                />
                                <input
                                    className='bg-gray-200 p-2 rounded-xl'
                                    type="date"
                                    value={endDate ? endDate.toISOString().split('T')[0] : ''}
                                    onChange={(e) => setEndDate(new Date(e.target.value))}

                                />
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-2 flex-col sm:flex-row items-center'>
                        <p className='font-bold text-xl text-blue-400'>Sort </p>
                        <div className='flex justify-center gap-[10px] sm:gap-3 flex-row items-center'>

                            <select
                                className='bg-gray-200 p-2 rounded-xl'
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="All">All Status</option>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Deployed">Deployed</option>
                                <option value="Deferred">Deferred</option>
                            </select>
                            <select
                                className='bg-gray-200 p-2 rounded-xl'
                                value={priorityFilter}
                                onChange={(e) => setPriorityFilter(e.target.value)}
                            >
                                <option value="All">All Priority</option>
                                <option value="P0">P0</option>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {filteredTasks.length > 0 ? (
                <div className="flex flex-wrap gap-y-4 gap-x-14  overflow-y-scroll h-[80vh]">
                    {filteredTasks.map(task => (
                        <TaskCard
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            startDate={task.startDate}
                            endDate={task.endDate}
                            status={task.status}
                            assignee={task.assignee}
                            priority={task.priority}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-[30vh]">
                    <p>No tasks found. <Link to="/addTask" className="text-blue-500">Add a new task</Link></p>
                </div>
            )}
        </div>
    );
};

export default AllTasks;
