import React from "react";
import { ProgressBar } from "../bars/ProgressBar";

const Task = ({ task }) => {
  return (
    <div className="flex h-full flex-col gap-4 justify-around border-[#D5D5D5] border-2 bg-white rounded-3xl px-6 py-5">
      <h1 className="font-bold text-xl">{task.title}</h1>
      {task.status === "completed" ? (
        <ProgressBar width={100} color={"#67FF01"} />
      ) : task.status === "pending" ? (
        <ProgressBar width={50} color={"#FFB601"} />
      ) : (
        <ProgressBar width={20} color={"#FF3B30"} />
      )}

      <div className="">
        <p className="text-lg text-[#D7D7D7]">
          Start date
        </p>
        <p className="text-base font-semibold">{task.startDate}</p>
      </div>

      <div className="w-full h-px bg-[#D8D8D8]"></div>

      <div>
        <p className="font-bold w-full text-base ">Task description</p>
        <p className="text-[#35647F] text-base">{task.description}</p>
      </div>

      {task.status === "completed" ? (
         <button className="py-2 bg-[#D2FFA5] w-full font-bold rounded-3xl text-[#107329] hover:shadow-lg text-base">
          completed
        </button>
      ) : task.status === "pending" ? (
        <button className="py-2 bg-[#6DDC48] w-full rounded-3xl text-[#EBEBEB] hover:shadow-lg text-base">
          Mark as completed
        </button>
      ) : (
        <button className="py-2 bg-[#6DDC48] w-full font-bold rounded-3xl text-[#EBEBEB] hover:shadow-lg text-base">
        Start
      </button>
      )}
    </div>
  );
};

export default Task;
