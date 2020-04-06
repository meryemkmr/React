import React from 'react';
import '../App.css';


class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            tasks:[],
            input:""
        }
        
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
        
    }

    addTaskItem = (params) => {
        let input = this.state.input
        let tasks = this.state.tasks
        tasks.push(input)

        this.setState({
            tasks:tasks,
            input:""
        },
        ()=>{
            // console.log(this.state.tasks)
        })
        
    }
    
    

    render() {
        let taskList = this.state.tasks.map((task,index)=>{
            return <li key ={index}>{task}</li>

        })
        return (
            <div className="">

            <div className="title">Input Items</div>
            <div>
                <input className="input" value={this.state.input}  type= "text" onChange={this.handleInput}></input>
                <button className="input" onClick ={this.addTaskItem}>ADD TASK</button>
            </div>
            <br />

            <ul>
                {taskList}
            </ul>
            </div>
        );
    }
}




export default TodoList
