import React from 'react'
import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("Prioridade:");

 

  const saveTask = (e) => {
    
    e.preventDefault();
    onSaveTask({ desc: desc, date: date });

    setDesc("");
    setDate("Prioridade: ");
    localStorage.setItem("tasks",(task))
  };
  

  return (
    <div className="card">
      <h3>Adicionar tarefa</h3>
      <form>
        <label htmlFor="desc">Descrição</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date"></label>
        

        <div>
          <button onClick={saveTask}>
            Salvar
          </button>
         
        </div>
        
      </form>
    </div>
  );
}

export default TaskEdit;
