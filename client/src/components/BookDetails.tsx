import * as React from "react";
import { ChildProps, graphql } from "react-apollo";
import { getBookQuery, getBookQueryVariables } from "../operation-result-types";
import { getBook } from "../queries/queries";
import "./BookDetails.css";

interface Props {
  bookId: number;
}

class BookDetails extends React.Component<
  ChildProps<Props, getBookQuery, getBookQueryVariables>
> {
  public displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  }
  public render() {
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql<Props, getBookQuery>(getBook, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
