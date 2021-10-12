import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { InputField } from '../../components/InputField';
import { useCreateDeskMutation } from '../../generated/graphql';
import styles from '../../scss/login.module.scss';
import { deskSchema } from '../../utils/validation';

interface DeskFormProps {
  closeModal: () => void;
}
export const DeskForm: FC<DeskFormProps> = ({ closeModal }) => {
  const [createDesk] = useCreateDeskMutation();
  return (
    <>
      <div className={styles.form}>
        <Formik
          initialValues={{
            desk_name: '',
          }}
          validationSchema={deskSchema}
          onSubmit={async ({ desk_name }, { setErrors }) => {
            const desk_result = await createDesk({ variables: { desk_name } });
            if (desk_result.data && desk_result.data.createDesk) {
              setErrors({
                [desk_result.data.createDesk.path || '']:
                  desk_result.data.createDesk.message,
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
                  label={'Desk Name'}
                  name={'desk_name'}
                  type="text"
                ></InputField>
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  disabled={!!errors.desk_name}
                >
                  Create
                </button>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
