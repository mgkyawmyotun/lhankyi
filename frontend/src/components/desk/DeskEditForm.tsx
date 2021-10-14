import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { InputField } from '../../components/InputField';
import { useEditDeskMutation } from '../../generated/graphql';
import styles from '../../scss/login.module.scss';
import { deskEditSchema } from '../../utils/validation';

interface DeskEditFormProps {
  closeModal: () => void;
  old_desk_name: string;
}
export const DeskEditForm: FC<DeskEditFormProps> = ({
  closeModal,
  old_desk_name,
}) => {
  const [editDesk] = useEditDeskMutation();
  return (
    <>
      <div className={styles.form}>
        <Formik
          initialValues={{
            new_desk_name: old_desk_name,
          }}
          validationSchema={deskEditSchema}
          onSubmit={async ({ new_desk_name }, { setErrors }) => {
            console.log('Helo');
            const desk_result = await editDesk({
              variables: { old_desk_name, new_desk_name },
            });
            console.log(desk_result);
            if (desk_result.data && desk_result.data.editDesk) {
              setErrors({
                new_desk_name: desk_result.data.editDesk.message || '',
              });
            } else {
              closeModal();
            }
          }}
        >
          {({ handleSubmit, errors }) => {
            return (
              <>
                <InputField
                  label={'New Desk Name'}
                  name={'new_desk_name'}
                  type="text"
                ></InputField>
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  disabled={!!errors.new_desk_name}
                >
                  Edit
                </button>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
