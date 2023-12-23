import React, { useState } from "react";
import List from "./List";
import EmptyStage from "./EmptyStage";

const ListGroup = ({ task, deleteTask, doneTask, updateTaskJob,taskAllDone}) => {
  return (
    <div>
      {task.length === 0 && <EmptyStage />}
      {task.map(({ id, job, isDone, taskAllDone }) => (
        <List
          key={id}
          id={id}
          job={job}
          isDone={isDone}
          deleteTask={deleteTask}
          doneTask={doneTask}
          updateTaskJob={updateTaskJob}
        />
      ))}
      <div className=" flex justify-end">
        <button
          className=" bg-gray-300 px-3 py-2 rounded-lg"
          onClick={taskAllDone}
        >
          All Done
        </button>
      </div>
    </div>
  );
};

export default ListGroup;
