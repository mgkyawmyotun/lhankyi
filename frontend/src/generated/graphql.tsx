import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Card = DateType & {
  __typename?: 'Card';
  card_data_back: Scalars['String'];
  card_data_front: Scalars['String'];
  card_id: Scalars['Float'];
  card_name: Scalars['String'];
  created_at: Scalars['DateTime'];
  desk: Desk;
  updated_at: Scalars['DateTime'];
};

export type CardError = {
  __typename?: 'CardError';
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type CardInputData = {
  card_data_back?: Maybe<Scalars['String']>;
  card_data_front?: Maybe<Scalars['String']>;
  card_name: Scalars['String'];
  desk_name: Scalars['String'];
};

export type DateType = {
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Desk = DeskInterface & {
  __typename?: 'Desk';
  name?: Maybe<Scalars['String']>;
};

export type DeskError = {
  __typename?: 'DeskError';
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type DeskInterface = {
  name?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCard?: Maybe<CardError>;
  createDesk?: Maybe<DeskError>;
  createUser?: Maybe<UserCreateResult>;
  editDesk?: Maybe<DeskError>;
  loginUser: UserCreateResult;
  removeDesk?: Maybe<DeskError>;
};


export type MutationCreateCardArgs = {
  cardInputData: CardInputData;
};


export type MutationCreateDeskArgs = {
  desk_name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  registerData: RegisterInput;
};


export type MutationEditDeskArgs = {
  new_desk_name: Scalars['String'];
  old_desk_name: Scalars['String'];
};


export type MutationLoginUserArgs = {
  loginData: LoginInput;
};


export type MutationRemoveDeskArgs = {
  desk_name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllCards: Array<Card>;
  getCardsByDesk: Array<Card>;
  getDesks?: Maybe<Array<Desk>>;
  getUser: User;
  getUsers?: Maybe<Array<User>>;
};


export type QueryGetCardsByDeskArgs = {
  deck_name: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export type User = UserInterface & {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserCreateResult = Token | UserError;

export type UserError = {
  __typename?: 'UserError';
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type UserInterface = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Exact<{
  registerData: RegisterInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename: 'Token', token?: string | null | undefined } | { __typename: 'UserError', path?: string | null | undefined, message?: string | null | undefined } | null | undefined };


export const CreateUserDocument = gql`
    mutation createUser($registerData: RegisterInput!) {
  createUser(registerData: $registerData) {
    __typename
    ... on UserError {
      path
      message
    }
    ... on Token {
      token
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      registerData: // value for 'registerData'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;