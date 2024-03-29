import { Button } from "@/components/ui/button";

export const IconButton = () => {
  return (
    <div className="relative rounded-lg">
      <div className="absolute -inset-1 h-14 w-14 rounded-[8px] bg-secondary opacity-50 blur" />
      <Button className="relative z-10 h-12 w-12 rounded-[8px] border border-primary-400 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-secondary from-0% to-background to-90% font-body text-xl font-bold text-primary ">
        EN
      </Button>
    </div>
  );
};
