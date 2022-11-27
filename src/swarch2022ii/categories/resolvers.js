import { generalRequest, getRequest } from '../../utilities';
import { firebaseFunctionUrl, trainingDataEntryPoint, userUrl, userPort, userEntryPoint } from './server';

const imageDataMsURL = `https://${firebaseFunctionUrl}/${trainingDataEntryPoint}`;
const userMsURL = `http://${userUrl}:${userPort}/${userEntryPoint}`;


const resolvers = {
	Query: {
		allTrainingData: (_) =>
			getRequest(imageDataMsURL, ''),
		allUserData: (_) =>
			getRequest(userMsURL,'')
	},
	Mutation: {
		createTrainingData: (_, { trainingData }) =>
			generalRequest(`${imageDataMsURL}/`, 'POST', trainingData)
	}
};

export default resolvers;
