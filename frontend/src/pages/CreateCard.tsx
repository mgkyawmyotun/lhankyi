import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FC, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { MyEditor } from '../components/editor/MyEditor';
import { Loading } from '../components/Loading';
import { MainCard } from '../components/MainCard';
import { NavBar } from '../components/NavBar';
import { useEditCardMutation, useGetCardQuery } from '../generated/graphql';
import styles from '../scss/create.module.scss';

export type CardState = 'front' | 'back';
export type CardData = {
  front: string;
  back: string;
};
export const CreateCard: FC = () => {
  const { params } = useRouteMatch<{ card_id: string }>();
  const { goBack } = useHistory();
  const [cardData, setCardData] = useState<CardData>({ front: '', back: '' });
  const [cardState, setCardState] = useState<CardState>('front');
  const { data, loading } = useGetCardQuery({
    variables: { card_id: params.card_id },
    fetchPolicy: 'network-only',
  });
  const [editCard] = useEditCardMutation();
  useEffect(() => {
    if (!loading && data) {
      setCardData(() => {
        editor?.commands.setContent(data.getCard.card_data_front);
        return {
          front: data.getCard.card_data_front,
          back: data.getCard.card_data_back,
        };
      });
    }
  }, [data, loading]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Document,
      Paragraph,
      Text,
      Image,
      Dropcursor,
    ],
  });

  useEffect(() => {
    if (editor) {
      setCardData((cardData) => {
        return { ...cardData, [cardState]: editor?.getHTML() };
      });
    }
    //eslint-disable-next-line
  }, [editor && editor.getHTML().length]);

  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        {loading ? (
          <Loading />
        ) : (
          data && (
            <>
              <div className={styles.main__content}>
                <MainCard
                  card_name={data.getCard.card_name}
                  card_position={cardState}
                  data={editor?.getHTML()}
                  onFlipCard={() => {
                    setCardState((value) => {
                      const final = value === 'front' ? 'back' : 'front';
                      editor?.commands.setContent(cardData[final] || '');
                      return final;
                    });
                  }}
                />
                <MyEditor editor={editor} />
              </div>
              <div
                className={styles.save_button}
                onClick={async () => {
                  try {
                    await editCard({
                      variables: {
                        cardInputData: {
                          card_id: params.card_id,
                          card_data_back: cardData.back,
                          card_data_front: cardData.front,
                          card_name: data.getCard.card_name,
                        },
                      },
                    });
                    goBack();
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Save
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};
