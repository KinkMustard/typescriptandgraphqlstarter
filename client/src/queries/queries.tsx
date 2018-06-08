import { gql } from "apollo-boost";

// const getAuthors = gql`
//   query getAuthors {
//     authors {
//       name
//       id
//     }
//   }
// `;

// const getBooks = gql`
//   query getBooks {
//     books {
//       name
//       id
//     }
//   }
// `;

const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`;

const register = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      message
    }
  }
`;

// const getBook = gql`
//   query getBook($id: ID) {
//     book(id: $id) {
//       id
//       name
//       genre
//       author {
//         id
//         name
//         age
//         books {
//           name
//           id
//         }
//       }
//     }
//   }
// `;

export { login, register };
