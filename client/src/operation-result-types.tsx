/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface loginMutationVariables {
  email: string,
  password: string,
};

export interface loginMutation {
  login:  Array< {
    path: string,
    message: string,
  } > | null,
};

export interface registerMutationVariables {
  email: string,
  password: string,
};

export interface registerMutation {
  register:  Array< {
    message: string,
  } > | null,
};
