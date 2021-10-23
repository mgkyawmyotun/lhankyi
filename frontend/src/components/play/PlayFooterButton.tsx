import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/play.module.scss';

interface PlayFooterButtonProps {}
export const PlayFooterButton: FC<PlayFooterButtonProps> = () => {
  return <div className={styles.play__buttons}></div>;
};
