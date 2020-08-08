import React from "react";

const Task = ({ task, onDragStart }) => {

  return (
    <div>
      <div
        key={task.name}
        onDragStart={(e) => onDragStart(e, task.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: task.bgcolor }}
      >
        {task.name}
      </div>
    </div>
  );
};
export default Task;
