import React from 'react'

function Task({ task, onTglStatus }) {
    return (
      <div  key={task.id}>
        <div >
          <div>
            <h4>{task.desc}</h4>
            <div>
              {task.date}
            </div>
          </div>
  
          <div>
          <button
             onClick={() => onTglStatus(task)}>
            {task.complete && ""}
            {!task.complete && "Alta"}
            </button>

            <button
             onClick={() => onTglStatus(task)}>
            {task.complete && "Baixa"}
            {!task.complete && ""}
            </button>
            
          </div>
          <div>
            <p>{task.remarks}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Task;
  