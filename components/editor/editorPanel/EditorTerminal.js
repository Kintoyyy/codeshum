import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"

const EditorTerminal = ({ onResize }) => {
    const terminalRef = useRef(null);
    const terminalInstance = useRef(null);
    const fitAddon = useRef(null);
    const ws = useRef(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [sessionId, setSessionId] = useState('');

    // Establish WebSocket connection on page load
    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8000');

        ws.current.onopen = () => {
            console.log('WebSocket connected');
        };

        // Store the session ID and display messages in the terminal
        ws.current.onmessage = (event) => {
            if (event.data.startsWith('userId: ')) {
                const id = event.data.split(': ')[1];
                setSessionId(id); // Update the sessionId state
            } else {
                // Write the received data to the terminal if initialized
                console.log('Received:', event.data);
                terminalInstance.current?.write(event.data + '\n'); // Display received data
            }
        };

        ws.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        ws.current.onerror = (err) => {
            console.error(`WebSocket error: ${err.message}`);
        };

        return () => {
            ws.current?.close();
        };
    }, []);


    // Initialize terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalInstance.current = new Terminal({
                cursorBlink: true,
                rows: 24,
                cols: 80,
            });
            fitAddon.current = new FitAddon();
            terminalInstance.current.loadAddon(fitAddon.current);
            terminalInstance.current.open(terminalRef.current);
            fitTerminal();

            terminalInstance.current.onData(handleInput);

            return () => {
                terminalInstance.current?.dispose();
            };
        }
    }, []);

    const fitTerminal = () => {
        fitAddon.current?.fit();
    };

    const handleInput = (data) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(data);
        } else {
            terminalInstance.current.writeln('\r\nWebSocket is not connected.');
        }

        // Write data to the terminal as well
        terminalInstance.current.write(data);

        if (data.trim() === 'clear') {
            terminalInstance.current.clear();
        }
    };

    const runCode = async () => {
        const files = [
            {
                file_name: 'Main.java', content: 'public class Main { public static void main(String[] args) { System.out.println("Hello, World!");        for(int i = 0; i < 10; i++){System.out.print(i);} } }', isMain: true
            }
        ];

        try {
            // Upload files to server using the sessionId from WebSocket
            const response = await fetch('http://localhost:8000/run', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId, files }), // Use sessionId state
            });

            if (!response.ok) {
                throw new Error('Failed to run code');
            }

            // Open terminal modal
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error running code:', error.message);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        terminalInstance.current.clear(); // Clear terminal output when closing modal
        setSessionId(''); // Reset sessionId when closing modal
    };

    useEffect(() => {
        const handleResize = () => {
            fitTerminal();
        };

        if (onResize) {
            onResize(handleResize);
        }

        return () => {
            if (onResize) {
                onResize(null);
            }
        };
    }, [onResize]);

    return (
        <>
            <Button onClick={runCode}>Run Code</Button>
            <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
                <DialogTrigger>Open Terminal</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Terminal Output for Session: {sessionId}</DialogTitle>
                        <DialogDescription>
                            The output from your code execution will be displayed below.
                        </DialogDescription>
                    </DialogHeader>
                    <div ref={terminalRef} style={{ width: '100%', height: '400px', marginBottom: '10px' }} />
                    <Button onClick={closeModal}>Close</Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditorTerminal;
