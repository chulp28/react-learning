import styles from './List.module.css';
import { useEffect, useState } from 'react';
import Task from './Task';

function List({ tasks, removeTask, toggleDone }) {
  return (
    <div className={styles.List}>
      {!Object.keys(tasks).length && <p>No tasks...</p>}

      {Object.keys(tasks).map((key) => (
        <Task
          key={key}
          id={key}
          text={tasks[key].text}
          done={tasks[key].done}
          removeTask={removeTask}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
}

export default List;
