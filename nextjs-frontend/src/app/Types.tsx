// food entry data types
export interface FoodEntry {
  id: number;
  documentId: string;
  name: string;
  cover: {
    name: string;
    url: string;
  };
}

// Image entry data types
export interface ImageEntry {
  id: number;
  documentId: string;
  name: string;
  caption: string;
  alternativeText: string;
  url: string;
}
