// Anything we assign to `module.exports` will be our module's
// public interface. Everything else will remain private
// unless we assign it explicitly to `module.exports` or the `global` object
module.exports = function (input) {
    return input.toUpperCase();
};
