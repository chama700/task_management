import { GrTask } from "react-icons/gr";
import { MdDashboard, MdOutlineTaskAlt, MdAddTask } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="bg-blue-500 h-[200vh] sm:h-screen w-[5rem] sm:w-[19rem] flex flex-col gap-4">
            <div className="flex items-center gap-2 justify-center h-16 text-white text-2xl font-bold mt-6">
                <GrTask />
                <span className='sm:block hidden'>
                    Task Manager
                </span>
            </div>
            <nav className="flex gap-10 justify-start">
                <ul className="py-6 flex flex-col justify-start">
                    <li className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdDashboard className="text-2xl" />
                        <span className='sm:block hidden'>
                            <Link to='/db'>
                            Dashboard
                            </Link>
                        </span>
                    </li>
                    <li className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdOutlineTaskAlt className="text-2xl" />
                        <span className='sm:block hidden'>
                            Completed Tasks
                        </span>
                    </li>
                    <li className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <GrInProgress className="text-2xl" />
                        <span className='sm:block hidden'>
                            In Progress Tasks
                        </span>
                    </li>
                    <li className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdAddTask className="text-2xl" />
                        <span className='sm:block hidden'>
                            <Link to='/addTask'>
                                Create Tasks
                            </Link>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Sidebar;