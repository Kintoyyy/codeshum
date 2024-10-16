// EditorPanel.js
import React, { useState, useEffect } from 'react';
import EditorTabs from './EditorTabs';
import EditorPanelSettings from './EditorSettings';
import EditorArea from './EditorArea';
import EditorTerminal from "@/components/editor/editorPanel/EditorTerminal.js";

export default function EditorPanel({ problem, editorTheme, setEditorTheme }) {
    const [files, setFiles] = useState(problem.boilerplates || []);
    const [language, setLanguage] = useState();
    const [activeFile, setActiveFile] = useState(files.length > 0 ? files[0].id : null);

    useEffect(() => {
        if (problem && problem.boilerplates) {
            setFiles(problem.boilerplates || []);
            setActiveFile(problem.boilerplates.length > 0 ? problem.boilerplates[0].id : null);
        }
    }, [problem]);

    const handleFileUpdate = (updatedFile) => {
        setFiles((prevFiles) =>
            prevFiles.map((file) =>
                file.id === updatedFile.id ? updatedFile : file
            )
        );
    };

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
                <div className="flex items-center h-100">
                    {/* Editor Terminal */}
                    <EditorTerminal
                        files={files}
                        themeMode={editorTheme}
                    />
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
                                onFileUpdate={handleFileUpdate} // Pass the handler here
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
