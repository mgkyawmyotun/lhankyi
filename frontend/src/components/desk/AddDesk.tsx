import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import styles from '../../scss/desk.module.scss';
import PlusIcon from '../../svg/PlusIcon';
import { MyModal } from '../Modal';
import { DeskForm } from './DeskForm';

Modal.setAppElement('#root');
interface AddDeskProps {
  onClose: () => void;
}
export const AddDesk: FC<AddDeskProps> = ({ onClose }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className={styles.add_button}
        onClick={() => {
          setOpen(true);
        }}
      >
        <PlusIcon />
      </div>
      <MyModal open={open} setOpen={setOpen}>
        <DeskForm
          closeModal={() => {
            setOpen(false);
            onClose();
          }}
        />
      </MyModal>
    </>
  );
};
