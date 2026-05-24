import { ResponsiveDialog } from "@/components/ui/responsive-dialog";
import { AgentForm } from "./agent-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
}

export const UpdateAgentDialog: React.FC<UpdateAgentDialogProps> = ({
  open,
  onOpenChange,
  initialValues,
}) => {
  return (
    <ResponsiveDialog
      title="Update Agent"
      description="Modify the agent's details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        initialValues={initialValues}
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};
