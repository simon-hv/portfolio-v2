import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

interface Props {
  /** Classes for the trigger button, which has no styling of its own. */
  className?: string;
  label?: string;
  /** Show only the icon; the label is kept for screen readers. */
  iconOnly?: boolean;
  iconClassName?: string;
  align?: "start" | "center" | "end";
}

export default function ResumeDownload({
  className,
  label = "Resume",
  iconOnly = false,
  iconClassName = "size-4",
  align = "start",
}: Props) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label={iconOnly ? `${label} (PDF)` : undefined}
        title={iconOnly ? label : undefined}
        className={cn(
          "inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className,
        )}
      >
        <FileText className={iconClassName} strokeWidth={1.6} />
        {!iconOnly && label}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
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
