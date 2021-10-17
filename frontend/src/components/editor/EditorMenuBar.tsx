import { Editor } from '@tiptap/react';
import React, { FC, useRef } from 'react';
import styles from '../../scss/editor.module.scss';
import { getBase64Image } from '../../utils/helper';
interface MenuBarProps {
  editor: Editor | null;
}
export const EditorMenu: FC<MenuBarProps> = ({ editor }) => {
  const input_ref = useRef<HTMLInputElement>(null);
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.menu}>
      <span
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? styles.active : styles.unactive}
      >
        bold
      </span>
      <span
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? styles.active : ''}
      >
        italic
      </span>
      <span
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? styles.active : ''}
      >
        code
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive('heading', { level: 1 }) ? styles.active : ''
        }
      >
        h1
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 }) ? styles.active : ''
        }
      >
        h2
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive('heading', { level: 3 }) ? styles.active : ''
        }
      >
        h3
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive('heading', { level: 4 }) ? styles.active : ''
        }
      >
        h4
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive('heading', { level: 5 }) ? styles.active : ''
        }
      >
        h5
      </span>
      <span
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? styles.active : ''}
      >
        bullet list
      </span>
      <span
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? styles.active : ''}
      >
        ordered list
      </span>
      <span
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? styles.active : ''}
      >
        code block
      </span>
      <span
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? styles.active : ''}
      >
        blockquote
      </span>
      <span onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </span>
      <span onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </span>
      <span onClick={() => editor.chain().focus().undo().run()}>undo</span>
      <span onClick={() => editor.chain().focus().redo().run()}>redo</span>
      <input
        ref={input_ref}
        onInput={(e) => {
          if (input_ref && input_ref.current && input_ref.current.files) {
            const file = input_ref.current.files[0];
            if (!file) {
              return;
            }
            input_ref.current.value = '';
            const reader = new FileReader();
            reader.readAsDataURL(file);
            const img_url = URL.createObjectURL(file);
            getBase64Image(img_url).then((value) => {
              editor.chain().focus().setImage({ src: value }).run();
            });
          }
        }}
        type="file"
      />
    </div>
  );
};
