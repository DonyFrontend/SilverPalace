import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { charactersTC } from "../model/service/characters.service";
import { SkeletonComponent } from "@/widgets/skeleton/ui/Skeleton";
import { CharactersCard } from "@/widgets/Characters-card";
import { useTranslation } from "react-i18next";

type Props = {
  limit?: number;
};

const Characters = ({ limit }: Props) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(charactersTC({ limit }));
  }, [dispatch, limit]);

  console.log(data[0]);
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-main mt-main flex flex-col items-center gap-y-5 text-white">
        <h1 className="text-[30px] font-bold">{t("Characters")}</h1>
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
            data.map((item) => <CharactersCard data={item} key={item._id} />)
          )}
        </section>
      </div>
    </div>
  );
};

export default Characters;
