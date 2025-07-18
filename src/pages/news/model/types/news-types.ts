export interface INew {
  title: {
    ru: string;
    en: string;
    jp: string;
    kr: string;
    cn: string;
  };
  description: {
    ru: string;
    en: string;
    jp: string;
    kr: string;
    cn: string;
  };
  base_image: string;
  date: string;
  author: string;
  likes: number;
  comments: number;
  _id: string;
}

export interface NewsResponce {
  data: INew[];
  total_news: number;
}
