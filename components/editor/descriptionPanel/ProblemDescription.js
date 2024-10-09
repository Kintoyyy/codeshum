import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ExampleOutputs from "./ExampleOutputs";

export default function ProblemDescription({ problem }) {
    return (
        <section>
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
                <CardContent>
                    <code>
                        adasdasdsd
                    </code>
                </CardContent>
            </Card>
            <ExampleOutputs outputs={problem.sample_outputs} />
        </section >
    );
}
