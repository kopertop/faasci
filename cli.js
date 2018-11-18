#!/usr/bin/env node
if (!process.argv[2]) {
	console.log('Usage: fsci <command> [args...]');
	console.log('\tcreate <progname>');
	process.exit(1);
}
require('./dist')[process.argv[2]](process.argv[3], process.argv[4], process.argv[5]);
