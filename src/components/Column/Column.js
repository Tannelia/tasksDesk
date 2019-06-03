import React, { Component } from 'react';
import { connect } from "react-redux";
import dispatch from "../../store/dispatch.js";
import Task from "../Task/Task";

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortTasks: false
        }
    }
    addTask() {

        let newTask = {
            idTask: this.props.lastTaskId + 1,
            nameTask: "",
            descrTask: ""
        }
        this.props.dataColumn.tasks.push(newTask);
        this.props.changeLastTaskId(this.props.lastTaskId + 1);
        
    }
    sortTasks() {
        let newSortTasks = !this.state.sortTasks
        this.setState({
            sortTasks : newSortTasks
        })

        if (newSortTasks) {
            this.props.dataColumn.tasks.sort((cur, next) => {
                if (cur.nameTask > next.nameTask) return 1;
                else if (cur.nameTask < next.nameTask) return -1;
                else return 0;
            })
            
        } else {
            this.props.dataColumn.tasks.sort((cur, next) => {
                if (cur.nameTask > next.nameTask) return -1;
                else if (cur.nameTask < next.nameTask) return 1;
                else return 0;
            })
        }
    }
    render() {
        return (
            <div className="column">
                <div className="name">
                    <span className="name-common">{this.props.dataColumn.name}</span>
                    <span className="name-sort" onClick={() => { this.sortTasks() }}>sort (A-я)</span>
                </div>
                <div className="add-task">
                    <span className="add-task-text" onClick={() => { this.addTask() }}>Добавить задачу</span>
                </div>
                <div className="board">
                    {this.props.dataColumn.tasks.map(data => <Task namesAnothersColumn={this.props.namesColumn.filter(nameColumn => nameColumn !== this.props.dataColumn.name)} name={this.props.dataColumn.name} dataTask={data} key={data.idTask} />)}
                </div>
            </div>
        );
    }
}

export default connect(
    dispatch.mapStateToProps,
    dispatch.mapDispatchToProps
)(Column);
