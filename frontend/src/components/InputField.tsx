import { Field } from 'formik';
import type { FC } from 'react';
import React from 'react';
import styles from '../scss/input.module.scss';

interface InputFormProps {
  label: string;
  type: 'text' | 'password';
  name: string;
}
export const InputField: FC<InputFormProps> = ({ label, name }) => {
  return (
    <div className={styles.input_field}>
      <label>{label}</label>
      <Field name={name} type="text" />
    </div>
  );
};
