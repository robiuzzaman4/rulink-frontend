import {
  AlertDialog,
  AlertDialogAction,
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
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            social account and remove your acount data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleRemoveSocial}>
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
