import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import styles from '../../scss/card.module.scss';
import PlusIcon from '../../svg/PlusIcon';
import { MyModal } from '../Modal';
import { CardForm } from './CardFrom';

Modal.setAppElement('#root');
interface AddCardProps {
  onClose: () => void;
  desk_name: string;
}
export const AddCard: FC<AddCardProps> = ({ onClose, desk_name }) => {
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
        <CardForm
          closeModal={() => {
            setOpen(false);
            onClose();
          }}
          desk_name={desk_name}
        />
      </MyModal>
    </>
  );
};
