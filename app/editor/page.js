"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import React, { useState, useEffect } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import ProblemDescription from "@/components/editor/descriptionPanel/ProblemDescription"

import EditorPanel from "@/components/editor/editorPanel/EditorPanel";

import { XTerm } from 'react-xtermjs'
import TopNavBar from "@/components/editor/navigation/TopNavBar";
import EditorTerminal from "@/components/editor/editorPanel/EditorTerminal";
import { description } from "../auth/login/page";

import ativityObj from "../../activity-example.js"

export default function Page() {
    const [activty, setActivity] = useState(ativityObj);


    const [themeMode, setThemeMode] = useState('system');
    const [editorTheme, setEditorTheme] = useState('vs-dark');

    const [currentActivity, setCurrentActivity] = useState(activty);
    const [currentQuestion, setCurrentQuestion] = useState(currentActivity.questions[0]);

    return (
        <div className="flex flex-col h-screen">
            <TopNavBar themeMode={themeMode} setThemeMode={setThemeMode} setEditorTheme={setEditorTheme} />
            <ResizablePanelGroup direction="horizontal" className="flex-grow h-full" >

                {/* Left Panel */}
                <ResizablePanel defaultSize={18} minSize={12} maxSize={25} >

                    <ProblemDescription problem={currentQuestion.problem} />

                </ResizablePanel>

                <ResizableHandle withHandle />

                {/* Middle Panel */}
                <ResizablePanel minSize={30} >

                    <ResizablePanelGroup direction="vertical">

                        <ResizablePanel maxSize={100}>

                            <EditorPanel editorTheme={editorTheme} setEditorTheme={setEditorTheme} problem={currentQuestion.problem} />

                        </ResizablePanel>

                    </ResizablePanelGroup>
                </ResizablePanel>

                <ResizableHandle withHandle />

                {/* Right Panel */}
                <ResizablePanel defaultSize={18} minSize={12} maxSize={30} >
                    <ResizablePanelGroup direction="vertical">

                        <ResizablePanel defaultSize={30}>
                            <div className="flex items-center justify-center h-full p-6">
                                <span className="font-semibold">Progress</span>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />

                        <ResizablePanel maxSize={100} minSize={75}>

                            <Tabs defaultValue="test" className="m-2 w-100">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="test">Test Cases</TabsTrigger>
                                    <TabsTrigger value="execute">Executions</TabsTrigger>
                                </TabsList>
                                <TabsContent value="test">

                                    <Card>

                                        <CardHeader>
                                            <CardTitle>Test Case 1</CardTitle>
                                            <CardDescription>
                                                Blah Blah
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="">
                                        </CardContent>
                                        <CardFooter>
                                            {/* <Button>Save changes</Button> */}
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="execute">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Execution 1</CardTitle>
                                            <CardDescription>
                                                Blah Blah
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="">
                                        </CardContent>
                                        <CardFooter>
                                            {/* <Button>Save changes</Button> */}
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
