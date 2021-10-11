import type { FC } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { RegisterForm } from '../components/register/RegisterForm';
import styles from '../scss/register.module.scss';
import RegisterFormIllustraion from '../svg/ReigsterFormIllustration';
export const Register: FC = () => {
  const { push } = useHistory();
  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <NavBar />
        <div className={styles.register__form}>
          <div className={styles.register__form__left}>
            <h1>စာမှတ်ရတာအခက်အခဲဖြစ်နေပါသလား?</h1>
            <h3>သင့်အတွက်လှန်ကြည့်ရှိပါတယ်</h3>
            <RegisterFormIllustraion />
          </div>
          <div className={styles.register__form__right}>
            <h1>အကောင့်ဖွင့်မည်</h1>
            <RegisterForm />
            <h1
              onClick={() => {
                push('/login');
              }}
            >
              အကောင့်ဖွင့်ပြီးသားလား?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
