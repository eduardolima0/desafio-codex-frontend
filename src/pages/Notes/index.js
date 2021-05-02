import "./styles.css";
import React, {useState } from "react";

import Tasks from "../../components/Tasks/tasks";
import TaskEdit from "../../components/TaskEdit";

function Notes() {
  const [tasks, setTasks] = useState([
    
  ]);

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };

  return (
    <div className="App">
       <div className="topnav">
      <a className="inicial" href="/home">Home</a>
      <a className="direcionar" href="/auth/login">Logout</a>
      <h4 className="usuario">Bem vindo</h4> 
      </div>
    
      <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}>
            {!showTaskEdit && "Adicionar"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Tasks tasks={tasks} onTglStatus={onTglStatus} ></Tasks>
        
      </div>
      
    </div>
  );
}

export default Notes;