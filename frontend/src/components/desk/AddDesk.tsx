import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import styles from '../../scss/desk.module.scss';
import PlusIcon from '../../svg/PlusIcon';
import { DeskForm } from './DeskForm';

Modal.setAppElement('#root');
interface AddDeskProps {
  onClose: () => void;
}
export const AddDesk: FC<AddDeskProps> = ({ onClose }) => {
  const [open, setOpen] = useState<boolean>(false);
  function closeDesk() {
    setOpen(() => {
      onClose();
      return false;
    });
  }
  function openDesk() {
    setOpen(true);
  }
  return (
    <>
      <div
        className={styles.add_button}
        onClick={() => {
          openDesk();
        }}
      >
        <PlusIcon />
      </div>

      <Modal
        isOpen={open}
        className={styles.modal}
        overlayClassName={styles.modal__overlay}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick={false}
        shouldFocusAfterRender
      >
        <div className={styles.modal__close} onClick={() => closeDesk()}>
          X
        </div>
        <h1>Create Desk</h1>
        <div className={styles.desk__form}>
          <DeskForm closeModal={closeDesk} />
        </div>
      </Modal>
    </>
  );
};
