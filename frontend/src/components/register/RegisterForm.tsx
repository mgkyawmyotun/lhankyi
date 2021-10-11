import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InputField } from '../../components/InputField';
import {
  Token,
  useCreateUserMutation,
  UserError,
} from '../../generated/graphql';
import {
  RegisterTextData,
  selectRegister,
} from '../../redux/slices/swithTextData';
import { RootState } from '../../redux/store';
import styles from '../../scss/register.module.scss';
import { setToken } from '../../utils/auth';
import { registerSchema } from '../../utils/validation';
export const RegisterForm: FC = () => {
  const history = useHistory();
  const [createUser] = useCreateUserMutation();
  const text = useSelector<RootState, RegisterTextData>(selectRegister);
  return (
    <>
      {' '}
      <div className={styles.form}>
        <Formik
          initialValues={{
            email: '',
            name: '',
            password: '',
          }}
          validationSchema={registerSchema}
          onSubmit={async ({ email, name, password }, { setErrors }) => {
            const { data } = await createUser({
              variables: { registerData: { email, name, password } },
            });
            if (data?.createUser?.__typename == 'Token') {
              const { token } = data?.createUser as Token;
              if (token) setToken(token);
              history.push('/');
            } else {
              const error = data?.createUser as UserError;
              setErrors({ [error.path as string]: error.message });
            }
          }}
        >
          {({ handleSubmit, errors }) => {
            return (
              <>
                <InputField
                  label={text.name_field}
                  name={'name'}
                  type="text"
                ></InputField>
                <InputField
                  label={'Email'}
                  name={'email'}
                  type="text"
                ></InputField>
                <InputField
                  label={'password'}
                  name={'password'}
                  type="password"
                ></InputField>
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  disabled={!!(errors.email || errors.name || errors.password)}
                >
                  {text.button}
                </button>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
