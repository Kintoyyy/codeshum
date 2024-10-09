import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState, useEffect } from 'react';

import TestCases from "@/components/editor/progressPanel/TestCases";
import Executions from "@/components/editor/progressPanel/Executions";

export default function TextCasePanel({ problem }) {
    const [testCases, setTestCases] = useState(problem.test_cases);

    useEffect(() => {
        setTestCases(problem.test_cases);
    }, [problem]);

    return (
        <Tabs defaultValue="test_case" className="m-2 w-100">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="test_case">Test Cases</TabsTrigger>
                <TabsTrigger value="executions">Executions</TabsTrigger>
            </TabsList>
            <TabsContent value="test_case">
                <TestCases testCases={testCases} />
            </TabsContent>
            <TabsContent value="executions">
                <Executions />
            </TabsContent>
        </Tabs>
    )
}