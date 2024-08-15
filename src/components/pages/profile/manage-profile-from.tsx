"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ManageProfileSchema } from "@/schemas";
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
import IconButton from "@/components/shared/icon-button";
import { Plus, UserPen } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useUploadFileMutation } from "@/features/file-upload-slice";
import useUserByEmail from "@/hooks/useUserByEmail";

const ManageProfileForm = () => {
  // === get uesr infor from db ===
  const { img } = useUserByEmail();

  // === file sate and functions ===
  const [localImg, setLocalImg] = useState<{
    url: null | string;
    name: string;
    size: number;
    file: any;
  }>({
    url: "",
    name: "",
    size: 0,
    file: null,
  });

  // === file upload api mutation hook ===
  const [uploadFile, { isLoading: isUploadFileLoading }] =
    useUploadFileMutation();

  const handleImageUpload = (event: any) => {
    const file = event?.target?.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast.error("File size exceeds the 3MB limit.");
        return;
      }
      setLocalImg({
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        file: formData,
      });
    }
  };

  // === handle remove local file ===
  const handleRemoveLocalFile = () => {
    setLocalImg({
      url: null,
      name: "",
      size: 0,
      file: null,
    });
  };

  // === initialize form ===
  const form = useForm<z.infer<typeof ManageProfileSchema>>({
    resolver: zodResolver(ManageProfileSchema),
    defaultValues: {
      name: "",
      professional_title: "",
      bio: "",
      img: img ? img : "",
      open_to_work: true,
    },
  });

  // === hanlde submit form ===
  const hanldeSubmit = async (data: z.infer<typeof ManageProfileSchema>) => {
    console.log("data", data);

    // file upload api mutations
    try {
      const response: any = await uploadFile({
        file: localImg.file,
        apikey: "2810f4715c7d7ba0a57a3cac50297180",
      });
      if (response?.data?.success) {
        toast.success("Profile picture uploaded!");
      }
      console.log("response", response);
    } catch (error) {
      console.log("FILE UPLOAD ERROR", error);
    }
  };

  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto bg-secondary/50 rounded-2xl border border-border shadow-lg">
      {/* header */}
      <div className="grid gap-2 px-4 sm:px-6 py-4">
        <IconButton>
          <UserPen size={20} />
        </IconButton>
        <h5 className="text-lg font-medium font-satoshi">Manage Profile</h5>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(hanldeSubmit)} className="p-1">
          <div className="w-full grid xl:grid-cols-2 gap-4 bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm">
            {/* name field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jhon" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* professional title field */}
            <FormField
              control={form.control}
              name="professional_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Frontend Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* img filed */}
            <FormField
              control={form.control}
              name="img"
              render={({ field }) => (
                <FormItem>
                  <span className="w-full flex items-center justify-between gap-4">
                    <FormLabel>Profile Picture</FormLabel>
                    {localImg?.file && (
                      <Button
                        className="h-0 py-0"
                        variant="link"
                        type="button"
                        onClick={handleRemoveLocalFile}
                      >
                        Remove
                      </Button>
                    )}
                  </span>
                  <FormControl>
                    <div className="relative flex cursor-pointer items-center gap-4 rounded-md border border-dashed border-border focus-visible:outline-muted-foreground">
                      <div
                        onClick={() =>
                          document.getElementById("image-upload")?.click()
                        }
                        className="flex items-center gap-4 w-full p-4"
                      >
                        <Avatar>
                          {localImg?.url ? (
                            <AvatarImage src={localImg?.url} />
                          ) : (
                            <div className="h-full w-full grid place-items-center bg-secondary">
                              <Plus size={16} />
                            </div>
                          )}
                        </Avatar>
                        {localImg?.name && localImg?.size ? (
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                              {localImg?.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {localImg?.size < 1024 * 1024
                                ? `${(localImg.size / 1024).toFixed(2)} KB`
                                : `${(localImg.size / (1024 * 1024)).toFixed(
                                    2
                                  )} MB`}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">
                              Click to upload
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Supported: .png, .jpg, and .jpeg (max: 3MB)
                            </span>
                          </div>
                        )}
                      </div>

                      <Input
                        id="image-upload"
                        type="file"
                        className="hidden"
                        onChange={handleImageUpload}
                        accept=".png,.jpg,.jpeg"
                        // {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* bio filed */}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="min-h-[64px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* open to work field */}
            <FormField
              control={form.control}
              name="open_to_work"
              render={({ field }) => (
                <FormItem className="w-full flex items-center justify-between rounded-md border px-3 py-1 shadow-sm">
                  <FormLabel>Open to work</FormLabel>
                  <div className="pb-1">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="w-fit ml-auto py-4 px-4 sm:px-6">
            <Button type="submit" disabled={isUploadFileLoading}>
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ManageProfileForm;
