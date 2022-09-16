import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateQuestionInput = {
  text: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createQuestion: Question;
  removeQuestion?: Maybe<Question>;
  updateQuestion: Question;
};


export type MutationCreateQuestionArgs = {
  createQuestionInput: CreateQuestionInput;
};


export type MutationRemoveQuestionArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateQuestionArgs = {
  updateQuestionInput: UpdateQuestionInput;
};

export type Query = {
  __typename?: 'Query';
  question?: Maybe<Question>;
  questions: Array<Maybe<Question>>;
};


export type QueryQuestionArgs = {
  id: Scalars['Int'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type UpdateQuestionInput = {
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type GetQuestionQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetQuestionQuery = { __typename?: 'Query', question?: { __typename?: 'Question', id: number, text: string } | null };


export const GetQuestionDocument = gql`
    query getQuestion($id: Int!) {
  question(id: $id) {
    id
    text
  }
}
    `;

export function useGetQuestionQuery(options: Omit<Urql.UseQueryArgs<GetQuestionQueryVariables>, 'query'>) {
  return Urql.useQuery<GetQuestionQuery, GetQuestionQueryVariables>({ query: GetQuestionDocument, ...options });
};