/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDAO = /* GraphQL */ `
  query GetDAO($id: ID!) {
    getDAO(id: $id) {
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
export const listDAOS = /* GraphQL */ `
  query ListDAOS(
    $filter: ModelDAOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDAOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
