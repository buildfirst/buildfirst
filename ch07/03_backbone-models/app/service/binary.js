
function padded (value, size, pad) {
  var padding = new Array(size - value.length + 1).join(pad);
  return padding + value;
}

module.exports = {
  fromString: function (input) {
    var i;
    var binary = '';
    var charCode;

    for (i = 0; i < input.length; i++) {
      charCode = input.charCodeAt(i).toString(2);
      binary += padded(charCode, 8, 0);
    }
    return binary;
  }
};
