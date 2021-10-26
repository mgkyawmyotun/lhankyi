import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InputField } from '../../components/InputField';
import { Token, useLoginMutation, UserError } from '../../generated/graphql';
import { LoginTextData, selectLogin } from '../../redux/slices/swithTextData';
import { RootState } from '../../redux/store';
import styles from '../../scss/login.module.scss';
import { setToken } from '../../utils/auth';
import { loginSchema } from '../../utils/validation';

export const LoginForm: FC = () => {
  const text = useSelector<RootState, LoginTextData>(selectLogin);
  const history = useHistory();
  const [loginUser] = useLoginMutation();
  return (
    <>
      <div className={styles.form}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={async ({ email, password }, { setErrors }) => {
            const { data } = await loginUser({
              variables: { loginData: { email, password } },
            });
            if (data?.loginUser?.__typename === 'Token') {
              const { token } = data?.loginUser as Token;
              if (token) setToken(token);
              window.location.replace('/');
            } else {
              const error = data?.loginUser as UserError;
              setErrors({
                email: error.message || '',
                password: error.message || '',
              });
            }
          }}
        >
          {({ handleSubmit, errors }) => {
            return (
              <>
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
                  disabled={!!(errors.email || errors.password)}
                >
                  {text.create}
                </button>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
