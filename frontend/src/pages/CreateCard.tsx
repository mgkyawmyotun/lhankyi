import type { FC } from 'react';
import { MyEditor } from '../components/editor/MyEditor';
import { MainCard } from '../components/MainCard';
import { NavBar } from '../components/NavBar';
import styles from '../scss/create.module.scss';

export const CreateCard: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        <div className={styles.main__content}>
          <MainCard />
          <MyEditor />
        </div>
      </div>
    </div>
  );
};
