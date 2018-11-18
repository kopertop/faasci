/**
 * Basic tests
 */
describe('create', () => {
	const create = require('./create').create;
	it('Should include a create function', () => {
		expect(create).toBeDefined();
	});
});
