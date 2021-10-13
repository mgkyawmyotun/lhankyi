import React, { FC } from 'react';
import Modal from 'react-modal';
import styles from '../scss/modal.module.scss';

Modal.setAppElement('#root');
interface MyModalProps {
  children: JSX.Element;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MyModal: FC<MyModalProps> = ({ children, open, setOpen }) => {
  return (
    <>
      <Modal
        isOpen={open}
        className={styles.modal}
        overlayClassName={styles.modal__overlay}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick={false}
        shouldFocusAfterRender
      >
        <div className={styles.modal__close} onClick={() => setOpen(false)}>
          X
        </div>
        {children}
      </Modal>
    </>
  );
};
