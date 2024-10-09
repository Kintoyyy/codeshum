import { Button } from "@/components/ui/button";
import { X, Lock, Eye } from "lucide-react";
import { EditorAddFile } from "./EditorAddFile";

export default function EditorFiles({ files, setFiles, activeFile, setActiveFile }) {
    const closeFile = (fileId) => {
        if (files.length > 1) {
            const newFiles = files.filter(file => file.id !== fileId);
            setFiles(newFiles);
            if (activeFile === fileId) {
                setActiveFile(newFiles[0].id);
            }
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center p-2 space-x-2 bg-transparent">
                {files.map((file) => (
                    <div
                        key={file.id}
                        className={`relative rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition-all border
                            ${activeFile === file.id ? 'bg-muted-foreground/20 text-foreground shadow-sm' : 'hover:bg-muted-foreground/10'}`}
                        onClick={() => setActiveFile(file.id)}
                    >
                        <span className="mr-6">{file.file_name}</span>

                        <Button
                            {...(!file.isCloseable || file.read_only ? { disabled: true } : {})}
                            variant="ghost"
                            size="icon"
                            className="absolute w-6 h-6 p-0 -translate-y-1/2 rounded-full right-1 top-1/2 hover:bg-muted-foreground/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeFile(file.id);
                            }}
                        >
                            {(!file.isCloseable) ? (
                                file.read_only ? <Eye className="w-4 h-4" /> : <Lock className="w-4 h-4" />
                            ) : (
                                <X className="w-4 h-4" />
                            )}
                            <span className="sr-only">Close</span>
                        </Button>
                    </div>
                ))}
                <EditorAddFile files={files} setFiles={setFiles} setActiveFile={setActiveFile} activeFile={activeFile} />
            </div>
        </div>
    );
}
