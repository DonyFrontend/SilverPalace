import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { newsTC } from "../model/service/news.service";
import { SkeletonComponent } from "@/widgets/skeleton/ui/Skeleton";
import { NewsCard } from "@/shared/ui/news-card";

const News = () => {
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(newsTC());
  }, [dispatch]);

  console.log(data[0]);
  if (error) {
    return <h1>Error</h1>
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-5 mt-main text-white">
      <h1 className="text-[30px] font-bold">Недавние новости</h1>
      <section className="grid grid-cols-3 auto-rows-auto gap-article">
        {loading ? (
          <>
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
          </>
        ) : (
          <NewsCard data={data[0]} />
          // ""
        )}
      </section>
    </div>
  );
};

export default News;
