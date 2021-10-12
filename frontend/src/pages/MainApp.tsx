import React, { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { DeskForm } from '../components/desk/DeskForm';
import { NavBar } from '../components/NavBar';
import { useGetUserQuery } from '../generated/graphql';
import styles from '../scss/app.module.scss';
import DotIcon from '../svg/DotIcon';
import PlusIcon from '../svg/PlusIcon';
Modal.setAppElement('#root');
export const MainApp: FC = () => {
  const { loading, data } = useGetUserQuery({
    fetchPolicy: 'no-cache',
  });
  useEffect(() => {
    if (!loading) {
      if (!data?.getUser) {
        route.push('/login');
      }
    }
  }, [loading, data?.getUser]);
  const [open, setOpen] = useState<boolean>(false);
  function openModal() {
    setOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log('After Open');
  }

  function closeModal() {
    setOpen(false);
  }

  const route = useHistory();
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        <h1>Your Desk</h1>
        <div className={styles.app__desk__pannel}>
          <div className={styles.card__pannel}>
            <div className={styles.card}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            </div>
            <div className={styles.card}>
              helow od <DotIcon />
            </div>
            <div className={styles.card}>bar kyi tar lae</div>
            <div className={styles.card}>helow od</div>
            <div className={styles.card}>helow od</div>
            <div className={styles.card}>bar kyi tar lae</div>
            <div className={styles.card}>bar kyi tar lae</div>
          </div>
          <div
            className={styles.add_button}
            onClick={() => {
              setOpen(true);
            }}
          >
            <PlusIcon />
          </div>

          <Modal
            isOpen={open}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            className={styles.modal}
            overlayClassName={styles.modal__overlay}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick={false}
            shouldFocusAfterRender
          >
            <div className={styles.modal__close} onClick={() => setOpen(false)}>
              X
            </div>
            <h1>Create Desk</h1>
            <div className={styles.desk__form}>
              <DeskForm />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
