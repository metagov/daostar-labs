/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDAO = /* GraphQL */ `
  mutation CreateDAO(
    $input: CreateDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    createDAO(input: $input, condition: $condition) {
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
export const updateDAO = /* GraphQL */ `
  mutation UpdateDAO(
    $input: UpdateDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    updateDAO(input: $input, condition: $condition) {
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
export const deleteDAO = /* GraphQL */ `
  mutation DeleteDAO(
    $input: DeleteDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    deleteDAO(input: $input, condition: $condition) {
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
