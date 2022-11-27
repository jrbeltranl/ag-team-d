export const dataTypeDef = `
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
  }
  type user {
    id: Int!
    nombre: String!
    edad: Int!
    correo: String!
    nivelconocimientolenguaje: String!
    ciudad: String!
    niveleducativo: String!
  }
  `;

export const dataQueries = `
    allTrainingData: trainingDataResponse!
    allUserData: [user!]
  `;

export const dataMutations = `
    createTrainingData(trainingData: trainingDataInput!): trainingData!
`;




