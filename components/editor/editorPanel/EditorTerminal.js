import React, { useState, useEffect, useRef, useCallback } from 'react';
import Terminal, { ColorMode } from 'react-terminal-ui';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Terminal as TerminalIcon, Play, FlaskConical } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const EditorTerminal = ({ files, themeMode }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [terminalTheme, setTerminalTheme] = useState(ColorMode.Dark);
    const [terminalLineData, setTerminalLineData] = useState([]);
    const [sessionId, setSessionId] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const ws = useRef(null);

    const BACKEND_URL = 'localhost';

    const toggleModal = useCallback(() => {
        setModalIsOpen((prev) => !prev);
    }, []);

    const appendToTerminal = useCallback((message) => {
        setTerminalLineData((prev) => [...prev, message]);
    }, []);

    const clearTerminal = useCallback(() => {
        setTerminalLineData([]);
    }, []);

    const closeModal = useCallback(() => {
        setModalIsOpen(false);
    }, []);

    const handleWebSocketMessage = useCallback((event) => {
        const message = JSON.parse(event.data);

        if (message.userId) {
            setSessionId(message.userId);
        } else if (message.message) {
            // Append output to the terminal
            appendToTerminal(message.message.output);
        } else {
            appendToTerminal('Unexpected message format');
        }
    }, [appendToTerminal]);

    const runCode = useCallback(async () => {
        clearTerminal();
        setModalIsOpen(true);
        setIsRunning(true);

        try {
            const response = await fetch(`http://${BACKEND_URL}:8000/run`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId, files }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                appendToTerminal(errorData.error);
            }
        } catch (error) {
            appendToTerminal(`Error: ${error.message}`);
        } finally {
            setIsRunning(false);
        }
    }, [sessionId, files, clearTerminal, appendToTerminal]);

    const handleCommand = useCallback((command) => {
        switch (command) {
            case 'clear':
                clearTerminal();
                break;
            case 'exit':
            case 'quit':
                closeModal();
                break;
            case 'run':
                runCode();
                break;
            case 'test':
                appendToTerminal('Testing...');
                setTimeout(closeModal, 500);
                break;
            case 'help':
            case '?':
                appendToTerminal(
                    "Available Commands:\n" +
                    "clear' - Clear the terminal output.\n" +
                    "help' - Display this help message.\n" +
                    "run' - Execute the main code.\n" +
                    "test' - Run test cases.\n" +
                    "exit' - Close the terminal session."
                );
                break;
        }
    }, [runCode, closeModal, clearTerminal, appendToTerminal]);

    const handleInput = useCallback((input) => {
        const trimmedInput = input.trim();
        appendToTerminal(`> ${trimmedInput}`);
        handleCommand(trimmedInput);

        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({ type: 'input', command: trimmedInput }));
        } else {
            appendToTerminal('WebSocket is not connected.');
        }
    }, [appendToTerminal, handleCommand]);

    useEffect(() => {
        setTerminalTheme(themeMode === 'vs-dark' ? ColorMode.Dark : ColorMode.Light);
    }, [themeMode]);

    useEffect(() => {
        ws.current = new WebSocket(`ws://${BACKEND_URL}:8000`);

        ws.current.onopen = () => appendToTerminal('WebSocket connected');
        ws.current.onmessage = handleWebSocketMessage;
        ws.current.onclose = () => appendToTerminal('WebSocket closed');
        ws.current.onerror = (err) => appendToTerminal(`WebSocket error: ${err.message}`);

        return () => ws.current?.close();
    }, [appendToTerminal, handleWebSocketMessage]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.altKey && event.key === 'r') {
                event.preventDefault();
                runCode();
            } else if (event.altKey && event.key === 't') {
                event.preventDefault();
                toggleModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleModal, runCode]);

    return (
        <>
            <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen} className="w-full">
                <VisuallyHidden.Root>
                    <DialogTitle>Terminal</DialogTitle>
                </VisuallyHidden.Root>

                <DialogTrigger asChild>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setModalIsOpen(true)}
                                    className="flex items-center justify-center w-10 h-10 text-blue-400 rounded-full hover:bg-muted-foreground/20 "
                                >
                                    <TerminalIcon className="w-5 h-5 " />
                                    <span className="sr-only">Terminal</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <h1>Terminal</h1>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </DialogTrigger>

                <DialogContent className="w-full p-0 max-w-7xl">
                    <Terminal
                        className="p-0 w-full h-[500px] terminal-content"
                        name="Codeshum Terminal"
                        colorMode={terminalTheme}
                        onInput={handleInput}
                        redBtnCallback={closeModal}
                        yellowBtnCallback={clearTerminal}
                        greenBtnCallback={runCode}
                    >
                        {terminalLineData.map((line, index) => (
                            <pre key={index}>{line}</pre> // Use <pre> to preserve formatting
                        ))}
                    </Terminal>
                </DialogContent>
            </Dialog>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            onClick={runCode}
                            variant="ghost"
                            size="icon"
                            className="flex items-center justify-center w-10 h-10 text-green-400 rounded-full hover:bg-muted-foreground/20"
                            disabled={isRunning}
                        >
                            <Play className="w-5 h-5 " />
                            <span className="sr-only">Run Code</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <h1>Compile and Run</h1>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="flex items-center justify-center w-10 h-10 text-orange-400 rounded-full hover:bg-muted-foreground/20"
                        >
                            <FlaskConical className="w-5 h-5 " />
                            <span className="sr-only">Test Code</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <h1>Run Tests</h1>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
};

export default EditorTerminal;
