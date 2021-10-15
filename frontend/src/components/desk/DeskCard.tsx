import React, { FC, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../scss/desk.module.scss';
import { DeskDropDown } from './DeskDropDown';
interface DeskCardProps {
  children: string;
}
export const DeskCard: FC<DeskCardProps> = ({ children }) => {
  const { push } = useHistory();
  const div_ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={div_ref}
      className={styles.card}
      onClick={(e) => {
        if (div_ref) {
          // check event actually come from itself not from child
          if (e.target === div_ref.current) {
            push('/cards/' + children);
          }
        }
      }}
    >
      {children}
      <DeskDropDown desk_name={children} />
    </div>
  );
};
