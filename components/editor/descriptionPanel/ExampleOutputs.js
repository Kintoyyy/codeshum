import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ExampleOutputs({ outputs }) {
    return (
        outputs.map((output, id) => (
            <Card className="m-2" key={output.id}>
                <CardHeader>
                    <CardTitle className="mb-2">Example Output {id + 1}</CardTitle>
                    <CardContent className="p-2 text-sm rounded-md bg-muted">
                        <pre className="break-words whitespace-pre-wrap">
                            <code>
                                {output.output_code}
                            </code>
                        </pre>
                    </CardContent>
                </CardHeader>
            </Card>
        ))
    )
}