function Task({ task, onTglStatus }) {
    return (
      <div className="card text-left" key={task.id}>
        <div className="row">
          <div className="col-10">
            <h4>{task.desc}</h4>
            <div className="task-meta">
              {task.date}
            </div>
          </div>
  
          <div className="col-2 is-center">
          <button className="button icon-only clear"
             onClick={() => onTglStatus(task)}>
            {task.complete && "✅"}
            {!task.complete && "⬜"}
            </button>
          </div>
          <div className="col-12">
            <p>{task.remarks}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Task;
  