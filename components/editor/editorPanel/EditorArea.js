import Editor from "@monaco-editor/react";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function EditorArea({ file, editorTheme, language }) {
  function handleEditorChange(value, event) {
    // here is the current value
    // console.log('value:', value);
  }

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <ScrollArea className="border rounded-md h-[900px] ">
      <Editor
        height="90vh"
        theme={editorTheme}
        options={{ readOnly: file.read_only }}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
        defaultLanguage={file.language || language}
        language={language || file.language}
        defaultValue={file.content}
      />
    </ScrollArea>
  )
}