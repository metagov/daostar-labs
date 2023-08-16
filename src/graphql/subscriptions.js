/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDAO = /* GraphQL */ `
  subscription OnCreateDAO($filter: ModelSubscriptionDAOFilterInput) {
    onCreateDAO(filter: $filter) {
      id
      searchField
      name
      treasuryAddresses {
        address
        description
        __typename
      }
      tokenAddresses {
        address
        description
        __typename
      }
      factories
      fora
      formationDate
      reviewDate
      status
      type
      amlStatus
      legalRepresentative {
        name
        contact
        __typename
      }
      registrations
      presence
      exclusions
      wrappers {
        name
        jurisdiction
        regulator
        functions
        __typename
      }
      contact {
        name
        email
        phone
        company
        role
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDAO = /* GraphQL */ `
  subscription OnUpdateDAO($filter: ModelSubscriptionDAOFilterInput) {
    onUpdateDAO(filter: $filter) {
      id
      searchField
      name
      treasuryAddresses {
        address
        description
        __typename
      }
      tokenAddresses {
        address
        description
        __typename
      }
      factories
      fora
      formationDate
      reviewDate
      status
      type
      amlStatus
      legalRepresentative {
        name
        contact
        __typename
      }
      registrations
      presence
      exclusions
      wrappers {
        name
        jurisdiction
        regulator
        functions
        __typename
      }
      contact {
        name
        email
        phone
        company
        role
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDAO = /* GraphQL */ `
  subscription OnDeleteDAO($filter: ModelSubscriptionDAOFilterInput) {
    onDeleteDAO(filter: $filter) {
      id
      searchField
      name
      treasuryAddresses {
        address
        description
        __typename
      }
      tokenAddresses {
        address
        description
        __typename
      }
      factories
      fora
      formationDate
      reviewDate
      status
      type
      amlStatus
      legalRepresentative {
        name
        contact
        __typename
      }
      registrations
      presence
      exclusions
      wrappers {
        name
        jurisdiction
        regulator
        functions
        __typename
      }
      contact {
        name
        email
        phone
        company
        role
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
