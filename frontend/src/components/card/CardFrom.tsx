import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { InputField } from '../../components/InputField';
import { useCreateCardMutation } from '../../generated/graphql';
import styles from '../../scss/login.module.scss';
import { cardSchema } from '../../utils/validation';

interface CardFormProps {
  desk_name: string;
  closeModal: () => void;
}
export const CardForm: FC<CardFormProps> = ({ closeModal, desk_name }) => {
  const [createCard] = useCreateCardMutation();
  return (
    <>
      <div className={styles.form}>
        <Formik
          initialValues={{
            card_name: '',
          }}
          validationSchema={cardSchema}
          onSubmit={async ({ card_name }, { setErrors }) => {
            const desk_result = await createCard({
              variables: { cardInputData: { desk_name, card_name } },
            });
            if (desk_result.data && desk_result.data.createCard) {
              setErrors({
                [desk_result.data.createCard.path || '']:
                  desk_result.data.createCard.message,
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
                  label={'Card Name'}
                  name={'card_name'}
                  type="text"
                ></InputField>
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  disabled={!!errors.card_name}
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
