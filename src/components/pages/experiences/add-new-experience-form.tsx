import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateExperienceSchema } from "@/schemas";
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
import { Loader } from "lucide-react";
import { useUpdateUserMutation } from "@/features/user-slice";
import { toast } from "sonner";
import useUserByEmail from "@/hooks/useUserByEmail";
import { TExperience } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { getYearsInReverse } from "@/utils/getYearsInReverse";
import { MONTHS } from "@/constants/months";

export const YEARS = getYearsInReverse();

const AddNewExperiencForm = () => {
  // === currently working checkbox state and function ===
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  // === get uesr infor from db ===
  const { id, experiences } = useUserByEmail();

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  // === initialize form ===
  const form = useForm<z.infer<typeof CreateExperienceSchema>>({
    resolver: zodResolver(CreateExperienceSchema),
    defaultValues: {
      company: "",
      position: "",
      start_month: "",
      start_year: "",
      end_month: "",
      end_year: "",
      location_type: undefined,
      job_type: undefined,
    },
  });

  // === hanlde update profile ===
  const hanldeUpdateProfile = async (
    data: z.infer<typeof CreateExperienceSchema>
  ) => {
    // make end_date and checkbox validation
    if (data?.end_month === "" && data?.end_year === "" && !isChecked) {
      toast.error("Please provide an End date or checked 'Currently working'");
      form.reset({
        company: "",
        position: "",
        start_month: "",
        start_year: "",
        end_month: "",
        end_year: "",
        location_type: undefined,
        job_type: undefined,
      });
      setIsChecked(false);
      return;
    }

    // create experience validataion
    if (experiences && experiences?.length >= 3) {
      toast.error("You can only add up to three experiences.");
      form.reset({
        company: "",
        position: "",
        start_month: "",
        start_year: "",
        end_month: "",
        end_year: "",
        location_type: undefined,
        job_type: undefined,
      });
      setIsChecked(false);
      return;
    }

    const startDate = `${data?.start_month} ${data?.start_year}`;
    const endDate =
      data?.end_month && data?.end_year && !isChecked
        ? `${data?.end_month} ${data?.end_year}`
        : isChecked
        ? "PRESENT"
        : "";

    const payload = {
      experiences: [
        ...(experiences as TExperience[]),
        {
          company: data?.company,
          position: data?.position,
          start_date: startDate,
          end_date: endDate,
          location_type: data?.location_type,
          job_type: data?.job_type,
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
        toast.success("Experience Added.");
        form.reset({
          company: "",
          position: "",
          start_month: "",
          start_year: "",
          end_month: "",
          end_year: "",
          location_type: undefined,
          job_type: undefined,
        });
        setIsChecked(false);
      } else {
        toast.error("Failed to add experience. Please try again.");
        setIsChecked(false);
      }
    } catch (error) {
      console.log("UPDATE EXPERIENCES ERROR", error);
      setIsChecked(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(hanldeUpdateProfile)}
        className="w-full px-1 pb-1"
      >
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">
            Add New Experience
          </h5>
          <div className="w-full grid xl:grid-cols-2 gap-4">
            {/* company field */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Microsoft Corporation"
                      {...field}
                      disabled={isUpdateProfileLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* postion field */}
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Software Engineer"
                      {...field}
                      disabled={isUpdateProfileLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* job type field */}
            <FormField
              control={form.control}
              name="job_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <Select
                    disabled={isUpdateProfileLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value || ""}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FULL_TIME">Full Time</SelectItem>
                      <SelectItem value="PART_TIME">Part Time</SelectItem>
                      <SelectItem value="INTERNSHIP">Internship</SelectItem>
                      <SelectItem value="CONTRACTUAL">Contractual</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* location type field */}
            <FormField
              control={form.control}
              name="location_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Type</FormLabel>
                  <Select
                    disabled={isUpdateProfileLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value || ""}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ONSITE">Onsite</SelectItem>
                      <SelectItem value="REMOTE">Remote</SelectItem>
                      <SelectItem value="HYBRID">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* start month  and year field */}
            <div className="w-full grid lg:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="start_month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Month</FormLabel>
                    <Select
                      disabled={isUpdateProfileLoading}
                      onValueChange={field.onChange}
                      defaultValue={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select start month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {MONTHS?.map((month, index) => (
                          <SelectItem key={index} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="start_year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Year</FormLabel>
                    <Select
                      disabled={isUpdateProfileLoading}
                      onValueChange={field.onChange}
                      defaultValue={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select start year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {YEARS?.map((year, index) => (
                          <SelectItem key={index} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* end month  and year field */}
            <div className="w-full grid lg:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="end_month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Month</FormLabel>
                    <Select
                      disabled={isUpdateProfileLoading || isChecked}
                      onValueChange={field.onChange}
                      defaultValue={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select end month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {MONTHS?.map((month, index) => (
                          <SelectItem key={index} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="end_year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Year</FormLabel>
                      <Select
                        disabled={isUpdateProfileLoading || isChecked}
                        onValueChange={field.onChange}
                        defaultValue={field.value || ""}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select end year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {YEARS?.map((year, index) => (
                            <SelectItem key={index} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-end space-x-2">
                  <Checkbox
                    id="currently_working"
                    checked={isChecked}
                    onCheckedChange={handleCheckedChange}
                  />
                  <label
                    htmlFor="currently_working"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Currently working there
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit ml-auto py-4 px-4 sm:px-6">
          <Button type="submit" disabled={isUpdateProfileLoading}>
            Save
            {isUpdateProfileLoading && (
              <Loader size={16} className="animate-spin ml-2" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddNewExperiencForm;
