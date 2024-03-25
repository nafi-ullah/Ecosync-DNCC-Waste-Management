import { Button } from "@/components/ui/button";
import { Plus, Truck } from "lucide-react";
import EmptyFillContainer from "../../cards/EmptyFillContainer";

export default function AdminSchedulePanel() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6  max-h-[calc(100vh-60px)] overflow-scroll">
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 grid-flow-row gap-2 md:gap-4 w-full md:h-full max-h-max">
          <div className="col-span-1 row-span-1 min-h-48">
            <EmptyFillContainer>ADD NEW SCHEDULE</EmptyFillContainer>
          </div>
          <div className="col-span-1 row-span-2 min-h-48">
            <EmptyFillContainer>CRITICAL FIRST SCHEDULES</EmptyFillContainer>
          </div>
          <div className="col-span-1 row-span-1 min-h-48">
            <EmptyFillContainer>DISPATCH HISTORY</EmptyFillContainer>
          </div>
        </div>
      </div>
    </main>
  );
}