import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { FC, useEffect } from 'react';
import '../../scss/editor.scss';
import { EditorMenu } from './EditorMenuBar';

interface MyEditorProps {
  onInput: (htmlData: string) => void;
}
export const MyEditor: FC<MyEditorProps> = ({ onInput }) => {
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
      onInput(editor.getHTML());
    }
  }, [editor && editor.getCharacterCount(), editor && editor.getHTML().length]);

  return (
    <div>
      <EditorMenu editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
