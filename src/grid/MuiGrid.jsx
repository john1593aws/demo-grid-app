import { Box, makeStyles } from '@material-ui/core';
import styles from './HtmlGrid/style.module.css';

import React from 'react';

const useStyles = makeStyles({
  header: {
    background: '#9933cc',
    color: 'white',
    padding: '15px',
  },
  aside: {
    background: '#33b5e5',
    padding: '15px',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '14px',
  },
  footer: {
    background: '#0099cc',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '12px',
    padding: '15px',
  },
});

const MuiGrid = () => {
  const classes = useStyles();
  return (
    <Box component="body" mt={5}>
      <div className={styles.header}>
        <h1>Chania</h1>
      </div>

      <div className={styles.row}>
        <div
          className={`${styles['col-3']} ${styles['col-s-3']} ${styles['menu']}`}
        >
          <ul>
            <li>The Flight</li>
            <li>The City</li>
            <li>The Island</li>
            <li>The Food</li>
          </ul>
        </div>

        <div className={`${styles['col-6']} ${styles['col-s-9']}`}>
          <h1>The City</h1>
          <p>
            Chania is the capital of the Chania region on the island of Crete.
            The city can be divided in two parts, the old town and the modern
            city.
          </p>
        </div>

        <div className={`${styles['col-3']} ${styles['col-s-12']}`}>
          <div className={styles.aside}>
            <h2>What?</h2>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          Resize the browser window to see how the content respond to the
          resizing.
        </p>
      </div>
    </Box>
  );
};

export default MuiGrid;
