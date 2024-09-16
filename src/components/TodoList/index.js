import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState([]); 

  const addTask = () => {
    if (task.trim()) { 
      setTasks([...tasks, task]); 
      setTask(''); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove 
    setTasks(newTasks); // Atualiza 
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
