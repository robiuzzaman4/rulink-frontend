import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateProjectSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Loader, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useUploadFileMutation } from "@/features/file-upload-slice";
import { useUpdateUserMutation } from "@/features/user-slice";
import { toast } from "sonner";
import { FILE_UPLOAD_API_KEY } from "@/constants/apikey";
import useUserByEmail from "@/hooks/useUserByEmail";
import { TProject } from "@/types";

const AddNewExperiencForm = () => {
  // === get uesr infor from db ===
  const { id, projects: projectsFromDb } = useUserByEmail();

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  // === initialize form ===
  const form = useForm<z.infer<typeof CreateProjectSchema>>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail_url: "",
      live_url: "",
    },
  });

  // === reset form values to get default values from the state ===
  const { reset, getValues } = form;

  // === hanlde update profile ===
  const hanldeUpdateProfile = async (
    data: z.infer<typeof CreateProjectSchema>
  ) => {
    // create project validataion
    if (projectsFromDb && projectsFromDb?.length >= 2) {
      toast.error("You can only add up to two projects.");
      return;
    }

  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(hanldeUpdateProfile)}
        className="w-full px-1 pb-1"
      >
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">Add New Project</h5>
          <div className="w-full grid xl:grid-cols-2 gap-4">
            {/* title field */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Food Delivery Website"
                      {...field}
                      disabled={isUpdateProfileLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* live url field */}
            <FormField
              control={form.control}
              name="live_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Live Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.google.com"
                      {...field}
                      disabled={isUpdateProfileLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* description filed */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write a short description of the project"
                      className="min-h-[100px] md:min-h-[80px] lg:min-h-[70px]"
                      {...field}
                      disabled={isUpdateProfileLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
        </div>
        <div className="w-fit ml-auto py-4 px-4 sm:px-6">
          <Button
            type="submit"
            disabled={isUpdateProfileLoading}
          >
            Save
            {(isUpdateProfileLoading) && (
              <Loader size={16} className="animate-spin ml-2" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddNewExperiencForm;
