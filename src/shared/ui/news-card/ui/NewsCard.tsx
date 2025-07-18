import type { INew } from "@/pages/news/model/types/news-types";
import { instance } from "@/shared/api/instance";
import type { Languages } from "@/shared/lang/i18n/i18n";
import { useTranslation } from "react-i18next";

const NewsCard = ({ data }: { data: INew }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as Languages;
  return (
    <article className="flex flex-col gap-y-2 rounded-2xl overflow-hidden border border-white">
      <img src={instance.getUri() + "/image/" + data?.base_image} alt="Image" />
      <div>
        <h4>{data?.title[lang]}</h4>
      </div>
    </article>
  );
};

export { NewsCard };
