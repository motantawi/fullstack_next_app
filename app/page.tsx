import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        <Plus size={15} className="mr-1" /> New Todo
      </Button>
    </main>
  );
}
