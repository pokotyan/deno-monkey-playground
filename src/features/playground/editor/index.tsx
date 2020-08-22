import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { useDispatch, useSelector } from 'react-redux';
import { setCode, selectCode } from '../slice';

const Editor: React.FC = () => {
  const code = useSelector(selectCode);
  const dispatch = useDispatch();

  return (
    <>
      <MonacoEditor
        language=""
        theme="vs-dark"
        value={code}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          cursorStyle: 'line',
          automaticLayout: false,
        }}
        onChange={(code) => dispatch(setCode(code))}
        editorDidMount={(editor) => editor.focus()}
      />
    </>
  );
};

export default Editor;
