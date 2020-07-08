import React from 'react';
import styles from './List.scss';

class List extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
      </main>
    )
  }
}

export default List;