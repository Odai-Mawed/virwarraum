/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      vorname
      nachname
      versicherungsnummer
      wartezeit
      zeitBeimArzt
      createdAt
      updatedAt
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vorname
        nachname
        versicherungsnummer
        wartezeit
        zeitBeimArzt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
