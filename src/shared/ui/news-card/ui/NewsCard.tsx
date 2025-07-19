import type { INew } from "@/pages/news/model/types/news-types";
import { instance } from "@/shared/api/instance";
import type { Languages } from "@/shared/lang/i18n/i18n";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import avatar from "@/shared/assets/icons/avatar.svg";
import like from "@/shared/assets/icons/like.svg";
import comment from "@/shared/assets/icons/comment.svg";

const NewsCard = ({ data }: { data: INew }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as Languages;
  const navigate = useNavigate();

  console.log(instance.getUri() + "/image/" + data?.base_image);
  

  return (
    <article
      onClick={() => navigate(`${data?._id}`)}
      className="flex flex-col gap-y-5 hover:brightness-[60%] cursor-pointer"
    >
      <img
        src={instance.getUri() + "/image/" + data?.base_image}
        alt="Image"
        className="rounded-2xl"
      />
      <div className="flex flex-col gap-y-4">
        <h4 className="text-[25px] font-bold">{data?.title[lang]}</h4>
        <div className="w-full flex justify-start gap-x-7">
          <div className="flex gap-x-1">
            <img src={avatar} alt="Avatar" className="w-[20px]" />
            <p>{data?.author}</p>
          </div>
          <div className="flex gap-x-1">
            <img src={like} alt="Avatar" className="w-[20px]" />
            <p>{data?.likes}</p>
          </div>
          <div className="flex gap-x-1">
            <img src={comment} alt="Avatar" className="w-[20px]" />
            <p>{data?.comments}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export { NewsCard };
