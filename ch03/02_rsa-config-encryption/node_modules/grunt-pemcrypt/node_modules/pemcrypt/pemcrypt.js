'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var ursa = require('ursa');
var mkdirp = require('mkdirp');

function Pemcrypt(options){
    options = options || {};

    var cwd = options.cwd || process.cwd();
    var pem = options.pem;

    if (!fs.existsSync(pem)){
        throw new Error('Missing .pem file. Forgot to `generateKey` first? ' + pem);
    }

    this.cwd = cwd;
    this.key = ursa.createPrivateKey(
        fs.readFileSync(pem)
    );
};

Pemcrypt.generateKey = function(pem, size){
    size = size || 8;

    var dir = path.dirname(pem);
    var key = ursa.generatePrivateKey(1024 * size);
    var pemKey = key.toPrivatePem();

    mkdirp.sync(dir);
    fs.writeFileSync(pem, pemKey, 'utf8');

    return pemKey;
};

function crypto(encrypt){
    return function(sourceStore, targetStore){
        var formats = {
            true: '.json',
            false: '.pemjson'
        };

        var sourceFile = path.join(this.cwd, sourceStore + formats[encrypt]);

        if (!fs.existsSync(sourceFile)){
            throw new Error(sourceStore + ' store not found: ' + sourceFile);
        }

        var data = fs.readFileSync(sourceFile);
        var out;

        if (encrypt) {
            out = this.key.encrypt(data, 'utf8');
        } else {
            out = this.key.decrypt(data, undefined, 'utf8');
        }

        if (targetStore) {

            // if targetStore is true, just use the same path
            if (targetStore === true) {
                targetStore = sourceStore;
            }

            var targetFile = path.join(this.cwd, targetStore + formats[!encrypt]);
            var targetDirectory = path.dirname(targetFile);

            mkdirp.sync(targetDirectory);
            fs.writeFileSync(targetFile, out, 'utf8');
        }

        return out;
    };
}

Pemcrypt.prototype.encrypt = crypto(true);
Pemcrypt.prototype.decrypt = crypto(false);

module.exports = function(){
    var args = _.toArray(arguments);
    return new (Function.prototype.bind.apply(Pemcrypt, [null].concat(args)))();
};

module.exports.generateKey = Pemcrypt.generateKey.bind(Pemcrypt);