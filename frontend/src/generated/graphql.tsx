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
  desk_name: Scalars['String'];
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
};

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', name?: string | null | undefined, email?: string | null | undefined } };

export type GetCardsByDeskQueryVariables = Exact<{
  desk_name: Scalars['String'];
}>;


export type GetCardsByDeskQuery = { __typename?: 'Query', getCardsByDesk: Array<{ __typename?: 'Card', card_name: string, card_id: number }> };

export type CreateCardMutationVariables = Exact<{
  cardInputData: CardInputData;
}>;


export type CreateCardMutation = { __typename?: 'Mutation', createCard?: { __typename?: 'CardError', path?: string | null | undefined, message?: string | null | undefined } | null | undefined };

export type CreateDeskMutationVariables = Exact<{
  desk_name: Scalars['String'];
}>;


export type CreateDeskMutation = { __typename?: 'Mutation', createDesk?: { __typename?: 'DeskError', path?: string | null | undefined, message?: string | null | undefined } | null | undefined };

export type GetDesksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDesksQuery = { __typename?: 'Query', getDesks?: Array<{ __typename?: 'Desk', name?: string | null | undefined }> | null | undefined };

export type RemoveDeskMutationVariables = Exact<{
  desk_name: Scalars['String'];
}>;


export type RemoveDeskMutation = { __typename?: 'Mutation', removeDesk?: { __typename?: 'DeskError', path?: string | null | undefined, message?: string | null | undefined } | null | undefined };

export type EditDeskMutationVariables = Exact<{
  old_desk_name: Scalars['String'];
  new_desk_name: Scalars['String'];
}>;


export type EditDeskMutation = { __typename?: 'Mutation', editDesk?: { __typename?: 'DeskError', path?: string | null | undefined, message?: string | null | undefined } | null | undefined };

export type LoginMutationVariables = Exact<{
  loginData: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename: 'Token', token?: string | null | undefined } | { __typename: 'UserError', path?: string | null | undefined, message?: string | null | undefined } };

export type CreateUserMutationVariables = Exact<{
  registerData: RegisterInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename: 'Token', token?: string | null | undefined } | { __typename: 'UserError', path?: string | null | undefined, message?: string | null | undefined } | null | undefined };


export const GetUserDocument = gql`
    query getUser {
  getUser {
    name
    email
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetCardsByDeskDocument = gql`
    query getCardsByDesk($desk_name: String!) {
  getCardsByDesk(desk_name: $desk_name) {
    card_name
    card_id
  }
}
    `;

/**
 * __useGetCardsByDeskQuery__
 *
 * To run a query within a React component, call `useGetCardsByDeskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCardsByDeskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCardsByDeskQuery({
 *   variables: {
 *      desk_name: // value for 'desk_name'
 *   },
 * });
 */
export function useGetCardsByDeskQuery(baseOptions: Apollo.QueryHookOptions<GetCardsByDeskQuery, GetCardsByDeskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCardsByDeskQuery, GetCardsByDeskQueryVariables>(GetCardsByDeskDocument, options);
      }
export function useGetCardsByDeskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCardsByDeskQuery, GetCardsByDeskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCardsByDeskQuery, GetCardsByDeskQueryVariables>(GetCardsByDeskDocument, options);
        }
export type GetCardsByDeskQueryHookResult = ReturnType<typeof useGetCardsByDeskQuery>;
export type GetCardsByDeskLazyQueryHookResult = ReturnType<typeof useGetCardsByDeskLazyQuery>;
export type GetCardsByDeskQueryResult = Apollo.QueryResult<GetCardsByDeskQuery, GetCardsByDeskQueryVariables>;
export const CreateCardDocument = gql`
    mutation createCard($cardInputData: CardInputData!) {
  createCard(cardInputData: $cardInputData) {
    path
    message
  }
}
    `;
export type CreateCardMutationFn = Apollo.MutationFunction<CreateCardMutation, CreateCardMutationVariables>;

/**
 * __useCreateCardMutation__
 *
 * To run a mutation, you first call `useCreateCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCardMutation, { data, loading, error }] = useCreateCardMutation({
 *   variables: {
 *      cardInputData: // value for 'cardInputData'
 *   },
 * });
 */
export function useCreateCardMutation(baseOptions?: Apollo.MutationHookOptions<CreateCardMutation, CreateCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCardMutation, CreateCardMutationVariables>(CreateCardDocument, options);
      }
export type CreateCardMutationHookResult = ReturnType<typeof useCreateCardMutation>;
export type CreateCardMutationResult = Apollo.MutationResult<CreateCardMutation>;
export type CreateCardMutationOptions = Apollo.BaseMutationOptions<CreateCardMutation, CreateCardMutationVariables>;
export const CreateDeskDocument = gql`
    mutation createDesk($desk_name: String!) {
  createDesk(desk_name: $desk_name) {
    path
    message
  }
}
    `;
export type CreateDeskMutationFn = Apollo.MutationFunction<CreateDeskMutation, CreateDeskMutationVariables>;

/**
 * __useCreateDeskMutation__
 *
 * To run a mutation, you first call `useCreateDeskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeskMutation, { data, loading, error }] = useCreateDeskMutation({
 *   variables: {
 *      desk_name: // value for 'desk_name'
 *   },
 * });
 */
export function useCreateDeskMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeskMutation, CreateDeskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDeskMutation, CreateDeskMutationVariables>(CreateDeskDocument, options);
      }
export type CreateDeskMutationHookResult = ReturnType<typeof useCreateDeskMutation>;
export type CreateDeskMutationResult = Apollo.MutationResult<CreateDeskMutation>;
export type CreateDeskMutationOptions = Apollo.BaseMutationOptions<CreateDeskMutation, CreateDeskMutationVariables>;
export const GetDesksDocument = gql`
    query getDesks {
  getDesks {
    name
  }
}
    `;

/**
 * __useGetDesksQuery__
 *
 * To run a query within a React component, call `useGetDesksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDesksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDesksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDesksQuery(baseOptions?: Apollo.QueryHookOptions<GetDesksQuery, GetDesksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDesksQuery, GetDesksQueryVariables>(GetDesksDocument, options);
      }
export function useGetDesksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDesksQuery, GetDesksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDesksQuery, GetDesksQueryVariables>(GetDesksDocument, options);
        }
export type GetDesksQueryHookResult = ReturnType<typeof useGetDesksQuery>;
export type GetDesksLazyQueryHookResult = ReturnType<typeof useGetDesksLazyQuery>;
export type GetDesksQueryResult = Apollo.QueryResult<GetDesksQuery, GetDesksQueryVariables>;
export const RemoveDeskDocument = gql`
    mutation removeDesk($desk_name: String!) {
  removeDesk(desk_name: $desk_name) {
    path
    message
  }
}
    `;
export type RemoveDeskMutationFn = Apollo.MutationFunction<RemoveDeskMutation, RemoveDeskMutationVariables>;

/**
 * __useRemoveDeskMutation__
 *
 * To run a mutation, you first call `useRemoveDeskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDeskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDeskMutation, { data, loading, error }] = useRemoveDeskMutation({
 *   variables: {
 *      desk_name: // value for 'desk_name'
 *   },
 * });
 */
export function useRemoveDeskMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDeskMutation, RemoveDeskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDeskMutation, RemoveDeskMutationVariables>(RemoveDeskDocument, options);
      }
export type RemoveDeskMutationHookResult = ReturnType<typeof useRemoveDeskMutation>;
export type RemoveDeskMutationResult = Apollo.MutationResult<RemoveDeskMutation>;
export type RemoveDeskMutationOptions = Apollo.BaseMutationOptions<RemoveDeskMutation, RemoveDeskMutationVariables>;
export const EditDeskDocument = gql`
    mutation editDesk($old_desk_name: String!, $new_desk_name: String!) {
  editDesk(old_desk_name: $old_desk_name, new_desk_name: $new_desk_name) {
    path
    message
  }
}
    `;
export type EditDeskMutationFn = Apollo.MutationFunction<EditDeskMutation, EditDeskMutationVariables>;

/**
 * __useEditDeskMutation__
 *
 * To run a mutation, you first call `useEditDeskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditDeskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editDeskMutation, { data, loading, error }] = useEditDeskMutation({
 *   variables: {
 *      old_desk_name: // value for 'old_desk_name'
 *      new_desk_name: // value for 'new_desk_name'
 *   },
 * });
 */
export function useEditDeskMutation(baseOptions?: Apollo.MutationHookOptions<EditDeskMutation, EditDeskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditDeskMutation, EditDeskMutationVariables>(EditDeskDocument, options);
      }
export type EditDeskMutationHookResult = ReturnType<typeof useEditDeskMutation>;
export type EditDeskMutationResult = Apollo.MutationResult<EditDeskMutation>;
export type EditDeskMutationOptions = Apollo.BaseMutationOptions<EditDeskMutation, EditDeskMutationVariables>;
export const LoginDocument = gql`
    mutation login($loginData: LoginInput!) {
  loginUser(loginData: $loginData) {
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginData: // value for 'loginData'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
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