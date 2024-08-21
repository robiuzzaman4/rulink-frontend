import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import React from "react";

interface RemoveProjectAlertProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleRemoveProject: () => void;
  isUpdateProfileLoading: boolean;
}

const RemoveProjectAlert = ({
  open,
  setOpen,
  handleRemoveProject,
  isUpdateProfileLoading,
}: RemoveProjectAlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to remove this project?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This project data will permanently delete from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleRemoveProject}>
            Yes Remove
            {isUpdateProfileLoading && (
              <Loader size={16} className="animate-spin ml-2" />
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveProjectAlert;
