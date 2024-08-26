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

interface RemoveSocialAlertProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleRemoveSocial: () => void;
  isUpdateProfileLoading: boolean;
}

const RemoveSocialAlert = ({
  open,
  setOpen,
  handleRemoveSocial,
  isUpdateProfileLoading,
}: RemoveSocialAlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to remove this social account?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This social account data will permanently delete from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            onClick={handleRemoveSocial}
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

export default RemoveSocialAlert;
