import React, { useState, useEffect, useRef } from 'react';
import Terminal, { TerminalOutput, ColorMode } from 'react-terminal-ui';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EditorTerminal = ({ isModalActive }) => {
    const [modalIsOpen, setModalIsOpen] = useState(isModalActive || false);

    const [terminalLineData, setTerminalLineData] = useState([
        { key: 0, output: <TerminalOutput>Welcome to the React Terminal UI!</TerminalOutput> },
    ]);

    const [sessionId, setSessionId] = useState('');
    const ws = useRef(null);
    const lineCounter = useRef(1);

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

    const handleInput = (input) => {
        if (input.trim() === 'clear') {
            clearTerminal(); // Clear the terminal output
            return;
        }

        if (input.trim() === 'exit' || input.trim() === 'quit') {
            closeModal();
            return;
        }

        if (input.trim() === 'run') {
            runCode();
            return;
        }

        if (input.trim() === 'test') {
            appendToTerminal('Testing...');
            // send post request to test code
            setTimeout(() => {
                setModalIsOpen(false);
            }, 500);
            return;
        }

        if (input.trim() === 'help' || input.trim() === '?') {
            const helpMessage = (
                <TerminalOutput key={lineCounter.current}>
                    <strong>Available Commands:</strong>
                    <ul>
                        <li><strong>&apos;clear&apos;</strong> will clear the terminal output.</li>
                        <li><strong>&apos;help&apos;</strong> will displays this help message.</li>
                        <li><strong>&apos;run&apos;</strong> will Executes the main code</li>
                        <li><strong>&apos;test&apos;</strong> will run the test cases.</li>
                        <li><strong>&apos;exit&apos;</strong> will closes the terminal session.</li>
                    </ul>
                </TerminalOutput>
            );
            appendToTerminal(helpMessage); // Append help message correctly
            return;
        }

        // Append user input to terminal
        appendToTerminal(`$ ${input}`);
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(input);
        } else {
            appendToTerminal('WebSocket is not connected.');
        }
    };


    const runCode = async () => {
        setTerminalLineData([]);
        setModalIsOpen(true);
        const files = [
            {
                file_name: 'Main.java',
                content: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Create a Scanner object for input
        Scanner scanner = new Scanner(System.in);

        // Accepting a string input
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Accepting an integer input
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        // Accepting a double input
        System.out.print("Enter your height in meters: ");
        double height = scanner.nextDouble();

        // Displaying the inputs
        System.out.println("Hello, " + name + "!");
        System.out.println("You are " + age + " years old.");
        System.out.println("Your height is " + height + " meters.");

        // Close the scanner
        scanner.close();
    }
}

`,
                isMain: true,
            }
        ];

        try {
            const response = await fetch('http://localhost:8000/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId, files }),
            });

            if (!response.ok) throw new Error('Failed to run code');
            // setModalIsOpen(true);
        } catch (error) {
            console.error('Error running code:', error.message);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        // setSessionId('');
    };

    const clearTerminal = () => {
        setTerminalLineData([]);
    }

    return (
        <>
            <Button onClick={runCode}>Run Code</Button>
            <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen} className="w-full" >
                <DialogTrigger>Open Terminal</DialogTrigger>
                <DialogContent className="w-full p-0 max-w-7xl">
                    <Terminal className="p-0 w-full h-[500px]"
                        name="Codeshum Terminal"
                        colorMode={ColorMode.Dark}
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
            </Dialog >
        </>
    );
};

export default EditorTerminal;
