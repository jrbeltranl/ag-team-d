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

export const userTypeDef = `
  type user {
    id: Int!
    nombre: String!
    edad: Int!
    correo: String!
    contraseña: String!
    nivelconocimientolenguaje: String!
    ciudad: String!
    niveleducativo: String!
  }
`;

export const userQueries = `
      allUserData: [user!]
  `;



