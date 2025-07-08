import { SkeletonComponent } from "@/widgets/skeleton/ui/Skeleton";

const Main = () => {
  return (
    <div className="mt-main flex flex-col items-center gap-y-5 text-white">
      <div className="grid grid-cols-3 auto-rows-auto gap-[40px]">
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
      </div>
    </div>
  );
};

export { Main };
