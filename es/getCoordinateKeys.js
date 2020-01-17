"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _constants=require("./constants");var _getCoordinateKey=_interopRequireDefault(require("./getCoordinateKey"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var getCoordinateKeys=function getCoordinateKeys(point){var keysToLookup=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{longitude:_constants.longitudeKeys,latitude:_constants.latitudeKeys,altitude:_constants.altitudeKeys};var longitude=(0,_getCoordinateKey.default)(point,keysToLookup.longitude);var latitude=(0,_getCoordinateKey.default)(point,keysToLookup.latitude);var altitude=(0,_getCoordinateKey.default)(point,keysToLookup.altitude);return _objectSpread({latitude:latitude,longitude:longitude},altitude?{altitude:altitude}:{})};var _default=getCoordinateKeys;exports.default=_default;