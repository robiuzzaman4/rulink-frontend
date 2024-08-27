import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DESIGN_SKILLS,
  DEVELOPMENT_SKILLS,
  MARKETING_SKILLS,
} from "@/constants/skills";
import React, { useState } from "react";
import { toast } from "sonner";

interface AddCustomSkillModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  handleSelectSkill: (skill: string) => void;
  selectedSkills: string[];
}

const AddCustomSkillModal = ({
  open,
  setOpen,
  handleSelectSkill,
  selectedSkills,
}: AddCustomSkillModalProps) => {
  // === custom skill state ===
  const [customSkill, setCustomSkill] = useState("");

  // === handle select custom skill ===
  const handleSelectCustomSkill = () => {
    if (selectedSkills?.includes(customSkill)) {
      toast.error("This skill is already selected.");
      return;
    }

    if (DEVELOPMENT_SKILLS?.includes(customSkill)) {
      toast.error("This skill is already in the development skill preset.");
      return;
    }
    if (DESIGN_SKILLS?.includes(customSkill)) {
      toast.error("This skill is already in the design skill preset.");
      return;
    }
    if (MARKETING_SKILLS?.includes(customSkill)) {
      toast.error("This skill is already in the marketing skill preset.");
      return;
    }

    handleSelectSkill(customSkill);
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Custom Skill</DialogTitle>
            <DialogDescription className="text-rulink-info">
              After adding make sure you are saving your changes.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2">
            <Label htmlFor="skillname">Skill Name</Label>
            <Input
              id="skillname"
              placeholder="Enter your custom skill"
              className="w-full"
              onChange={(e) => setCustomSkill(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button onClick={handleSelectCustomSkill}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCustomSkillModal;
