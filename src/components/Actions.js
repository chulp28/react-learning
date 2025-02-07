import delSvg from '../images/delete.svg';
import resetSvg from '../images/reset.svg';
import styles from './Actions.module.css';

function Actions({ resetTasks, clearDone }) {
  return (
    <div className={styles.Actions}>
      <button className={styles.button} onClick={resetTasks}>
        <img src={resetSvg} alt="reset" />
      </button>
      <button className={styles.button} onClick={clearDone}>
        <img src={delSvg} alt="delete" />
      </button>
    </div>
  );
}

export default Actions;
