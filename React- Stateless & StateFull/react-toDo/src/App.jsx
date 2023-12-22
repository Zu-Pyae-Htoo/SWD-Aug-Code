import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";
import AccordionGroup from "./components/AccordionGroup";

const App = () => {
  const taskList = [
    { id: 1, job: "Complete project", isDone: false },
    { id: 2, job: "Prepare presentation", isDone: false },
    { id: 3, job: "Attend meeting", isDone: false },
  ];
  const [task, setTask] = useState(taskList);
  const addTask = (newTasks) => {
    setTask([...task, newTasks]);
  };

  const deleteTask = (id) => {
    setTask(task.filter((el) => el.id != id));
  };

  const doneTask = (id) => {
    setTask(
      task.map((el) => (el.id == id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const updateTaskJob = (id, newJob) => {
    setTask(task.map((el) => (el.id == id ? { ...el, job: newJob } : el)));
  };

  const taskAllDone = () => {
    setTask(task.map(el => ({...el,isDone : true})))
  }

  return (
    <div className="w-[400px] mx-auto mt-20">
      <Heading />
      <CreateForm addTask={addTask} />
      <Status task={task} />
      <ListGroup
        updateTaskJob={updateTaskJob}
        doneTask={doneTask}
        deleteTask={deleteTask}
        task={task}
        taskAllDone={taskAllDone}
      />
      {/* <Counter /> */}
      {/* <InputText /> */}
      {/* <Checker /> */}
      {/* <AccordionGroup /> */}
    </div>
  );
};

export default App;
