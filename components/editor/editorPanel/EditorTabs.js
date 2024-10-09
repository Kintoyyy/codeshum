import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { EditorAddFile } from "./EditorAddFile";

export default function EditorTabs({ files, setFiles, activeFile, setActiveFile }) {
    const closeFile = (fileId) => {
        if (files.length > 1) {
            const newfiles = files.filter(file => file.id !== fileId);
            setFiles(newfiles);
            if (activeFile === fileId) {
                setActiveFile(newfiles[0].id);
            }
        }
    };

    const addFile = () => {
        const newFileName = prompt("Enter the filename (with extension):");
        if (newFileName) {
            const fileExists = files.some(file => file.id === newFileName);
            if (fileExists) {
                alert("A file with this name already exists. Please choose a different name.");
                return;
            }
            const newFile = {
                id: newFileName,
                title: newFileName,
                content: ``,
                language: 'java',
            };
            setFiles((prev) => [...prev, newFile]);
            setActiveFile(newFileName);
        }
    };

    return (
        <Tabs value={activeFile} onValueChange={setActiveFile} className="flex-grow">
            <TabsList className="inline-flex items-center justify-start m-2 mb-0 space-x-2 bg-transparent">
                {files.map((file) => (
                    <TabsTrigger
                        key={file.id}
                        value={file.id}
                        className="border relative rounded-t-lg px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-muted-foreground/20 data-[state=active]:text-foreground data-[state=active]:shadow-sm hover:bg-muted-foreground/10"
                    >
                        <span className="mr-6">{file.title}</span>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute w-6 h-6 p-0 -translate-y-1/2 rounded-full right-1 top-1/2 hover:bg-muted-foreground/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeFile(file.id);
                            }}
                        >
                            <X className="w-4 h-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </TabsTrigger>
                ))}
                <EditorAddFile files={files} setFiles={setFiles} setActiveFile={setActiveFile} activeFile={activeFile} />
            </TabsList>
        </Tabs>
    )
}