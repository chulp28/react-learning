import styles from './Form.module.css';

import { useState } from 'react';

function Form({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <form className={styles.Form} onSubmit={onFormSubmit}>
      <h1 className={styles.title}>Todo app</h1>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={styles.button}>Add task</button>
    </form>
  );

  function onFormSubmit(e) {
    if (!inputValue.length) {
      e.preventDefault();
      return;
    }
    e.preventDefault();

    addTask(inputValue);
    setInputValue('');
  }
}

export default Form;
