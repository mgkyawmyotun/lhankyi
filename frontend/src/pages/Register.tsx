import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { InputField } from '../components/InputField';
import styles from '../scss/register.module.scss';
import Logo from '../svg/Logo';
import RegisterFormIllustraion from '../svg/ReigsterFormIllustration';
import { registerSchema } from '../utils/validation';
export const Register: FC = () => {
  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__nav}>
          <Logo />
          <h3>English</h3>
        </div>
        <div className={styles.register__form}>
          <div className={styles.register__form__left}>
            <h1>စာမှတ်ရတာအခက်အခဲဖြစ်နေပါသလား?</h1>
            <h3>သင့်အတွက်လှန်ကြည့်ရှိပါတယ်</h3>
            <RegisterFormIllustraion />
          </div>
          <div className={styles.register__form__right}>
            <h1>အကောင့်ဖွင့်မည်</h1>
            <div className={styles.form}>
              <Formik
                initialValues={{
                  email: '',
                  name: '',
                  password: '',
                }}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleSubmit, errors }) => {
                  return (
                    <>
                      <InputField
                        label={'နာမည်'}
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
                        disabled={
                          !!(errors.email || errors.name || errors.password)
                        }
                      >
                        ဖွင့်မည်
                      </button>
                    </>
                  );
                }}
              </Formik>
            </div>
            <h1>အကောင့်ဖွင့်ပြီးသားလား?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
