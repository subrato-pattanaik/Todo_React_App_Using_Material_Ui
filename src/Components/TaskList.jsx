import { Button, Typography } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function TaskList({ tasklist, handleDelete }) {
  return (
    <div className="tasklist_content">
      {tasklist.length !== 0 ? (
        <>
          {tasklist
            .sort((a, b) =>
              a.priority < b.priority ? -1 : a.priority > b.priority ? 1 : 0
            )
            .map((task, index) => (
              <div key={index}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  style={{ marginRight: "30px" }}
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </Button>
                <span
                  className="item_span"
                  style={{
                    backgroundColor: `${
                      task.priority === 1
                        ? "red"
                        : task.priority === 2
                        ? "blue"
                        : "green"
                    }`,
                  }}
                >
                  {task.task}
                </span>
              </div>
            ))}
        </>
      ) : (
        <Typography
          style={{ color: "#27ab9e", marginTop: "100px" }}
          variant="h3"
          className="no-task"
        >
          No task for you today
        </Typography>
      )}
    </div>
  );
}

export default TaskList;
