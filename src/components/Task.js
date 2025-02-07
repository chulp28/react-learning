import delSvg from '../images/delete.svg';
import doneSvg from '../images/done.svg';
import styles from './Task.module.css';

function Task({ id, text, done, removeTask, toggleDone }) {
  return (
    <div
      className={`${styles.Task} ${done ? styles.done : styles.inProgress}`}
      onDoubleClick={() => removeTask(id)}
    >
      <h3>{text}</h3>
      <div>
        <button className={styles.button} onClick={() => toggleDone(id)}>
          <img src={doneSvg} alt="mark done" />
        </button>
        <button className={styles.button} onClick={() => removeTask(id)}>
          <img src={delSvg} alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default Task;
