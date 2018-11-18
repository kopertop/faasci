import { handler } from './index';
describe('indexHandler', () => {
	process.env.HANDSHAKE_KEY = 'SECRET-TEST-KEY';
	it('Should throw an error when the SECRET KEY does not match', async () => {
		let errorMessage: string;
		try {
			await handler(<any>{});
		} catch (e) {
			errorMessage = String(e);
		}
		expect(errorMessage).toMatch(/Error/i);
	});
});
