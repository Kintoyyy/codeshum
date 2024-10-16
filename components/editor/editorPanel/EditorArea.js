import Editor from "@monaco-editor/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState, useEffect } from 'react';

export default function EditorArea({ file, editorTheme, language, onFileUpdate }) {
  const [editorContent, setEditorContent] = useState(file.content);
  const [markers, setMarkers] = useState([]);
  const editorRef = React.useRef(null); // Initialize editorRef

  useEffect(() => {
    setEditorContent(file.content);
  }, [file]);

  function handleEditorChange(value, event) {
    setEditorContent(value);
    onFileUpdate({ ...file, content: value });
  }

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; // Store the editor instance
    // Set markers when editor mounts
    if (markers.length > 0) {
      monaco.editor.setModelMarkers(editor.getModel(), "owner", markers);
    }
  }

  function handleEditorWillMount(monaco) {
    // Customization before the editor mounts
  }

  function handleEditorValidation(newMarkers) {
    setMarkers(newMarkers); // Update markers state
    if (editorRef.current) {
      // Apply new markers to the editor
      monaco.editor.setModelMarkers(editorRef.current.getModel(), "owner", newMarkers);
    }
  }

  useEffect(() => {
    if (editorRef.current) {
      // Update markers in case of changes
      monaco.editor.setModelMarkers(editorRef.current.getModel(), "owner", markers);
    }
  }, [markers]);

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
