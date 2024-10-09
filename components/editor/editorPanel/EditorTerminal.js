import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';

const EditorTerminal = ({ onResize }) => {
    const terminalRef = useRef(null);
    const terminalInstance = useRef(null);
    const fitAddon = useRef(null);

    useEffect(() => {
        if (terminalRef.current) {
            // Initialize the terminal and the fit addon
            terminalInstance.current = new Terminal({
                cursorBlink: true, // Enable cursor blinking
                rows: 24,
                cols: 80,
            });
            fitAddon.current = new FitAddon();
            terminalInstance.current.loadAddon(fitAddon.current); // Load the fit addon

            terminalInstance.current.open(terminalRef.current); // Open the terminal

            // Ensure that the container is rendered before calling fit
            setTimeout(() => {
                if (fitAddon.current && terminalRef.current) {
                    fitAddon.current.fit(); // Fit the terminal to the container
                }
            }, 10); // Small timeout to ensure the DOM is ready

            // Display a welcome message
            terminalInstance.current.writeln('Welcome to the Xterm.js terminal!');

            // Handle terminal input
            terminalInstance.current.onData((data) => {
                handleInput(data);
            });

            // Cleanup on component unmount
            return () => {
                if (terminalInstance.current) {
                    terminalInstance.current.dispose();
                }
            };
        }
    }, []);

    // Trigger fitAddon on panel resize
    useEffect(() => {
        if (onResize) {
            onResize(() => {
                if (fitAddon.current) {
                    fitAddon.current.fit();
                }
            });
        }
    }, [onResize]);

    // Function to handle terminal input
    const handleInput = (data) => {
        terminalInstance.current.write(data); // Echo input back to terminal

        if (data.trim() === 'clear') {
            terminalInstance.current.clear();
        } else {
            terminalInstance.current.write(`\r\nYou typed: ${data}`);
        }
    };

    return <div ref={terminalRef} style={{ width: '100%', height: '100%' }} />;
};

export default EditorTerminal;
