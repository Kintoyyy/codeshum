import React, { useState, useEffect, useRef } from 'react';
import Terminal, { TerminalOutput, ColorMode } from 'react-terminal-ui';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Terminal as TerminalIcon, Play } from "lucide-react";

const EditorTerminal = ({ files, themeMode }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [terminalTheme, setTerminalTheme] = useState(ColorMode.Dark);
    const [terminalLineData, setTerminalLineData] = useState([]);
    const [sessionId, setSessionId] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const ws = useRef(null);
    const lineCounter = useRef(1);

    console.log('Files:', files);

    useEffect(() => {
        console.log('Theme mode:', themeMode);
        setTerminalTheme(themeMode === 'vs-dark' ? ColorMode.Dark : ColorMode.Light);
    }, [themeMode]);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8000');
        ws.current.onopen = () => console.log('WebSocket connected');

        ws.current.onmessage = (event) => {
            if (event.data.startsWith('userId: ')) {
                const id = event.data.split(': ')[1];
                setSessionId(id);
            } else {
                appendToTerminal(event.data);
            }
        };

        ws.current.onclose = () => console.log('WebSocket closed');
        ws.current.onerror = (err) => console.error(`WebSocket error: ${err.message}`);

        return () => ws.current?.close();
    }, []);


    const appendToTerminal = (message) => {
        setTerminalLineData((prev) => [
            ...prev,
            { key: lineCounter.current++, output: <TerminalOutput>{message}</TerminalOutput> },
        ]);
    };

    const handleCommand = (command) => {
        if (command === 'clear') {
            clearTerminal();
            return;
        }

        if (command === 'exit' || command === 'quit') {
            closeModal();
            return;
        }

        if (command === 'run') {
            runCode();
            return;
        }

        if (command === 'test') {
            appendToTerminal('Testing...');
            setTimeout(() => {
                setModalIsOpen(false);
            }, 500);
            return;
        }

        if (command === 'help' || command === '?') {
            const helpMessage = (
                <TerminalOutput key={lineCounter.current}>
                    <strong>Available Commands:</strong>
                    <ul>
                        <li><strong>&apos;clear&apos;</strong> will clear the terminal output.</li>
                        <li><strong>&apos;help&apos;</strong> will display this help message.</li>
                        <li><strong>&apos;run&apos;</strong> will execute the main code.</li>
                        <li><strong>&apos;test&apos;</strong> will run the test cases.</li>
                        <li><strong>&apos;exit&apos;</strong> will close the terminal session.</li>
                    </ul>
                </TerminalOutput>
            );
            appendToTerminal(helpMessage);
            return;
        }
    };

    const handleInput = (input) => {
        appendToTerminal(`$ ${input}`);
        handleCommand(input.trim());

        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(input);
        } else {
            appendToTerminal('WebSocket is not connected.');
        }
    };

    const runCode = async () => {
        setTerminalLineData([]);
        setModalIsOpen(true);
        setIsRunning(true);

        try {
            const response = await fetch('http://localhost:8000/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId, files }),
            });

            if (!response.ok) throw new Error('Failed to run code');
            // Code running logic
        } catch (error) {
            console.error('Error running code:', error.message);
        } finally {
            setIsRunning(false);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        // setSessionId('');
    };

    const clearTerminal = () => {
        setTerminalLineData([]);
    };

    return (
        <>
            <Button onClick={runCode} variant="ghost" size="icon" className="flex items-center justify-center w-10 h-10 text-green-400 rounded-full hover:bg-muted-foreground/20">
                <Play className="w-5 h-4" />
                <span className="sr-only">Run Code</span>
            </Button>
            <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen} className="w-full">
                <DialogTrigger>
                    <Button variant="ghost" size="icon" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted-foreground/20">
                        <TerminalIcon className="w-5 h-4" />
                        <span className="sr-only">Terminal</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-full p-0 max-w-7xl">
                    <Terminal
                        className="p-0 w-full h-[500px]"
                        name="Codeshum Terminal"
                        colorMode={terminalTheme}
                        onInput={handleInput}
                        redBtnCallback={closeModal}
                        yellowBtnCallback={clearTerminal}
                        greenBtnCallback={runCode}
                    >
                        {terminalLineData.map((line) => (
                            <React.Fragment key={line.key}>{line.output}</React.Fragment>
                        ))}
                    </Terminal>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditorTerminal;
