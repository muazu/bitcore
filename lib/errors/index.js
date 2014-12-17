'use strict';

var inherits = require('inherits');

/* AUTOGENERATED FILE. DON'T EDIT, MODIFY "lib/errors/spec.js" INSTEAD */

var bitcore = {};

bitcore.Error = function() {
  this.message = 'Internal error';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.prototype = Object.create(Error.prototype);
bitcore.Error.prototype.name = "bitcore.Error";

bitcore.Error.InvalidB58Char = function() {
  this.message = 'Invalid Base58 character: ' + arguments[0] + ' in ' + arguments[1] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.InvalidB58Char.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.InvalidB58Char.prototype.name = "bitcore.Error.InvalidB58Char";

bitcore.Error.InvalidB58Checksum = function() {
  this.message = 'Invalid Base58 checksum for ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.InvalidB58Checksum.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.InvalidB58Checksum.prototype.name = "bitcore.Error.InvalidB58Checksum";

bitcore.Error.InvalidNetwork = function() {
  this.message = 'Invalid version for network: got ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.InvalidNetwork.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.InvalidNetwork.prototype.name = "bitcore.Error.InvalidNetwork";

bitcore.Error.InvalidState = function() {
  this.message = 'Invalid state: ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.InvalidState.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.InvalidState.prototype.name = "bitcore.Error.InvalidState";

bitcore.Error.NotImplemented = function() {
  this.message = 'Function ' + arguments[0] + ' was not implemented yet';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.NotImplemented.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.NotImplemented.prototype.name = "bitcore.Error.NotImplemented";

bitcore.Error.InvalidNetworkArgument = function() {
  this.message = 'Invalid network: must be "livenet" or "testnet", got ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.InvalidNetworkArgument.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.InvalidNetworkArgument.prototype.name = "bitcore.Error.InvalidNetworkArgument";

bitcore.Error.InvalidArgument = function() {
  this.message = 'Invalid Argument' + (arguments[0] ? ': ' + arguments[0] + '' : '') + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.InvalidArgument.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.InvalidArgument.prototype.name = "bitcore.Error.InvalidArgument";

bitcore.Error.AbstractMethodInvoked = function() {
  this.message = 'Abstract Method Invokation: ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.AbstractMethodInvoked.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.AbstractMethodInvoked.prototype.name = "bitcore.Error.AbstractMethodInvoked";

bitcore.Error.InvalidArgumentType = function() {
  this.message = 'Invalid Argument for ' + arguments[2] + ', expected ' + arguments[1] + ' but got '+ typeof arguments[0];
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.InvalidArgumentType.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.InvalidArgumentType.prototype.name = "bitcore.Error.InvalidArgumentType";

bitcore.Error.Script = function() {
  this.message = 'Internal Error on Script ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.Script.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.Script.prototype.name = "bitcore.Error.Script";

bitcore.Error.Script.UnrecognizedAddress = function() {
  this.message = 'Expected argument ' + arguments[0] + ' to be an address';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.Script.UnrecognizedAddress.prototype = Object.create(bitcore.Error.Script.prototype);
bitcore.Error.Script.UnrecognizedAddress.prototype.name = "bitcore.Error.Script.UnrecognizedAddress";

bitcore.Error.HDPrivateKey = function() {
  this.message = 'Internal Error on HDPrivateKey ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPrivateKey.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.HDPrivateKey.prototype.name = "bitcore.Error.HDPrivateKey";

bitcore.Error.HDPrivateKey.InvalidDerivationArgument = function() {
  this.message = 'Invalid derivation argument ' + arguments[0] + ', expected string, or number and boolean';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPrivateKey.InvalidDerivationArgument.prototype = Object.create(bitcore.Error.HDPrivateKey.prototype);
bitcore.Error.HDPrivateKey.InvalidDerivationArgument.prototype.name = "bitcore.Error.HDPrivateKey.InvalidDerivationArgument";

bitcore.Error.HDPrivateKey.InvalidEntropyArgument = function() {
  this.message = 'Invalid entropy: must be an hexa string or binary buffer, got ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPrivateKey.InvalidEntropyArgument.prototype = Object.create(bitcore.Error.HDPrivateKey.prototype);
bitcore.Error.HDPrivateKey.InvalidEntropyArgument.prototype.name = "bitcore.Error.HDPrivateKey.InvalidEntropyArgument";

bitcore.Error.HDPrivateKey.InvalidEntropyArgument.TooMuchEntropy = function() {
  this.message = 'Invalid entropy: more than 512 bits is non standard, got "' + arguments[0] + '"';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPrivateKey.InvalidEntropyArgument.TooMuchEntropy.prototype = Object.create(bitcore.Error.HDPrivateKey.InvalidEntropyArgument.prototype);
bitcore.Error.HDPrivateKey.InvalidEntropyArgument.TooMuchEntropy.prototype.name = "bitcore.Error.HDPrivateKey.InvalidEntropyArgument.TooMuchEntropy";

bitcore.Error.HDPrivateKey.InvalidEntropyArgument.NotEnoughEntropy = function() {
  this.message = 'Invalid entropy: at least 128 bits needed, got "' + arguments[0] + '"';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPrivateKey.InvalidEntropyArgument.NotEnoughEntropy.prototype = Object.create(bitcore.Error.HDPrivateKey.InvalidEntropyArgument.prototype);
bitcore.Error.HDPrivateKey.InvalidEntropyArgument.NotEnoughEntropy.prototype.name = "bitcore.Error.HDPrivateKey.InvalidEntropyArgument.NotEnoughEntropy";

bitcore.Error.HDPrivateKey.InvalidLength = function() {
  this.message = 'Invalid length for xprivkey string in ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPrivateKey.InvalidLength.prototype = Object.create(bitcore.Error.HDPrivateKey.prototype);
bitcore.Error.HDPrivateKey.InvalidLength.prototype.name = "bitcore.Error.HDPrivateKey.InvalidLength";

bitcore.Error.HDPrivateKey.InvalidPath = function() {
  this.message = 'Invalid derivation path: ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPrivateKey.InvalidPath.prototype = Object.create(bitcore.Error.HDPrivateKey.prototype);
bitcore.Error.HDPrivateKey.InvalidPath.prototype.name = "bitcore.Error.HDPrivateKey.InvalidPath";

bitcore.Error.HDPrivateKey.UnrecognizedArgument = function() {
  this.message = 'Invalid argument: creating a HDPrivateKey requires a string, buffer, json or object, got "' + arguments[0] + '"';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPrivateKey.UnrecognizedArgument.prototype = Object.create(bitcore.Error.HDPrivateKey.prototype);
bitcore.Error.HDPrivateKey.UnrecognizedArgument.prototype.name = "bitcore.Error.HDPrivateKey.UnrecognizedArgument";

bitcore.Error.HDPublicKey = function() {
  this.message = 'Internal Error on HDPublicKey ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPublicKey.prototype = Object.create(bitcore.Error.prototype);
bitcore.Error.HDPublicKey.prototype.name = "bitcore.Error.HDPublicKey";

bitcore.Error.HDPublicKey.ArgumentIsPrivateExtended = function() {
  this.message = 'Argument is an extended private key: ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPublicKey.ArgumentIsPrivateExtended.prototype = Object.create(bitcore.Error.HDPublicKey.prototype);
bitcore.Error.HDPublicKey.ArgumentIsPrivateExtended.prototype.name = "bitcore.Error.HDPublicKey.ArgumentIsPrivateExtended";

bitcore.Error.HDPublicKey.InvalidDerivationArgument = function() {
  this.message = 'Invalid derivation argument: got ' + arguments[0] + '';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPublicKey.InvalidDerivationArgument.prototype = Object.create(bitcore.Error.HDPublicKey.prototype);
bitcore.Error.HDPublicKey.InvalidDerivationArgument.prototype.name = "bitcore.Error.HDPublicKey.InvalidDerivationArgument";

bitcore.Error.HDPublicKey.InvalidLength = function() {
  this.message = 'Invalid length for xpubkey: got "' + arguments[0] + '"';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPublicKey.InvalidLength.prototype = Object.create(bitcore.Error.HDPublicKey.prototype);
bitcore.Error.HDPublicKey.InvalidLength.prototype.name = "bitcore.Error.HDPublicKey.InvalidLength";

bitcore.Error.HDPublicKey.InvalidPath = function() {
  this.message = 'Invalid derivation path, it should look like: "m/1/100", got "' + arguments[0] + '"';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPublicKey.InvalidPath.prototype = Object.create(bitcore.Error.HDPublicKey.prototype);
bitcore.Error.HDPublicKey.InvalidPath.prototype.name = "bitcore.Error.HDPublicKey.InvalidPath";

bitcore.Error.HDPublicKey.MustSupplyArgument = function() {
  this.message = 'Must supply an argument to create a HDPublicKey';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPublicKey.MustSupplyArgument.prototype = Object.create(bitcore.Error.HDPublicKey.prototype);
bitcore.Error.HDPublicKey.MustSupplyArgument.prototype.name = "bitcore.Error.HDPublicKey.MustSupplyArgument";

bitcore.Error.HDPublicKey.UnrecognizedArgument = function() {
  this.message = 'Invalid argument for creation, must be string, json, buffer, or object';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.HDPublicKey.UnrecognizedArgument.prototype = Object.create(bitcore.Error.HDPublicKey.prototype);
bitcore.Error.HDPublicKey.UnrecognizedArgument.prototype.name = "bitcore.Error.HDPublicKey.UnrecognizedArgument";

module.exports = bitcore.Error;