import styles from './Todo.module.css';
import Form from './Form';
import Actions from './Actions';
import List from './List';
import { useState } from 'react';

function Todo({}) {
  const [tasks, setTasks] = useState({});

  return (
    <div className={styles.Todo}>
      <Form addTask={addTask} />
      <Actions resetTasks={() => setTasks({})} clearDone={clearDone} />
      <List tasks={tasks} removeTask={removeTask} toggleDone={toggleDone} />
    </div>
  );

  function addTask(text) {
    setTasks({ ...tasks, [Date.now()]: { text: text, done: false } });
  }
  function removeTask(id) {
    delete tasks[id];
    setTasks({ ...tasks });
  }
  function toggleDone(id) {
    tasks[id].done = !tasks[id].done;
    setTasks({ ...tasks });
  }

  function clearDone() {
    Object.keys(tasks).forEach((key) =>
      tasks[key].done ? delete tasks[key] : 0
    );
    setTasks({ ...tasks });
  }
}

export default Todo;
