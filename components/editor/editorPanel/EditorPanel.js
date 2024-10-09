import React, { useState, useEffect } from 'react';
import EditorTabs from './EditorTabs'; // Import your EditorTabs component
import EditorPanelSettings from './EditorPanelSettings'; // Import your EditorPanelSettings component
import EditorArea from './EditorArea'; // Import your EditorArea component
import { Tabs, TabsContent } from "@/components/ui/tabs"; // Adjust import as necessary

export default function EditorPanel({ problem, editorTheme, setEditorTheme }) {
    const [files, setFiles] = useState(problem.boilerplates || []);
    const [language, setLanguage] = useState();
    const [activeFile, setActiveFile] = useState(files.length > 0 ? files[0].id : null);

    useEffect(() => {
        setFiles(problem.boilerplates || []);
        if (problem.boilerplates.length > 0) {
            setActiveFile(problem.boilerplates[0].id);
        } else {
            setActiveFile(null);
        }
    }, [problem.boilerplates]);

    return (
        <section className="flex flex-col h-full">
            <div className="flex items-center justify-between h-12">
                {/* Editor Tabs */}
                <EditorTabs files={files} setFiles={setFiles} activeFile={activeFile} setActiveFile={setActiveFile} />
                <div className="flex items-center h-full">
                    {/* Editor Settings */}
                    <EditorPanelSettings setEditorTheme={setEditorTheme} setLanguage={setLanguage} />
                </div>
            </div>
            <Tabs value={activeFile}>
                {files.map((file) => (
                    <TabsContent key={file.id} value={file.id}>
                        <EditorArea file={file} language={language} editorTheme={editorTheme} />
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
