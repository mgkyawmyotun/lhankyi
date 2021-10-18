import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FC, useEffect, useState } from 'react';
import { MyEditor } from '../components/editor/MyEditor';
import { MainCard } from '../components/MainCard';
import { NavBar } from '../components/NavBar';
import styles from '../scss/create.module.scss';

export type CardState = 'front' | 'back';
export type CardData = {
  front: string;
  back: string;
};
export const CreateCard: FC = () => {
  const [cardData, setCardData] = useState<CardData>({ front: '', back: '' });
  const [cardState, setCardState] = useState<CardState>('front');
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
  }, [editor && editor.getHTML().length]);

  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        <div className={styles.main__content}>
          <MainCard
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
        <div className={styles.save_button}>Save</div>
      </div>
    </div>
  );
};
