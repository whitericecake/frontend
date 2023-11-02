import { Skeleton } from "@nextui-org/react";

const SkeletonProject = () => {
  return (
    <section className="flex flex-col relative gap-4">
      <div className="w-full flex items-center gap-4">
        <div className="w-full flex flex-col gap-1.5 ">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-2 w-2/5 rounded-lg" />
          <Skeleton className="h-2 w-2/5 rounded-lg" />
          <Skeleton className="h-2 w-2/5 rounded-lg" />
          <Skeleton className="h-2 w-2/5 rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-2 w-4/5 rounded-lg" />
        <Skeleton className="h-2 w-4/5 rounded-lg" />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-2/5 rounded-lg" />
        <Skeleton className="h-20 w-5/5 rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-2/5 rounded-lg" />
        <Skeleton className="h-20 w-5/5 rounded-lg" />
      </div>
    </section>
  );
};
export default SkeletonProject;
