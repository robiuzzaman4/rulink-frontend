"use client";

import React, { useEffect, useState } from "react";
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
import { Loader, Plus, UserPen } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useUploadFileMutation } from "@/features/file-upload-slice";
import useUserByEmail from "@/hooks/useUserByEmail";
import { useUpdateUserMutation } from "@/features/user-slice";

const ManageProfileForm = () => {
  // === get uesr infor from db ===
  const { img, id, name, bio, professional_title, open_to_work, resume_url } =
    useUserByEmail();

  // === file upload api key ===
  const FILE_UPLOAD_API_KEY = process.env.NEXT_PUBLIC_FILE_UPLOAD_API_KEY;

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

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  // === hanlde local img upload ===
  const handleImageUpload = (event: any) => {
    const file = event?.target?.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
    if (file) {
      if (file?.size > MAX_FILE_SIZE) {
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
      name: name ? name : "",
      professional_title: professional_title ? professional_title : "",
      bio: bio ? bio : "",
      img: img ? img?.url : "",
      open_to_work: open_to_work ? open_to_work : true,
      resume_url: resume_url ? resume_url : "",
    },
  });

  // === reset form values to get default values from backend ===
  const { reset } = form;
  useEffect(() => {
    if (id) {
      reset({
        name: name,
        professional_title: professional_title,
        bio: bio,
        img: img?.url,
        open_to_work: open_to_work,
        resume_url: resume_url,
      });
    }
    console.log("render");
  }, [
    name,
    professional_title,
    bio,
    img?.url,
    open_to_work,
    resume_url,
    id,
    reset,
  ]);

  // === hanlde submit form ===
  const hanldeSubmit = async (data: z.infer<typeof ManageProfileSchema>) => {
    /**
     * if local img is available then call api with upload file
     * else call api without upload file
     */

    if (localImg?.file) {
      await handleUpdateProfileWithNewImg(data);
    } else {
      await handleUpdateProfileWithoutNewImg(data);
    }
  };

  // === handle update profile with new img ===
  const handleUpdateProfileWithNewImg = async (
    data: z.infer<typeof ManageProfileSchema>
  ) => {
    // file upload api mutations
    try {
      const response: any = await uploadFile({
        file: localImg.file,
        apikey: FILE_UPLOAD_API_KEY,
      });
      if (response?.data?.success) {
        // make payload with new img
        const payload = {
          name: data.name,
          professional_title: data.professional_title,
          bio: data.bio,
          img: {
            url: response?.data?.data?.display_url,
            name: localImg.name,
            size: localImg.size,
          },
          open_to_work: data.open_to_work,
          resume_url: data.resume_url,
        };

        // update user profile api mutations
        try {
          const res: any = await updateProfile({
            payload,
            userId: id,
          });
          if (res?.data?.success) {
            toast.success("Profile updated.");
            handleRemoveLocalFile();
          } else {
            toast.error("Failed to update profile. Please try again.");
          }
          // console.log("update profile res", res);
        } catch (error) {
          console.log("UPDATE PROFILE ERROR", error);
        }
      } else {
        toast.error("Failed to upload profile picture.");
      }
    } catch (error) {
      console.log("FILE UPLOAD ERROR", error);
    }
  };

  // === hanlde update profile without new img ===
  const handleUpdateProfileWithoutNewImg = async (
    data: z.infer<typeof ManageProfileSchema>
  ) => {
    // make payload without new img
    const payload = {
      name: data.name,
      professional_title: data.professional_title,
      bio: data.bio,
      open_to_work: data.open_to_work,
      resume_url: data.resume_url,
    };

    // update user profile api mutations
    try {
      const res: any = await updateProfile({
        payload,
        userId: id,
      });
      if (res?.data?.success) {
        toast.success("Profile updated.");
        handleRemoveLocalFile();
      } else {
        toast.error("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.log("UPDATE PROFILE ERROR", error);
    }
  };

  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-5xl mx-auto bg-secondary/50 rounded-2xl border border-border shadow-lg">
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
                    <Input
                      placeholder="Jhon"
                      {...field}
                      disabled={isUploadFileLoading || isUpdateProfileLoading}
                    />
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
                    <Input
                      placeholder="Frontend Developer"
                      {...field}
                      disabled={isUploadFileLoading || isUpdateProfileLoading}
                    />
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
                        disabled={isUploadFileLoading || isUpdateProfileLoading}
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
                          {img?.url && !localImg?.url && (
                            <AvatarImage src={img?.url} />
                          )}
                          {localImg?.url && <AvatarImage src={localImg?.url} />}
                          {!img?.url && !localImg?.url && (
                            <div className="h-full w-full grid place-items-center bg-secondary">
                              <Plus size={16} />
                            </div>
                          )}
                        </Avatar>

                        {/* show lcoal img */}
                        {localImg?.url && localImg?.name && (
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
                        )}

                        {/* show db img */}
                        {img && !localImg?.url && (
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                              {img?.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {img?.size < 1024 * 1024
                                ? `${(img?.size / 1024).toFixed(2)} KB`
                                : `${(img?.size / (1024 * 1024)).toFixed(
                                    2
                                  )} MB`}
                            </span>
                          </div>
                        )}

                        {/* show click to upload button */}
                        {!localImg?.url && !img?.url && (
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
                        disabled={isUploadFileLoading || isUpdateProfileLoading}
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
                      className="min-h-[100px] md:min-h-[80px] lg:min-h-[64px]"
                      {...field}
                      disabled={isUploadFileLoading || isUpdateProfileLoading}
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
                        disabled={isUploadFileLoading || isUpdateProfileLoading}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            {/* resume url field */}
            <FormField
              control={form.control}
              name="resume_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resume Drive Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.drive.google.com"
                      {...field}
                      disabled={isUploadFileLoading || isUpdateProfileLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-fit ml-auto py-4 px-4 sm:px-6">
            <Button
              type="submit"
              disabled={isUploadFileLoading || isUpdateProfileLoading}
            >
              Save
              {(isUploadFileLoading || isUpdateProfileLoading) && (
                <Loader size={16} className="animate-spin ml-2" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ManageProfileForm;
