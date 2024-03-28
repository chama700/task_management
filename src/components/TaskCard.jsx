
const getDate = (dateString) => {
    const dateObject = new Date(dateString);
    const currentDate = dateObject.toLocaleDateString();
    return currentDate;
}


const TaskCard = ({ title, description, startDate, endDate, status, assignee, priority }) => {
    let startDatee = getDate(startDate);
    let endDatee = getDate(endDate);
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-green-200 text-green-800';
            case 'in progress':
                return 'bg-blue-200 text-blue-800';
            case 'pending':
                return 'bg-yellow-200 text-yellow-800';
            case 'deferred':
                return 'bg-gray-200 text-gray-800';
            case 'deployed':
                return 'bg-purple-200 text-purple-800';
            default:
                return 'bg-white';
        }
    };

    return (


        <div className={` flex flex-col rounded-xl justify-center gap-4 bg-white w-72 max-h-[350px] shadow-xl `}>
            <div className={`relative bg-clip-border mt-6 ml-4 mr-4 rounded-lg ${getStatusColor(status)} shadow-md h-45`}>
                <h1 className="font-bold text-center text-xl py-7">{`${title}`}</h1>
            </div>
            <div className="border-0 p-2 text-center">
                <p className="font-semibold ">{`${description}`}</p>
                <div className="flex justify-between text-sm font-semibold py-2 px-4">
                    <div className="flex justify-center flex-col">
                        <p>Start Date</p>
                        <p className="font-light">{`${startDatee}`}</p>
                    </div>
                    <div className="flex justify-center flex-col">
                        <p>End Date</p>
                        <p className="font-light">{`${endDatee}`}</p>
                    </div>
                </div>
            </div>
            <div className="footer p-3 flex items-center justify-between">
                <p className="font-light text-xs block text-black">{`Puskar Roy`}</p>
                <button type="button" className={`select-none focus:outline-none shadow-md text-white uppercase font-bold text-xs py-2 px-6 ${getStatusColor(status)} rounded-lg`}>{`${status}`}</button>
            </div>
        </div>

    );
};

export default TaskCard;
