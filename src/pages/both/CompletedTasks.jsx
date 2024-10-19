import React from "react";
import Task from "../../components/cards/Task";
import tasks from "../../datas/completedTasks.js";

const CompletedTasks = () => {
    return(
        <div className="h-screen overflow-y-auto overflow-x-hidden flex flex-col gap-5">
            <div className="mt-2 px-4 py-3">
                <p className="font-semibold -mb-1">Tasks</p>
                <p className="text-[#34C759] font-semibold text-sm">Completed</p>
            </div>
            <div className="w-full px-4 py-3 bg-[#FAFAFA] border-2 border-[#C5C5C5] rounded-3xl ml-2">
                <h3 className="text-[#7E7E7E] -mb-1">Assigned tasks</h3>
                <p className="font-medium ">Your Machine Management Area </p>
            </div>
        <div className="grid gap-x-8 gap-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 pb-20">
             {tasks && tasks.map((task)=> (
                    <div key={task.id}>
                        <Task task={task}/>
                    </div>
                    )
                )}
        </div>
        </div>
    );
}

export default CompletedTasks;