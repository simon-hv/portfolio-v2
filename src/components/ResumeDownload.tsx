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
        <DropdownMenuItem className="cursor-pointer">
          <a
            className="w-full text-foreground no-underline"
            data-umami-event="English resume link"
            href="/resume.pdf"
            target="_blank"
          >
            🇬🇧 English
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            className="w-full text-foreground no-underline"
            data-umami-event="French resume link"
            href="/cv.pdf"
            target="_blank"
          >
            🇫🇷 French
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
