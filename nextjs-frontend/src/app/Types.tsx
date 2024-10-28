// Image entry data types
export interface ImageEntry {
  id: number;
  documentId: string;
  name: string;
  caption: string;
  alternativeText: string;
  url: string;
}

// food entry data types
export interface FoodEntry {
  id: number;
  documentId: string;
  name: string;
  cover: ImageEntry;
}
