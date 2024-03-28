import TaskCard from "./TaskCard";
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../store/taskSlice';
const InProgressTask = () => {
    const tasks = useSelector(selectAllTasks);
    const completedTasks = tasks.filter(task => task.status === 'In Progress');

    return (
        <div className="w-[70%] mx-auto">
            <div className="mt-10">
                <h1 className="text-3xl font-bold my-8 text-center">In Progress Tasks</h1>
            </div>
            <div className="flex flex-wrap gap-y-4 gap-x-14 overflow-y-scroll h-[80vh]">
                {completedTasks.map(task => (
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
        </div>
    );
};


export default InProgressTask;