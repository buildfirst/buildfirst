var fs = require('fs');
var path = require('path');

if (!(fs.existsSync || path.existsSync)('bin'))
	fs.mkdirSync('bin');

moveAll('build/Release/', 'bin/', '.node');

function moveAll(from, to, ext) {
	fs.readdirSync(from)
		.filter(function(name) { return path.extname(name) === ext; })
		.forEach(function(name) {
			fs.rename(path.join(from, name), path.join(to, name));
		});
}
