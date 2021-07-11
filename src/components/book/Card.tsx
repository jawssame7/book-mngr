import { FC } from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Book from "../../model/Book";

type Props = {
  book: Book;
};

const BookCard: FC<Props> = (props) => {
  console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.book.title}</Card.Header>
        <Card.Description>{props.book.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default BookCard;
