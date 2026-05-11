"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTRPC } from "@/trpc/client";
import { createAgentSchema } from "../../schemas";
import { AgentGetOne } from "../../types";
import { toast } from "sonner";

interface AgentFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  initialValues?: AgentGetOne;
}

export const AgentForm: React.FC<AgentFormProps> = ({
  onSuccess,
  onCancel,
  initialValues,
}) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const isEdit = !!initialValues?.id;

  const form = useForm<z.infer<typeof createAgentSchema>>({
    resolver: zodResolver(createAgentSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      instructions: initialValues?.instructions ?? "",
    },
  });

  const name = form.watch("name");

  const createAgent = useMutation(
    trpc.agents.create.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.agents.getMany.queryOptions());

        if (initialValues?.id) {
          queryClient.invalidateQueries(
            trpc.agents.getOne.queryOptions({ id: initialValues.id }),
          );
        }

        onSuccess?.();
      },

      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );

  const isPending = createAgent.isPending;

  const onSubmit = form.handleSubmit((values) => {
    if (isEdit) {
      return;
    }

    createAgent.mutate(values);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="flex items-center gap-4 rounded-lg border border-[#d9e8f2] bg-[#f5fbff] p-4">
          <GeneratedAvatar
            seed={name || "Agent"}
            variant="botttsNeutral"
            className="size-14"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-[#0f172a]">
              {name || "Agent avatar"}
            </p>
            <p className="text-xs text-[#667085]">
              The avatar updates from the agent name.
            </p>
          </div>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Support Agent"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what this agent should do during meetings."
                  className="min-h-28 resize-none"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            disabled={isPending}
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isEdit ? "Save changes" : "Create agent"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
