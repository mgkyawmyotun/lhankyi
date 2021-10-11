import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { InputField } from '../../components/InputField';
import { Token, useLoginMutation, UserError } from '../../generated/graphql';
import styles from '../../scss/login.module.scss';
import { setToken } from '../../utils/auth';
import { registerSchema } from '../../utils/validation';

export const LoginForm: FC = () => {
  const history = useHistory();
  const [loginUser] = useLoginMutation();
  return (
    <>
      {' '}
      <div className={styles.form}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={registerSchema}
          onSubmit={async ({ email, password }, { setErrors }) => {
            const { data } = await loginUser({
              variables: { loginData: { email, password } },
            });
            if (data?.loginUser?.__typename == 'Token') {
              const { token } = data?.loginUser as Token;
              if (token) setToken(token);
              history.push('/');
            } else {
              const error = data?.loginUser as UserError;
              setErrors({ [error.path as string]: error.message });
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
                  ဝင်မည်
                </button>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
