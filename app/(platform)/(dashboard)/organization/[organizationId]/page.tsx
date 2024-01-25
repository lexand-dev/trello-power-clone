import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/Info";
import { BoardList } from "./_components/board-list";

const OrganizationIdPage = async () => {
  return (
    <div className="w-full mb-20">
      <Info isPro />
      <Separator className="my-4" />
      <div>
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationIdPage;
