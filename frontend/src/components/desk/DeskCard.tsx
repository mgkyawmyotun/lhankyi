import React, { FC, useState } from 'react';
import styles from '../../scss/desk.module.scss';
import DotIcon from '../../svg/DotIcon';
interface DeskCardProps {
  children: string;
}
export const DeskCard: FC<DeskCardProps> = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  return (
    <div className={styles.card}>
      {children}
      <div className={styles.dropdown}>
        <DotIcon
          onClick={(e) => {
            setShowDropDown((value) => !value);
          }}
        ></DotIcon>
        <div
          className={[
            styles.dropdown__content,
            showDropDown ? styles.dropdown__content__show : '',
          ].join(' ')}
        >
          <h3 onClick={(e) => {}}>Edit</h3>
          <h3 onClick={(e) => {}}>Delete</h3>
        </div>
      </div>
    </div>
  );
};
