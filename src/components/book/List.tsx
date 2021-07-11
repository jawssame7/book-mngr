import { useState, Props, FC } from "react";
import { Grid, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import BookCard from "./Card";

import Book from "../../model/Book";

const BookList: FC = () => {
  //   const colors = [
  //     "red",
  //     "orange",
  //     "yellow",
  //     "olive",
  //     "green",
  //     "teal",
  //     "blue",
  //     "violet",
  //     "purple",
  //     "pink",
  //     "brown",
  //     "grey",
  //     "black",
  //   ];

  const books = [
    {
      title: "やさしいJava",
      description: '第7版 2019年11月'
    },
  ];

  return (
    <Grid container columns={books.length}>
      {books.map((book: Book) => (
        <Grid.Column key={book}>
          <BookCard book={book}></BookCard>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default BookList;
