import React, { useState } from "react";
import Modal from "./Modal";
import ExpandedTask from "./ExpandedTask";
const Task = ({ task, onDragStart }) => {
  const [show, showModal] = useState(false);

  return (
    <div>
      <div
        key={task.name}
        onDragStart={(e) => onDragStart(e, task.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: task.bgcolor }}
        onClick={() => showModal(true)}
      >
        {task.name}
      </div>
      <Modal show={show} handleClose={() => showModal(false)}>
        <ExpandedTask task={task} />
      </Modal>
    </div>
  );
};
export default Task;
