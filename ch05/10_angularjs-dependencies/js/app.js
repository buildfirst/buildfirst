// this line creates an instance of the testApp Angular module.
// the module can then be referenced using `angular.module('testApp')`
// an error I spot frequently among Angular.js novices is attempting to
// fetch a reference to the module using `angular.module('testApp', [])`
// again, which effectively hides the older module, most often breaking functionality.
// for that reason I find it best to keep a file where our module gets declared,
// and then individual files where we grab a reference and add things to the module.
angular.module('testApp', []);
