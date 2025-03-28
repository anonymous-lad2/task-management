import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TaskForm = () => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    console.log("task added")
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddTask}>
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;
