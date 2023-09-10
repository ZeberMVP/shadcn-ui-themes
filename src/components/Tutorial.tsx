import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/new-york/ui/AlertDialog";
import { Button } from "@/registry/new-york/ui/Button";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

const Tutorial = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <HelpCircle className="h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>How to start using a theme:</AlertDialogTitle>
          <AlertDialogDescription>
            1. Configure{" "}
            <Link
              href="https://ui.shadcn.com/docs/installation"
              className="text-primary underline"
            >
              shadcn/ui
            </Link>{" "}
            on your project.
            <br />
            2. Select a theme and click the copy button. <br />
            3. Replace the :root and dark selectors of your globals.css with the
            values you copied.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Got it!</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Tutorial;
