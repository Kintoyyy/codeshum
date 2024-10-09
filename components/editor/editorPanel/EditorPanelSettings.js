import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function EditorPanelSettings({ setEditorTheme, setLanguage }) {
    return (
        <DropdownMenu className="w-[180px]">
            <DropdownMenuTrigger>
                <Button variant="ghost" size="icon" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted-foreground/20">
                    <Settings className="w-5 h-4" />
                    <span className="sr-only">Settings</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Editor Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Select onValueChange={setLanguage}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="cpp">C++</SelectItem>
                            <SelectItem value="objective-c">C</SelectItem>
                        </SelectContent>
                    </Select>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Select onValueChange={setEditorTheme}>
                        <SelectTrigger>
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="vs-dark">VSCode Dark</SelectItem>
                            <SelectItem value="light">VSCode Light</SelectItem>
                        </SelectContent>
                    </Select>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}