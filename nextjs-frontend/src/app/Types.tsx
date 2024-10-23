export interface Food {
  id: number;
  name: string;
  cover: {
    name: string;
    url: string;
  };
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  caption: string;
  alternativeText: string;
  url: string;
}
