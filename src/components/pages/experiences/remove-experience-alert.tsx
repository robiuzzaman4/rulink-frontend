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

interface RemoveExperienceAlertProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleRemoveExperience: () => void;
  isUpdateProfileLoading: boolean;
}

const RemoveExperienceAlert = ({
  open,
  setOpen,
  handleRemoveExperience,
  isUpdateProfileLoading,
}: RemoveExperienceAlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to remove this experience?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This experience data will permanently delete from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            onClick={handleRemoveExperience}
            disabled={isUpdateProfileLoading}
          >
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

export default RemoveExperienceAlert;
