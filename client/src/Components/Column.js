import React from "react";

const Column = ({ onDragOver, onDragLeave, onDrop, title, tasks }) => {
  return (
    <div
      className={title}
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
