"use client";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProblemDescription from "@/components/editor/descriptionPanel/ProblemDescription";
import EditorPanel from "@/components/editor/editorPanel/EditorPanel";
import ItemNagivation from "@/components/editor/progressPanel/ItemNagivation.js";
import TestCasePanel from "@/components/editor/progressPanel/TestCasePanel";
import TopNavBar from "@/components/editor/navigation/TopNavBar";

import activityObj from "../../activity-example.js";
import EditorTerminal from "@/components/editor/editorPanel/EditorTerminal.js";
import { Terminal } from "lucide-react";

export default function Page() {
    const [activity, setActivity] = useState(activityObj);
    const [themeMode, setThemeMode] = useState('system');
    const [editorTheme, setEditorTheme] = useState('vs-dark');
    const [currentQuestion, setCurrentQuestion] = useState(activity.questions[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <TopNavBar themeMode={themeMode} setThemeMode={setThemeMode} setEditorTheme={setEditorTheme} />

            {!isMobile && (
                <ResizablePanelGroup direction="horizontal" className="flex-grow h-full">
                    {/* Left Panel */}
                    <ResizablePanel defaultSize={18} minSize={12} maxSize={25}>

                        <ProblemDescription problem={currentQuestion.problem} />
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    {/* Middle Panel */}
                    <ResizablePanel minSize={30} defaultSize={64} maxSize={100}>
                        {/* <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={35}> */}
                        <EditorPanel editorTheme={editorTheme} setEditorTheme={setEditorTheme} problem={currentQuestion.problem} />
                        {/* </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel maxSize={80} minSize={0} defaultSize={30}>
                                <EditorTerminal file={currentQuestion.problem.files} themeMode={themeMode} />
                            </ResizablePanel>
                        </ResizablePanelGroup> */}

                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    {/* Right Panel */}
                    <ResizablePanel defaultSize={18} minSize={12} maxSize={30}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={35}>
                                {/* Progress Panel */}
                                <ItemNagivation
                                    questions={activity.questions}
                                    currentQuestion={currentQuestion}
                                    setCurrentQuestion={setCurrentQuestion}
                                />
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel maxSize={100} minSize={30} defaultSize={70}>
                                <TestCasePanel problem={currentQuestion.problem} />
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            )}

            <div className="flex flex-col w-full md:hidden">
                <Tabs defaultValue="editor">
                    <TabsList className="grid m-2 w-100 grid-cols-3 rounded-t-lg bg-muted text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-muted-foreground/20 data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                        <TabsTrigger value="problem">Problem</TabsTrigger>
                        <TabsTrigger value="editor">Editor</TabsTrigger>
                        <TabsTrigger value="test">Test Case</TabsTrigger>
                    </TabsList>
                    <TabsContent value="problem">
                        <ProblemDescription problem={currentQuestion.problem} />
                    </TabsContent>
                    <TabsContent value="editor" className="h-[90vh]">
                        <EditorPanel editorTheme={editorTheme} setEditorTheme={setEditorTheme} problem={currentQuestion.problem} />
                    </TabsContent>
                    <TabsContent value="test">
                        <ItemNagivation
                            questions={activity.questions}
                            currentQuestion={currentQuestion}
                            setCurrentQuestion={setCurrentQuestion} />
                        <TestCasePanel problem={currentQuestion.problem} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
