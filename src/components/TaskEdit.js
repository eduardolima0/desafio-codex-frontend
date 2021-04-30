import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date });

    setDesc("");
    setDate("");
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

        <label htmlFor="date">Data</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
