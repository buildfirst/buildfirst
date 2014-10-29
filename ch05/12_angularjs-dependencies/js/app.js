// this line creates an instance of the buildfirst Angular module.
// the module can then be referenced using `angular.module('buildfirst')`
// an error I spot frequently among Angular.js novices is attempting to
// fetch a reference to the module using `angular.module('buildfirst', [])`
// again, which effectively hides the older module, most often breaking functionality.
// for that reason I find it best to keep a file where our module gets declared,
// and then individual files where we grab a reference and add things to the module.
angular.module('buildfirst', []);
