import { useState, useEffect } from "react";
import { Play, Pause, ChevronUp, ChevronDown, FileDiff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function TestCases({ testCases }) {
    const [cases, setcases] = useState(testCases);

    useEffect(() => {
        setcases(testCases);
    }, [testCases]);

    const [runningTests, setRunningTests] = useState({}); // Track running states for each test case

    const handleToggleCollapse = (id) => {
        setcases((prevcases) =>
            prevcases.map((testCase) =>
                testCase.id === id ? { ...testCase, isCollapsed: !testCase.isCollapsed } : testCase
            )
        );
    };

    const handleStart = (id) => {
        setRunningTests((prev) => ({ ...prev, [id]: { isRunning: true, progress: 0 } }));

        const interval = setInterval(() => {
            setRunningTests((prev) => {
                const currentTest = prev[id];
                if (currentTest.progress >= 100) {
                    clearInterval(interval);
                    return { ...prev, [id]: { ...currentTest, isRunning: false, progress: 100 } };
                }
                return { ...prev, [id]: { ...currentTest, progress: currentTest.progress + 10 } };
            });
        }, 500);
    };

    const handlePause = (id) => {
        setRunningTests((prev) => ({ ...prev, [id]: { ...prev[id], isRunning: false } }));
    };

    const getStatusColor = (progress) => {
        if (progress === 100) return "text-green-500";
        if (progress > 0) return "text-yellow-500";
        return "text-blue-500";
    };

    const getStatusText = (progress, isRunning) => {
        if (progress === 100) return "Completed";
        if (isRunning) return "Running";
        return "Ready";
    };

    return (
        <>
            {cases.map((testCase, index) => {
                const { id, score, output, executions, isHidden } = testCase;
                const lastExecution = executions[executions.length - 1];
                const { isRunning = false, progress = 0 } = runningTests[id] || {};

                return (
                    <Card key={id} className="w-full mb-2 overflow-hidden transition-all duration-300 hover:shadow-lg">
                        <CardHeader className="relative">
                            <div className="flex items-center justify-between">
                                <div className="flex-1 mr-2">
                                    <CardTitle className="text-lg font-bold truncate">Test Case {index + 1}</CardTitle>
                                    <CardDescription className="mt-1 text-sm text-muted-foreground">
                                        {score} points
                                    </CardDescription>
                                </div>
                                <div className="flex items-center space-x-2">
                                    {!lastExecution.isSuccessful && !isHidden && (
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="w-8 h-8 transition-colors duration-200 rounded-full"
                                        >
                                            <FileDiff className="w-4 h-4" />
                                            <span className="sr-only">File Diff</span>
                                        </Button>
                                    )}
                                    {!isHidden && (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="w-8 h-8 transition-colors duration-200 rounded-full"
                                            onClick={() => handleToggleCollapse(id)}
                                        >
                                            {testCase.isCollapsed ? (
                                                <ChevronDown className="w-4 h-4" />
                                            ) : (
                                                <ChevronUp className="w-4 h-4" />
                                            )}
                                            <span className="sr-only">{testCase.isCollapsed ? "Expand" : "Collapse"}</span>
                                        </Button>
                                    )}
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="w-8 h-8 transition-colors duration-200 rounded-full"
                                        onClick={() => (isRunning ? handlePause(id) : handleStart(id))}
                                    >
                                        {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                        <span className="sr-only">{isRunning ? "Pause" : "Start"}</span>
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        {!testCase.isCollapsed && !isHidden && (
                            <>
                                <CardContent>
                                    <div className="mb-4">
                                        <span className="font-semibold">Your Output:</span>
                                        <div className="p-2 mt-2 text-sm rounded-md bg-muted">
                                            <pre className="break-words whitespace-pre-wrap">
                                                <code>{lastExecution?.output}</code>
                                            </pre>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Expected Output:</span>
                                        <div className="p-2 mt-2 text-sm rounded-md bg-muted">
                                            <pre className="break-words whitespace-pre-wrap">
                                                <code>{output}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between px-4 py-2 bg-muted/50">
                                    <span className="text-sm font-medium">Status</span>
                                    <span className={`text-sm font-semibold ${getStatusColor(progress)}`}>
                                        {getStatusText(progress, isRunning)}
                                    </span>
                                </CardFooter>
                            </>
                        )}

                    </Card>
                );
            })}
        </>
    );
}
