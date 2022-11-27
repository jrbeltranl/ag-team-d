import { generalRequest, getRequest } from '../../utilities';
import { firebaseFunctionUrl, trainingDataEntryPoint } from './server';

const URL = `https://${firebaseFunctionUrl}/${trainingDataEntryPoint}`;
console.log(URL);

const resolvers = {
	Query: {
		allTrainingData: (_) =>
			getRequest(URL, '')
	},
	Mutation: {
		createTrainingData: (_, { trainingData }) =>
			generalRequest(`${URL}/`, 'POST', trainingData)
	}
};

export default resolvers;
