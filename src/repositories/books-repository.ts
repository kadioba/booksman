import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import connection from "../database";
import prisma from "../database";

export async function getBooks() {
  const books = await prisma.books.findMany();
  return books;
}

export async function getBook(id: number) {
  const book = await prisma.books.findUnique({
    where: {
      id
    }
  });
  return book;
}

export async function createBook(book: CreateBook) {
  await prisma.books.create({
    data: {
      ...book,
      purchaseDate: new Date(book.purchaseDate)
    }
  });

}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  await prisma.books.update({
    where: {
      id: bookId
    },
    data: {
      grade,
      review,
      read: true
    }
  });
}