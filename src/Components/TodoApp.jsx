import React, { useCallback, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./TodoApp.css";
import Title from "./Title";
import TodoAppForm from "./TodoAppForm";

function TodoApp() {
  const [Task, setTask] = useState("");
  const [Priority, setPriority] = useState(0);
  const [TaskList, setTaskList] = useState([]);
  const refId = useRef(0);

  const handleTask = useCallback(
    (event) => {
      setTask(event.target.value);
    },
    [setTask]
  );

  const handlePriority = useCallback(
    (event) => {
      setPriority(event.target.value);
    },
    [setPriority]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (Task === "") alert("Task is Required");
      else if (Priority === 0) alert("Please Enter Priority");
      else {
        if (refId.current < 9) {
          refId.current = refId.current + 1;
          const item = {
            id: refId.current,
            task: Task,
            priority: Priority,
          };
          setTaskList([...TaskList, item]);
        } else alert("You Cannot add more than 9 task");
      }
    },
    [Task, Priority, TaskList]
  );

  const handleDelete = (id) => {
    const array = TaskList.filter((task) => task.id !== id);
    setTaskList(array);
    refId.current = refId.current - 1;
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Title />
        </Grid>
        <Grid item xs={12} md={7}>
          <TodoAppForm
            task={Task}
            handleTask={handleTask}
            handleSubmit={handleSubmit}
            priority={Priority}
            handlePriority={handlePriority}
            tasklist={TaskList}
            handleDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoApp;
