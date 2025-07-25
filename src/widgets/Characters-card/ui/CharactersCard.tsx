import type { ICharacters } from "@/pages/characters/model/types/characters-types";
import { getImagePath } from "@/shared/lib/get-file-path";
import { useNavigate } from "react-router-dom";

const CharactersCard = ({ data }: { data: ICharacters }) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`${data?._id}`)}
      className="flex flex-col gap-y-5 hover:brightness-[60%] cursor-pointer"
    >
      <img src={getImagePath(data?.image)} alt={data?.name} className="rounded-2xl" />
      <div className="flex flex-col gap-y-4">
          <h4 className="text-[25px] font-bold">{data?.name}</h4>
          <h2 className="text-xl font-semibold">{data?.title}</h2>
          <h2 className="text-lg font-medium">{data?.gender}</h2>
        <div className="w-full flex justify-start gap-x-7">
          <div className="flex gap-x-1">
            <p>⭐{data?.rarity}</p>
          </div>
          <div className="flex gap-x-1">
            <p>✨{data?.element}</p>
          </div>
          <div className="flex gap-x-1">
            <p>🗡️{data?.weapon}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export { CharactersCard };