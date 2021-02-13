/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPortfolio = /* GraphQL */ `
  query GetPortfolio($id: ID!) {
    getPortfolio(id: $id) {
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
export const listPortfolios = /* GraphQL */ `
  query ListPortfolios(
    $filter: ModelPortfolioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPortfolioOwner = /* GraphQL */ `
  query GetPortfolioOwner($id: ID!) {
    getPortfolioOwner(id: $id) {
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
export const listPortfolioOwners = /* GraphQL */ `
  query ListPortfolioOwners(
    $filter: ModelPortfolioOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolioOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        portfolioID
        user {
          id
          codeName
          profile
          roles
          createdAt
          updatedAt
          user
        }
        portfolio {
          id
          title
          imageURLs
          portfolioURL
          description
          createdAt
          updatedAt
          user
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserLikePortfolio = /* GraphQL */ `
  query GetUserLikePortfolio($id: ID!) {
    getUserLikePortfolio(id: $id) {
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
export const listUserLikePortfolios = /* GraphQL */ `
  query ListUserLikePortfolios(
    $filter: ModelUserLikePortfolioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLikePortfolios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        portfolioID
        user {
          id
          codeName
          profile
          roles
          createdAt
          updatedAt
          user
        }
        portfolio {
          id
          title
          imageURLs
          portfolioURL
          description
          createdAt
          updatedAt
          user
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        portfolioID
        userID
        portfolio {
          id
          title
          imageURLs
          portfolioURL
          description
          createdAt
          updatedAt
          user
        }
        user {
          id
          codeName
          profile
          roles
          createdAt
          updatedAt
          user
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchPortfolios = /* GraphQL */ `
  query SearchPortfolios(
    $filter: SearchablePortfolioFilterInput
    $sort: SearchablePortfolioSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPortfolios(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
