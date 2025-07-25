import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { newsTC } from "../model/service/news.service";
import { SkeletonComponent } from "@/widgets/skeleton/ui/Skeleton";
import { NewsCard } from "@/shared/ui/news-card";

type NewsProps = {
  limit?: number;
};

const News = ({ limit }: NewsProps) => {
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(newsTC({ limit }));
  }, [dispatch, limit]);

  console.log(data[0]);
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="w-main flex flex-col items-center justify-center gap-y-5 mt-main text-white">
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
            data.map((item) => <NewsCard data={item} key={item._id} />)
          )}
        </section>
      </div>
    </div>
  );
};

export default News;
