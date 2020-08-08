import React from "react";
import "./DragAndDrop.css";

const Column = ({ onDragOver, onDragLeave, onDrop, title, tasks }) => {
  return (
    <div
      className="tasks-column"
      onDragOver={(e) => onDragOver(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDrop={(e) => onDrop(e, title)}
    >
      <span className="task-header">{title}</span>
      {tasks}
    </div>
  );
};
export default Column;
