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

const AddNewProjectForm = () => {
  // === get uesr infor from db ===
  const { id, projects: projectsFromDb } = useUserByEmail();

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
  useEffect(() => {
    if (localImg && localImg?.url) {
      reset({
        title: getValues("title"),
        description: getValues("description"),
        live_url: getValues("live_url"),
        thumbnail_url: localImg?.url as string,
      });
    }
  }, [localImg, reset, getValues]);

  // === hanlde update profile ===
  const hanldeUpdateProfile = async (
    data: z.infer<typeof CreateProjectSchema>
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
          projects: [
            ...(projectsFromDb as TProject[]),
            {
              title: data.title,
              description: data.description,
              thumbnail_url: response?.data?.data?.display_url,
              live_url: data.live_url,
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
            toast.success("Project Added.");
            handleRemoveLocalFile();
            form.reset();
          } else {
            toast.error("Failed to add project. Please try again.");
          }
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(hanldeUpdateProfile)} className="w-full px-1 pb-1">
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
                      disabled={isUploadFileLoading || isUpdateProfileLoading}
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
                      disabled={isUploadFileLoading || isUpdateProfileLoading}
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
                      disabled={isUploadFileLoading || isUpdateProfileLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* thumbnail filed */}
            <FormField
              control={form.control}
              name="thumbnail_url"
              render={({ field }) => (
                <FormItem>
                  <span className="w-full flex items-center justify-between gap-4">
                    <FormLabel className="lg:mt-1 lg:mb-1.5">
                      Thumbnail
                    </FormLabel>
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
                    <div className="relative flex cursor-pointer items-center gap-4 rounded-md border border-input focus-visible:outline-muted-foreground min-h-[70px]">
                      <div
                        onClick={() =>
                          document.getElementById("image-upload")?.click()
                        }
                        className="flex items-center gap-4 w-full px-4"
                      >
                        <Avatar>
                          {localImg?.url && <AvatarImage src={localImg?.url} />}
                          {!localImg?.url && (
                            <div className="h-full w-full grid place-items-center bg-secondary">
                              <Plus size={16} />
                            </div>
                          )}
                        </Avatar>

                        {/* show lcoal thumbnail */}
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

                        {/* show click to upload button */}
                        {!localImg?.url && (
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
          </div>
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
  );
};

export default AddNewProjectForm;
