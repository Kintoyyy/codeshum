import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"


import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ExampleOutputs from "./ExampleOutputs";

export default function ProblemDescription({ problem }) {
    return (
        <ScrollArea className="border rounded-md h-[100%] ">
            <section> {/* Adjust max height as needed */}
                <Alert className="w-auto m-2">
                    <Terminal className="w-4 h-4" />
                    <AlertTitle>Activity Name</AlertTitle>
                    <AlertDescription>
                        Activity Description
                    </AlertDescription>
                </Alert>
                <Card className="m-2 ">
                    <CardHeader>
                        <CardTitle className="text-lg">{problem.name}</CardTitle>

                        <CardDescription>{problem.description}</CardDescription>

                    </CardHeader>
                    {problem.description_code && (
                        <CardContent className="p-2 m-6 mt-0 text-sm rounded-md bg-muted">
                            <pre className="break-words whitespace-pre-wrap">
                                <code>
                                    {problem.description_code}
                                </code>
                            </pre>
                        </CardContent>
                    )}
                </Card>
                <ExampleOutputs outputs={problem.sample_outputs} />
            </section>
        </ScrollArea >
    );
}
