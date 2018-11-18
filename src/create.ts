import * as path from 'path';
import { ncp } from 'ncp';

/**
 * Create a new AWS Lambda function
 */
export async function create(project_name: string) {
	console.log('Creating', project_name);
	await copyTemplateFiles(project_name);
}

/**
 * Copy the Template Files to the target directory
 */
export function copyTemplateFiles(project_name: string): Promise<any> {
	const src = path.join(path.dirname(__dirname), 'template');
	const dst = path.join(process.cwd(), project_name);
	console.log('COPY', src, dst);
	return new Promise((done, reject) => {
		console.log('ncp');
		ncp(src, dst, (err) => {
			if (err) {
				console.error('ERROR', err);
				reject(err);
			} else {
				done();
			}
		});
	});
}
