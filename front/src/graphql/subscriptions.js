/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePortfolio = /* GraphQL */ `
  subscription OnCreatePortfolio {
    onCreatePortfolio {
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
export const onUpdatePortfolio = /* GraphQL */ `
  subscription OnUpdatePortfolio {
    onUpdatePortfolio {
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
export const onDeletePortfolio = /* GraphQL */ `
  subscription OnDeletePortfolio {
    onDeletePortfolio {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePortfolioOwner = /* GraphQL */ `
  subscription OnCreatePortfolioOwner {
    onCreatePortfolioOwner {
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
export const onUpdatePortfolioOwner = /* GraphQL */ `
  subscription OnUpdatePortfolioOwner {
    onUpdatePortfolioOwner {
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
export const onDeletePortfolioOwner = /* GraphQL */ `
  subscription OnDeletePortfolioOwner {
    onDeletePortfolioOwner {
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
export const onCreateUserLikePortfolio = /* GraphQL */ `
  subscription OnCreateUserLikePortfolio {
    onCreateUserLikePortfolio {
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
export const onUpdateUserLikePortfolio = /* GraphQL */ `
  subscription OnUpdateUserLikePortfolio {
    onUpdateUserLikePortfolio {
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
export const onDeleteUserLikePortfolio = /* GraphQL */ `
  subscription OnDeleteUserLikePortfolio {
    onDeleteUserLikePortfolio {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
