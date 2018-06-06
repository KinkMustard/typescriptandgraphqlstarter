import * as React from "react";
import { ChildProps, compose, graphql, MutationFunc } from "react-apollo";
import {
  addAuthorMutation,
  addAuthorMutationVariables,
  getAuthorsQuery,
  getBooksQuery
} from "../operation-result-types";
import { addBook, getAuthors, getBooks } from "../queries/queries";
import "./AddAuthor.css";

interface Props {
  addBook: MutationFunc<addAuthorMutation, addAuthorMutationVariables>;
}

class AddBook extends React.Component<
  ChildProps<Props, getAuthorsQuery, getBooksQuery>
> {
  public state = {
    age: 0,
    authorId: "",
    name: ""
  };

  public submitForm = e => {
    e.preventDefault();
    this.props.addBook({
      refetchQueries: [{ query: getBooks }],
      variables: {
        age: this.state.age,
        name: this.state.name
      }
    });
  }

  public render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Author name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Age:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql<Props, getAuthorsQuery>(getAuthors),
  graphql<Props, addAuthorMutation, addAuthorMutationVariables>(addBook, {
    name: "addBook"
  })
)(AddBook);
