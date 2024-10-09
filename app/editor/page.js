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

export default function Page() {
    const [themeMode, setThemeMode] = useState('system'); // Manage theme state here
    useEffect(() => {
        const root = window.document.documentElement;

        const updateTheme = () => {
            root.classList.remove("light", "dark");

            let currentTheme;
            if (themeMode === "system") {
                currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            } else {
                currentTheme = themeMode;
            }

            root.classList.add(currentTheme);
            // setEditorTheme(currentTheme === "dark" ? vscodeDark : vscodeLight);

            // Save the selected mode to localStorage
            localStorage.setItem('theme', currentTheme);
        };

        updateTheme();

        // Add a listener for system theme changes
        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
        const listener = (event) => {
            if (themeMode === "system") {
                updateTheme(); // Update theme if system preference changes
            }
        };

        mediaQueryList.addEventListener("change", listener);

        return () => {
            mediaQueryList.removeEventListener("change", listener);
        };
    }, [themeMode]); // Ensure effect runs on theme mode change

    const handlePanelResize = () => {
        console.log("Panel resized");
        // The terminal fitAddon.fit() will be called inside EditorTerminal
    };

    return (
        <div className="flex flex-col h-screen">
            <TopNavBar themeMode={themeMode} setThemeMode={setThemeMode} />
            <ResizablePanelGroup direction="horizontal" className="flex-grow h-full" >
                {/* Left Panel */}
                <ResizablePanel defaultSize={18} minSize={12} maxSize={25} >
                    <ProblemDescription />
                </ResizablePanel>

                <ResizableHandle withHandle />
                {/* Middle Panel */}
                <ResizablePanel minSize={30} >
                    <ResizablePanelGroup direction="vertical">

                        <ResizablePanel maxSize={100}>
                            <EditorPanel themeMode={themeMode} setThemeMode={setThemeMode} />
                        </ResizablePanel>
                        <ResizableHandle withHandle />

                        <ResizablePanel defaultSize={15} maxSize={40} >
                            <EditorTerminal />
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
