import React, { useState, useEffect } from 'react';
import EditorTabs from './EditorTabs';
import EditorPanelSettings from './EditorSettings';
import EditorArea from './EditorArea';

export default function EditorPanel({ problem, editorTheme, setEditorTheme }) {
    const [files, setFiles] = useState(problem.boilerplates || []);
    const [language, setLanguage] = useState();
    const [activeFile, setActiveFile] = useState(files.length > 0 ? files[0].id : null);

    useEffect(() => {
        if (problem && problem.boilerplates) {
            setFiles(problem.boilerplates || []);

            if (problem.boilerplates.length > 0) {
                setActiveFile(problem.boilerplates[0].id);
            } else {
                setActiveFile(null);
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
                <div className="flex items-center h-100">
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
