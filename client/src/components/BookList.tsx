import * as React from "react";
import { ChildProps, graphql } from "react-apollo";
import { getBooksQuery } from "../operation-result-types";
import { getBooks } from "../queries/queries";
import "./BookList.css";

// components
import BookDetails from "./BookDetails";

interface Props {}
class BookList extends React.Component<ChildProps<Props, getBooksQuery>> {
  public state = {
    selected: null
  };

  public displayBooks() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return this.props.data.books.map(book => {
        return (
          <li key={book.id} onClick={e => this.setState({ selected: book.id })}>
            {book.name}
          </li>
        );
      });
    }
  }
  public render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql<Props, getBooksQuery>(getBooks)(BookList);
