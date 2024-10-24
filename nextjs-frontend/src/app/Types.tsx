export interface Food {
  id: number;
  documentId: string;
  name: string;
  cover: {
    name: string;
    url: string;
  };
}

export interface ImageI {
  id: number;
  documentId: string;
  name: string;
  caption: string;
  alternativeText: string;
  url: string;
}
