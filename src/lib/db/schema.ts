import { mysqlTable, mysqlSchema, int, text } from 'drizzle-orm/mysql-core';

export const mainSchema = mysqlSchema('main');

export const usersSchema = mysqlTable('users', {
	id: int('id').primaryKey().autoincrement(),
	name: text('name'),
	email: text('email').unique()
});
