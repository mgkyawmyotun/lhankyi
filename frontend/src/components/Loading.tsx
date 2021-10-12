import type { FC } from 'react';
import React from 'react';
import styles from '../scss/loader.module.scss';
export const Loading: FC = () => {
  return (
    <>
      <div className={styles.lds_spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
