"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var getCoordinateKey=function getCoordinateKey(point,keysToLookup){return keysToLookup.reduce(function(foundKey,key){if(typeof point==="undefined"||point===null){throw new Error("'".concat(point,"' is no valid coordinate."))}if(Object.prototype.hasOwnProperty.call(point,key)&&typeof key!=="undefined"&&typeof foundKey==="undefined"){foundKey=key;return key}return foundKey},undefined)};var _default=getCoordinateKey;exports.default=_default;