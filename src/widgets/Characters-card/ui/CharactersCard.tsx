import type { ICharacters } from "@/pages/characters/model/types/characters-types";
import { getImagePath } from "@/shared/lib/get-file-path";

const CharactersCard = ({ data }: { data: ICharacters }) => {
  return (
    <article className="flex flex-col gap-y-2 rounded-2xl overflow-hidden border border-white">
      <div>
        <img src={getImagePath(data?.image)} alt={data?.name} />
        <h4>{data?.name}</h4>
        <p> {data?.gender} </p>
        <p>{data?.description}</p>
        <p> {data?.element} </p>
        <p>{data?.isPlayable} </p>
        <p>{data?.releaseDate}</p>
        <p>{data?.title}</p>
        <p>{data?.updatedAt}</p>
        <p>{data?.rarity}</p>
      </div>
    </article>
  );
};

export { CharactersCard };