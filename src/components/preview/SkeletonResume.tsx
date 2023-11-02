import { Skeleton } from "@nextui-org/react";

const SkeletonResume = () => {
  return (
    <section className="flex flex-col relative gap-4">
      <div className="w-full flex items-center gap-4">
        <div>
          <Skeleton className="flex rounded-full w-14 h-14" />
        </div>
        <div className="w-full flex flex-col gap-1 ">
          <Skeleton className="h-2 w-2/5 rounded-lg" />
          <Skeleton className="h-1 w-3/5 rounded-lg" />
          <Skeleton className="h-1 w-3/5 rounded-lg" />
          <Skeleton className="h-1 w-3/5 rounded-lg" />
          <Skeleton className="h-1 w-3/5 rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Skeleton className="h-3 w-4/5 rounded-lg" />
        <Skeleton className="h-2 w-3/5 rounded-lg" />
        <Skeleton className="h-2 w-3/5 rounded-lg" />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-3 w-2/5 rounded-lg" />
        <Skeleton className="h-2 w-3/5 rounded-lg" />
        <Skeleton className="h-2 w-3/5 rounded-lg" />
        <Skeleton className="h-2 w-3/5 rounded-lg" />
        <Skeleton className="h-2 w-3/5 rounded-lg" />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-3 w-4/5 rounded-lg" />
        <Skeleton className="h-2 w-3/5 rounded-lg" />
        <Skeleton className="h-2 w-3/5 rounded-lg" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap w-full gap-3">
          <div className="flex flex-col gap-2 w-1/4">
            <Skeleton className="h-10 w-full rounded-sm" />
            <Skeleton className="h-2 w-full rounded-sm" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <Skeleton className="h-10 w-full rounded-sm" />
            <Skeleton className="h-2 w-full rounded-sm" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <Skeleton className="h-10 w-full rounded-sm" />
            <Skeleton className="h-2 w-full rounded-sm" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <Skeleton className="h-10 w-full rounded-sm" />
            <Skeleton className="h-2 w-full rounded-sm" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <Skeleton className="h-10 w-full rounded-sm" />
            <Skeleton className="h-2 w-full rounded-sm" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <Skeleton className="h-10 w-full rounded-sm" />
            <Skeleton className="h-2 w-full rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkeletonResume;
