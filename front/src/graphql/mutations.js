/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPortfolio = /* GraphQL */ `
  mutation CreatePortfolio(
    $input: CreatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    createPortfolio(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      imageURLs
      portfolioURL
      description
      comments {
        items {
          id
          portfolioID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user
    }
  }
`;
export const updatePortfolio = /* GraphQL */ `
  mutation UpdatePortfolio(
    $input: UpdatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    updatePortfolio(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      imageURLs
      portfolioURL
      description
      comments {
        items {
          id
          portfolioID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user
    }
  }
`;
export const deletePortfolio = /* GraphQL */ `
  mutation DeletePortfolio(
    $input: DeletePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    deletePortfolio(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      imageURLs
      portfolioURL
      description
      comments {
        items {
          id
          portfolioID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      codeName
      profile
      roles
      portfolios {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          portfolioID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      codeName
      profile
      roles
      portfolios {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          portfolioID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      codeName
      profile
      roles
      portfolios {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          portfolioID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          portfolioID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user
    }
  }
`;
export const createPortfolioOwner = /* GraphQL */ `
  mutation CreatePortfolioOwner(
    $input: CreatePortfolioOwnerInput!
    $condition: ModelPortfolioOwnerConditionInput
  ) {
    createPortfolioOwner(input: $input, condition: $condition) {
      id
      userID
      portfolioID
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePortfolioOwner = /* GraphQL */ `
  mutation UpdatePortfolioOwner(
    $input: UpdatePortfolioOwnerInput!
    $condition: ModelPortfolioOwnerConditionInput
  ) {
    updatePortfolioOwner(input: $input, condition: $condition) {
      id
      userID
      portfolioID
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePortfolioOwner = /* GraphQL */ `
  mutation DeletePortfolioOwner(
    $input: DeletePortfolioOwnerInput!
    $condition: ModelPortfolioOwnerConditionInput
  ) {
    deletePortfolioOwner(input: $input, condition: $condition) {
      id
      userID
      portfolioID
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserLikePortfolio = /* GraphQL */ `
  mutation CreateUserLikePortfolio(
    $input: CreateUserLikePortfolioInput!
    $condition: ModelUserLikePortfolioConditionInput
  ) {
    createUserLikePortfolio(input: $input, condition: $condition) {
      id
      userID
      portfolioID
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserLikePortfolio = /* GraphQL */ `
  mutation UpdateUserLikePortfolio(
    $input: UpdateUserLikePortfolioInput!
    $condition: ModelUserLikePortfolioConditionInput
  ) {
    updateUserLikePortfolio(input: $input, condition: $condition) {
      id
      userID
      portfolioID
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserLikePortfolio = /* GraphQL */ `
  mutation DeleteUserLikePortfolio(
    $input: DeleteUserLikePortfolioInput!
    $condition: ModelUserLikePortfolioConditionInput
  ) {
    deleteUserLikePortfolio(input: $input, condition: $condition) {
      id
      userID
      portfolioID
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      portfolioID
      userID
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      portfolioID
      userID
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      portfolioID
      userID
      portfolio {
        id
        users {
          nextToken
        }
        likes {
          nextToken
        }
        title
        imageURLs
        portfolioURL
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      user {
        id
        codeName
        profile
        roles
        portfolios {
          nextToken
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        user
      }
      content
      createdAt
      updatedAt
    }
  }
`;
