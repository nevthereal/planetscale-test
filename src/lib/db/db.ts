import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = import.meta.env;

const connection = connect({
	host: DB_HOST,
	username: DB_USERNAME,
	password: DB_PASSWORD
});

export const db = drizzle(connection);
