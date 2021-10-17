import React, { FC, useContext, useState } from 'react';
import { DeskCtx } from '../../context/DeskContext';
import { MyModal } from '../Modal';
import { DeskEditForm } from './DeskEditForm';
interface DeskEditProps {
  desk_name: string;
}
export const DeskEdit: FC<DeskEditProps> = ({ desk_name }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const ctx = useContext(DeskCtx);
  return (
    <>
      <h3
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Edit
      </h3>
      <MyModal open={openModal} setOpen={setOpenModal}>
        <DeskEditForm
          closeModal={async () => {
            await ctx?.refetchData();
            setOpenModal(false);
          }}
          old_desk_name={desk_name}
        />
      </MyModal>
    </>
  );
};
