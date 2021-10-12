import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { InputField } from '../../components/InputField';
import { useLoginMutation } from '../../generated/graphql';
import styles from '../../scss/login.module.scss';
import { loginSchema } from '../../utils/validation';

export const DeskForm: FC = () => {
  const [loginUser] = useLoginMutation();
  return (
    <>
      <div className={styles.form}>
        <Formik
          initialValues={{
            desk_name: '',
          }}
          validationSchema={loginSchema}
          onSubmit={async ({ desk_name }, { setErrors }) => {}}
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
