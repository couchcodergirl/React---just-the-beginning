import React from 'react';
import styles from './Column.scss';

class Column extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
    <i className={styles.icon}>{this.props.icon}</i>
      </section>
    );
  }
}

export default Column;