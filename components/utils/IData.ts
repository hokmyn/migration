export type DataNews = {
  author: string;
  description: string;
  publishedAt: string;
  source: {
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

export type DataSources = {
  id: string;
  name: string;
};

export interface IData {
  sources: DataSources[];
  articles: DataNews[];
}
