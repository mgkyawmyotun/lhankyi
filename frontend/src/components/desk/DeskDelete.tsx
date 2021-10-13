import React, { FC, useContext, useState } from 'react';
import { DeskCtx } from '../../context/DeskContext';
import { useRemoveDeskMutation } from '../../generated/graphql';
import styles from '../../scss/desk.module.scss';
import { MyModal } from '../Modal';
interface DeskDeleteProps {
  desk_name: string;
}
export const DeskDelete: FC<DeskDeleteProps> = ({ desk_name }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const ctx = useContext(DeskCtx);
  //   const [] = use;
  const [removeDesk] = useRemoveDeskMutation();
  return (
    <>
      <h3
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Delete
      </h3>
      <MyModal open={openModal} setOpen={setOpenModal}>
        <div className={styles.desk__delete__buttons}>
          <button
            onClick={async () => {
              await removeDesk({ variables: { desk_name } });
              await ctx?.refetchData();
              setOpenModal(false);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </MyModal>
    </>
  );
};
