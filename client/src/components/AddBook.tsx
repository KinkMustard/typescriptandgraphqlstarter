import * as React from "react";
import { ChildProps, compose, graphql, MutationFunc } from "react-apollo";
import {
  addBookMutation,
  addBookMutationVariables,
  getAuthorsQuery,
  getBooksQuery
} from "../operation-result-types";
import { addBook, getAuthors, getBooks } from "../queries/queries";

interface Props {
  addBook: MutationFunc<addBookMutation, addBookMutationVariables>;
}

class AddBook extends React.Component<ChildProps<Props, getAuthorsQuery>> {
  public state = {
    authorId: "",
    genre: "",
    name: ""
  };

  public displayAuthors = () => {
    const { data } = this.props;
    const { authors } = data;
    if (data.loading) {
      return <option disabled={true}>Loading authors</option>;
    } else {
      return authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  public submitForm = e => {
    e.preventDefault();
    this.props.addBook({
      refetchQueries: [{ query: getBooks }],
      variables: {
        authorId: this.state.authorId,
        genre: this.state.genre,
        name: this.state.name
      }
    });
  }

  public render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql<Props, getAuthorsQuery>(getAuthors),
  graphql<Props, addBookMutation, addBookMutationVariables>(addBook, {
    name: "addBook"
  })
)(AddBook);
