export const trainingDataTypeDef = `
  type trainingData {
      category: String!
      label: String!
      url: String!
      id: String!
  }
  input trainingDataInput {
      category: String!
      label: String!
      url: String!
  }`;

export const trainingDataQueries = `
      allTrainingData: [trainingData]!
  `;

export const trainingDataMutations = `
    createTrainingData(trainingData: trainingDataInput!): trainingData!
`;

