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

interface AddSocialModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

// === form schema ===
const FormSchema = z.object({
  url: z.string().url({
    message: "Please provide a valid URL",
  }),
});

const AddSocialModal = ({ open, setOpen }: AddSocialModalProps) => {
  // === initialize form ===
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
    },
  });

  // === handle add socials ===
  const handleAddSocials = (data: z.infer<typeof FormSchema>) => {
    console.log("data", data);
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
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSocialModal;
