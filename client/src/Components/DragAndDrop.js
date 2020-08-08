import React, { Component } from "react";
import Task from "./Task";
import Column from "./Column";
import "./DragAndDrop.css";
import config from "../config";

export default class Draggable extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.setState({ tasks: config.demoTasks });
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
    ev.currentTarget.style.border = "dashed";
  };

  onDragLeave = (ev) => {
    ev.preventDefault();
    ev.currentTarget.style.border = "none";
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
    ev.currentTarget.style.border = "none";
  };

  render() {
    let tasks = {};
    config.columns.forEach((column) => (tasks[column] = []));
    this.state.tasks.forEach((t) => {
      tasks[t.category].push(<Task task={t} onDragStart={this.onDragStart} />);
    });

    return (
      <div className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div className="columns-container">
          {config.columns &&
            config.columns.map((col, index) => (
              <Column
                key={index}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                title={col}
                tasks={tasks[col]}
              />
            ))}
        </div>
      </div>
    );
  }
}
