export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  purchaseDate: Date;
  read: boolean;
  review: string;
  grade: number;
  cover: string;
};

export type CreateBook = Omit<Book, "id" | "read" | "review" | "grade">;