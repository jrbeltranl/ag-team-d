import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	trainingDataMutations,
	trainingDataQueries,
	trainingDataTypeDef,
	userTypeDef,
	userQueries
} from './swarch2022ii/categories/typeDefs';

import dataResolvers from './swarch2022ii/categories/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		trainingDataTypeDef
	],
	[ 
		'scalar JSON',
		userTypeDef
	],
	[
		userQueries
	],
	[
		trainingDataQueries
	],
	[
		trainingDataMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		dataResolvers,
	)
});
