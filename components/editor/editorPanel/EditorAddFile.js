"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function EditorAddFile({ files, setFiles, setActiveFile }) {
    const [fileName, setFileName] = useState("");
    const [fileType, setFileType] = useState("java"); // Default file type is 'java'
    const [open, setOpen] = useState(false); // Manage dialog visibility
    const { toast } = useToast()

    // Allowed file extensions and corresponding languages
    const fileExtensions = {
        java: ".java",
        cpp: ".cpp",
        javascript: ".js",
        c: ".c",
    };

    // Helper function to extract file extension and detect language
    const detectFileTypeFromExtension = (name) => {
        const extension = name.split('.').pop(); // Get the file extension
        for (const [key, value] of Object.entries(fileExtensions)) {
            if (value === `.${extension}`) {
                return key; // Return the corresponding language key
            }
        }
        return null; // If no matching extension, return null
    };

    const addFile = () => {
        if (!fileName) {
            toast({
                title: "Please enter a file name.",
                description: "File name cannot be empty.",
                variant: "destructive",
            })
            return;
        }

        // Check the length of the filename
        if (fileName.length > 16) {
            toast({
                title: "Filename too long.",
                description: "Filename must be at most 16 characters long.",
                variant: "destructive",
            })
            return;
        }

        // Check if the maximum number of files is reached
        if (files.length >= 5) {
            toast({
                title: "File limit reached.",
                description: "You can only have a maximum of 6 files.",
                variant: "destructive",
            });
            return;
        }

        const detectedFileType = detectFileTypeFromExtension(fileName);
        const language = detectedFileType || fileType; // Use detected language if extension is provided, otherwise use selected file type

        // If the user has provided an unsupported extension
        if (detectedFileType === null && fileName.includes('.')) {
            toast({
                title: "File type not supported.",
                description: "Unsupported file type. Please use one of the allowed file types.",
                variant: "destructive",
            })
            return;
        }

        // Add the file extension if not provided by the user
        const fullFileName = fileName.includes(".")
            ? fileName
            : `${fileName}${fileExtensions[fileType]}`;

        const fileExists = files.some((file) => file.id === fullFileName);
        if (fileExists) {
            toast({
                title: "Duplicate file name.",
                description: "A file with this name already exists. Please choose a different name.",
                variant: "destructive",
            })
            return;
        }

        const newFile = {
            id: fullFileName,
            file_name: fullFileName,
            content: ``,
            language: language,
            read_only: false,
            isCloseable: true,
        };

        setFiles((prev) => [...prev, newFile]);
        setActiveFile(fullFileName);
        setOpen(false);
        setFileName("");
    };

    // Handle opening the modal with Ctrl + N
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault(); // Prevent the browser's default new window behavior
                setOpen(true); // Open the modal
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6 p-0 rounded-full hover:bg-muted-foreground/20"
                >
                    <Plus className="w-4 h-4" />
                    <span className="sr-only">Add File</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add File</DialogTitle>
                    <DialogDescription>
                        Enter the filename (with or without extension). If no extension is provided, one will be added based on the file type selection.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="file-name" className="sr-only">
                            File Name
                        </Label>
                        <Input
                            id="file-name"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            placeholder="Enter filename"
                            maxLength={16} // Limit input to 12 characters
                        />
                    </div>
                    <Select onValueChange={setFileType} value={fileType}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="File Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="cpp">C++</SelectItem>
                            <SelectItem value="javascript">Javascript</SelectItem>
                            <SelectItem value="c">C</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                            Close
                        </Button>
                    </DialogClose>
                    <Button type="button" onClick={addFile}>
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
