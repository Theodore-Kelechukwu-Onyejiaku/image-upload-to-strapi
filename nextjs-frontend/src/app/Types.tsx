export interface FoodEntry {
  id: number;
  documentId: string;
  name: string;
  cover: {
    name: string;
    url: string;
  };
}

export interface ImageEntry {
  id: number;
  documentId: string;
  name: string;
  caption: string;
  alternativeText: string;
  url: string;
}
