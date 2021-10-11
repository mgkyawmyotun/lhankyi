import type { FC } from 'react';
import React from 'react';
import styles from '../scss/navbar.module.scss';
import Logo from '../svg/Logo';
export const NavBar: FC = () => {
  return (
    <>
      <div className={styles.nav}>
        <Logo />
        <h3>English</h3>
      </div>
    </>
  );
};
