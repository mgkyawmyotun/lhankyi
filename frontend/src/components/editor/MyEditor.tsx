import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { FC, useEffect } from 'react';
import '../../scss/editor.scss';

interface MyEditorProps {}
export const MyEditor: FC<MyEditorProps> = () => {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  useEffect(() => {
    console.log(editor?.getHTML());
  }, [editor?.getCharacterCount()]);
  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};
