import type { FC } from 'react';
import React from 'react';

interface InputFormProps {
  header_text: string;
  type: 'text' | 'password';
}
export const InputForm: FC<InputFormProps> = ({ header_text }) => {
  return (
    <div>
      <h2>{header_text}</h2>
      <input type="text" />
    </div>
  );
};
