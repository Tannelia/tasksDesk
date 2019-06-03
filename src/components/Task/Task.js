import React, { Component } from 'react';
import { connect } from "react-redux";
import dispatch from "../../store/dispatch.js";

import './Task.css';

class Task extends Component {

    changeColumn(nameAnother) {
        let allData = this.props.allData.map((item) => {
            if (item.name === this.props.name) {
                item.tasks = item.tasks.filter(task => task.idTask !== this.props.dataTask.idTask);

            }
            if (item.name === nameAnother) {
                item.tasks.push(this.props.dataTask);
            }

            return item
        });
        this.props.changeAllData(allData);
    }

    deleteTask() {
        let allData = this.props.allData.map((item) => {
            if (item.name === this.props.name) {
                item.tasks = item.tasks.filter(task => task.idTask !== this.props.dataTask.idTask);

            }

            return item
        });
        this.props.changeAllData(allData);
    }
    changeTaskName(option, value) {
        let allData = this.props.allData.map((item) => {
            item.tasks.map(task => {
                if (task.idTask === this.props.dataTask.idTask) {
                    task[option] = value
                }
                return task
            })
            return item
        });
        this.props.changeAllData(allData);
    }
    render() {
        return (
            <div className="task">
                <div className="task-name" suppressContentEditableWarning={true} contentEditable="true" data-text="Название задачи"
                    onBlur={(event) => {
                        this.changeTaskName('nameTask', event.target.textContent);

                    }}>{this.props.dataTask.nameTask}</div>
                <div className="task-description" suppressContentEditableWarning={true} contentEditable="true" data-text="Описание задачи"
                    onBlur={(event) => {
                        this.changeTaskName('descrTask', event.target.textContent);

                    }}
                >{this.props.dataTask.descrTask}</div>
                <div className="task-options">
                    <span className="task-delete" onClick={() => { this.deleteTask() }} >Удалить</span>
                    <span className="task-move">
                        <span>Переместить ↓</span>
                        <ul className="task-move-drop">
                            {this.props.namesAnothersColumn.map(nameAnother => <li className="" key={nameAnother} onClick={() => { this.changeColumn(nameAnother) }} >{nameAnother}</li>)}

                        </ul>
                    </span>
                </div>
            </div>
        );
    }
}

export default connect(
    dispatch.mapStateToProps,
    dispatch.mapDispatchToProps
)(Task);
