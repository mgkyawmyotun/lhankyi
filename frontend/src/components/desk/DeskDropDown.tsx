import React, { FC, useState } from 'react';
import styles from '../../scss/desk.module.scss';
import DotIcon from '../../svg/DotIcon';
import { DeskDelete } from './DeskDelete';
interface DeskDropDownProps {
  desk_name: string;
}
export const DeskDropDown: FC<DeskDropDownProps> = ({ desk_name }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  return (
    <>
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
          <DeskDelete desk_name={desk_name} />
        </div>
      </div>
    </>
  );
};
