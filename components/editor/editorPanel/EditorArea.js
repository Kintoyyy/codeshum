import Editor from "@monaco-editor/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState, useEffect } from 'react';

export default function EditorArea({ file, editorTheme, language, onFileUpdate }) {
  const [editorContent, setEditorContent] = useState(file.content);

  useEffect(() => {
    setEditorContent(file.content);
  }, [file]);


  function handleEditorChange(value, event) {
    setEditorContent(value);
    onFileUpdate({ ...file, content: value });
  }

  function handleEditorDidMount(editor, monaco) {
    // console.log("onMount: the editor instance:", editor);
    // console.log("onMount: the monaco instance:", monaco);
  }

  function handleEditorWillMount(monaco) {
    // console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <ScrollArea className="border rounded-md h-[100%] ">
      <Editor
        theme={editorTheme}
        options={{ readOnly: file.read_only }}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
        defaultLanguage={file.language || language}
        language={language || file.language}
        value={editorContent}  // Controlled editor content
      />
    </ScrollArea>
  );
}
