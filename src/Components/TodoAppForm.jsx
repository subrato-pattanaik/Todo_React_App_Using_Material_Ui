import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./TodoApp.css";
import TaskList from "./TaskList";

function TodoAppForm({
  task,
  priority,
  handleTask,
  handlePriority,
  handleSubmit,
  tasklist,
  handleDelete,
}) {
  return (
    <div className="content">
      <Paper elevation={3} className="content-paper">
        <form
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          className="form-container"
        >
          <TextField
            label="Enter your task"
            variant="outlined"
            size="small"
            value={task}
            required
            style={{ width: "35ch" }}
            onChange={handleTask}
          />

          <FormControl variant="outlined" size="small">
            <InputLabel id="demo-simple-select-outlined-label">
              Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Select"
              required
              style={{ width: "10ch" }}
              value={priority}
              onChange={handlePriority}
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            className="newBtn"
            variant="contained"
            color="primary"
          >
            <AddIcon />
          </Button>
        </form>

        <TaskList tasklist={tasklist} handleDelete={handleDelete} />
      </Paper>
    </div>
  );
}

export default TodoAppForm;
