import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	dataMutations,
	dataQueries,
	dataTypeDef
} from './swarch2022ii/categories/typeDefs';

import dataResolvers from './swarch2022ii/categories/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		dataTypeDef,
	],
	[
		dataQueries
	],
	[
		dataMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		dataResolvers	
	)
});
