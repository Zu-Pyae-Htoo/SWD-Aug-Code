import React, { useState } from "react";
import List from "./List";
import EmptyStage from "./EmptyStage";

const ListGroup = ({ task, deleteTask, doneTask }) => {
  return (
    <div>
      {task.length === 0 && <EmptyStage />}
      {task.map(({ id, job, isDone }) => (
        <List
          key={id}
          id={id}
          job={job}
          isDone={isDone}
          deleteTask={deleteTask}
          doneTask={doneTask}
        />
      ))}
    </div>
  );
};

export default ListGroup;
