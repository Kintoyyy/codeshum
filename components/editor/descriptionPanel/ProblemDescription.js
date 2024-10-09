import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function ProblemDescription() {
    return (
        <section>
            <Alert className="w-auto m-2">
                <Terminal className="w-4 h-4" />
                <AlertTitle>HHELLO WORLD!</AlertTitle>
                <AlertDescription>
                    Codeshum daasdkjasbdlkjbasd
                </AlertDescription>
            </Alert>
            <Card className="m-2 ">
                <CardHeader>
                    <CardTitle>Problem Title</CardTitle>
                    <CardDescription>Problem Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Example Content</p>
                </CardContent>
            </Card>

            <Card className="m-2 max-h-20">
                <CardHeader>
                    <CardTitle>Test 1</CardTitle>
                    <CardDescription>Test</CardDescription>
                </CardHeader>
            </Card>
        </section>
    );
}
