import React, { useState, useEffect } from 'react';
import EditorTabs from './EditorTabs'; // Import your EditorTabs component
import EditorPanelSettings from './EditorSettings'; // Import your EditorPanelSettings component
import EditorArea from './EditorArea'; // Import your EditorArea component
import { Tabs, TabsContent } from "@/components/ui/tabs"; // Adjust import as necessary

export default function EditorPanel({ problem, editorTheme, setEditorTheme }) {
    const [files, setFiles] = useState(problem.boilerplates || []);
    const [language, setLanguage] = useState(); // Assuming this comes from the problem or user settings
    const [activeFile, setActiveFile] = useState(files.length > 0 ? files[0].id : null);

    useEffect(() => {
        if (problem && problem.boilerplates) {
            setFiles(problem.boilerplates || []); // Update files based on boilerplates

            if (problem.boilerplates.length > 0) {
                setActiveFile(problem.boilerplates[0].id); // Set the first boilerplate as active file
            } else {
                setActiveFile(null); // No boilerplates, so clear active file
            }
        }
    }, [problem]);

    return (
        <section className="flex flex-col h-full">
            <div className="flex items-center justify-between h-12">
                {/* Editor Tabs */}
                <EditorTabs
                    files={files}
                    setFiles={setFiles}
                    activeFile={activeFile}
                    setActiveFile={setActiveFile}
                />
                <div className="flex items-center h-full">
                    {/* Editor Settings */}
                    <EditorPanelSettings
                        setEditorTheme={setEditorTheme}
                        setLanguage={setLanguage}
                    />
                </div>
            </div>

            <div className="flex-grow">
                {files.length > 0 ? (
                    files.map((file) => (
                        activeFile === file.id && (
                            <EditorArea
                                key={file.id}
                                file={file}
                                language={language}
                                editorTheme={editorTheme}
                            />
                        )
                    ))
                ) : (
                    <p>No files to display</p> // Fallback if no files are present
                )}
            </div>
        </section>
    );
}
