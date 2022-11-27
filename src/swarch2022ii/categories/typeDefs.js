export const trainingDataTypeDef = `
  type trainingData {
      category: String!
      label: String!
      url: String!
      id: String!
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

