import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { InputField } from '../../components/InputField';
import {
  CardError,
  CardId,
  useCreateCardMutation,
} from '../../generated/graphql';
import styles from '../../scss/login.module.scss';
import { cardSchema } from '../../utils/validation';

interface CardFormProps {
  desk_name: string;
  closeModal: () => void;
}
export const CardForm: FC<CardFormProps> = ({ closeModal, desk_name }) => {
  const [createCard] = useCreateCardMutation();
  const { push } = useHistory();
  return (
    <>
      <div className={styles.form}>
        <Formik
          initialValues={{
            card_name: '',
          }}
          validationSchema={cardSchema}
          onSubmit={async ({ card_name }, { setErrors }) => {
            const card_result = await createCard({
              variables: { cardInputData: { desk_name, card_name } },
            });
            if (card_result.data && card_result.data.createCard) {
              if (card_result.data.createCard.__typename === 'CardError') {
                const error = card_result.data.createCard as CardError;

                setErrors({
                  [error.path || '']: error.message,
                });
              } else {
                closeModal();
                const { card_id } = card_result.data.createCard as CardId;
                push('/create/cards/' + card_id);
              }
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
