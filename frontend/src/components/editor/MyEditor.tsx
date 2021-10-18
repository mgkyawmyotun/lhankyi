import { Editor, EditorContent } from '@tiptap/react';
import React, { FC } from 'react';
import '../../scss/editor.scss';
import { EditorMenu } from './EditorMenuBar';

interface MyEditorProps {
  editor: Editor | null;
}
export const MyEditor: FC<MyEditorProps> = ({ editor }) => {
  return (
    <div>
      <EditorMenu editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
