import { CategoryType } from "@/types";
import { Skeleton } from "@nextui-org/react";
import { SkeletonPortfolio, SkeletonProject, SkeletonResume } from ".";

const SkeletonPreview = ({ formType }: { formType: CategoryType }) => {
  switch (formType) {
    case "portfolio":
      return <SkeletonPortfolio />;
    case "resume":
      return <SkeletonResume />;
    case "project":
      return <SkeletonProject />;

    default:
      return (
        <>
          <div className="w-full flex items-center gap-10">
            <div>
              <Skeleton className="flex rounded-full w-28 h-28" />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <Skeleton className="h-5 w-2/5 rounded-lg" />
              <Skeleton className="h-3 w-5/5 rounded-lg" />
              <Skeleton className="h-3 w-5/5 rounded-lg" />
              <Skeleton className="h-3 w-5/5 rounded-lg" />
              <Skeleton className="h-3 w-5/5 rounded-lg" />
            </div>
          </div>
        </>
      );
  }
};
export default SkeletonPreview;
