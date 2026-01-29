import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileText } from "lucide-react";

export default function ResumeDownload() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full sm:w-auto" variant="secondary">
          <FileText className="mr-2 h-4 w-4" />
          Resume
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <a
            className="cursor-pointer no-underline"
            data-umami-event="English resume link"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            🇬🇧 English
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            className="cursor-pointer no-underline"
            data-umami-event="French resume link"
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            🇫🇷 French
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
