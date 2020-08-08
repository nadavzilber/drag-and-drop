import React from "react";

const style = {
  footer: {
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    height: "40px",
    width: "80px",
    backgroundColor: "grey",
    color: "white",
  },
};

const ExpandedTask = ({ task }) => {
  console.log("task??", task);
  return (
    <div className="expanded-task-container">
      <div className="expanded-task-header">{task.name}</div>
      <div className="expanded-task-body">
        <div>{task.category}</div>
      </div>
      <div style={style.footer} className="expanded-task-footer">
        <button style={style.button}>Button 1</button>
        <button style={style.button}>Button 2</button>
      </div>
    </div>
  );
};

export default ExpandedTask;
