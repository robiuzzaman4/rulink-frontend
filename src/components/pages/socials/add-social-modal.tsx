import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { useUpdateUserMutation } from "@/features/user-slice";
import { toast } from "sonner";

interface Social {
  label: string;
  platform: string;
  url: string;
}

interface AddSocialModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  addedSocials: Social[];
  singleSocial: { label: string; platform: string };
  id: string;
}

// === form schema ===
const FormSchema = z.object({
  url: z.string().url({
    message: "Please provide a valid URL",
  }),
});

const AddSocialModal = ({
  open,
  setOpen,
  addedSocials,
  singleSocial,
  id,
}: AddSocialModalProps) => {
  // === initialize form ===
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
    },
  });

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  // === handle add socials ===
  const handleAddSocials = async (data: z.infer<typeof FormSchema>) => {
    if (addedSocials?.length >= 4) {
      setOpen(false);
      return toast.error("You can only add up to four social accounts.");
    }

    if (addedSocials?.length > 0) {
      // make payload
      const payload = {
        socials: [
          ...addedSocials,
          {
            label: singleSocial.label,
            platform: singleSocial.platform,
            url: data.url,
          },
        ],
      };
      // update user profile api mutations
      try {
        const res: any = await updateProfile({
          payload,
          userId: id,
        });
        if (res?.data?.success) {
          toast.success("Socials updated.");
          setOpen(false);
        } else {
          toast.error("Failed to update socials. Please try again.");
          setOpen(false);
        }
      } catch (error) {
        console.log("UPDATE SOCIALS ERROR", error);
        setOpen(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden max-w-[400px] w-full">
        <DialogHeader>
          <DialogTitle>Add Social Profile</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAddSocials)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Profile URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://somthing.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-fit ml-auto">
              <Button type="submit">
                Save
                {isUpdateProfileLoading && (
                  <Loader size={16} className="animate-spin ml-2" />
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSocialModal;
