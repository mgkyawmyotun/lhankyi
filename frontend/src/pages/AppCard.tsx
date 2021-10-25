import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/card';
import { NavBar } from '../components/NavBar';
import { CardTextData, selectCard } from '../redux/slices/swithTextData';
import { RootState } from '../redux/store';
import styles from '../scss/card.module.scss';
export const AppCard: FC = () => {
  // eslint-disable-next-line
  const text = useSelector<RootState, CardTextData>(selectCard);

  return (
    <>
      <div className={styles.app}>
        <div className={styles.app_container}>
          <NavBar />
          <h1>{text.header}</h1>
          <Card />
        </div>
      </div>
    </>
  );
};
