/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface getAuthorsQuery {
  authors:  Array< {
    name: string | null,
    id: string | null,
  } | null > | null,
};

export interface getBooksQuery {
  books:  Array< {
    name: string | null,
    id: string | null,
  } | null > | null,
};

export interface addBookMutationVariables {
  name: string,
  genre: string,
  authorId: string,
};

export interface addBookMutation {
  addBook:  {
    name: string | null,
    id: string | null,
  } | null,
};

export interface addAuthorMutationVariables {
  name: string,
  age: number,
};

export interface addAuthorMutation {
  addAuthor:  {
    name: string | null,
    age: number | null,
  } | null,
};

export interface getBookQueryVariables {
  id?: string | null,
};

export interface getBookQuery {
  book:  {
    id: string | null,
    name: string | null,
    genre: string | null,
    author:  {
      id: string | null,
      name: string | null,
      age: number | null,
      books:  Array< {
        name: string | null,
        id: string | null,
      } | null > | null,
    } | null,
  } | null,
};
