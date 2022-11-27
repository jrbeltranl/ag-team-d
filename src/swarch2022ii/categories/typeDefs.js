export const trainingDataTypeDef = `
  type trainingData {
      Category: String!
      Label: String!
      Url: String!
  }
  type trainingDataResponse{
    status: String!
    data: [trainingData!]
  }
  input trainingDataInput {
      category: String!
      label: String!
      url: String!
  }`;

export const trainingDataQueries = `
      allTrainingData: trainingDataResponse!
  `;

export const trainingDataMutations = `
    createTrainingData(trainingData: trainingDataInput!): trainingData!
`;

