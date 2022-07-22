import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <a href="https://github.com/KaskMIL/" target="blank">
        Tom Milanesi,
      </a>
      <a href="https://github.com/Brenda309" target="blank">
        Brenda Wihogora,
      </a>
      <a href="https://github.com/Olamarx" target="blank">
        Olaoluwa Owoeye
      </a>
      &copy; All Rights Reserved
    </footer>
  );
}
