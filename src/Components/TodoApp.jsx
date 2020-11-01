import React, { useCallback, useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./TodoApp.css";
import Title from "./Title";
import TodoAppForm from "./TodoAppForm";

function TodoApp() {
  const [Task, setTask] = useState("");
  const [Priority, setPriority] = useState(0);
  //const [TaskList, setTaskList] = useState([]);

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
        console.log(Task);
        console.log(Priority);
      }
    },
    [Task, Priority]
  );
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
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoApp;
