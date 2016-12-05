'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rule = exports.SheetsRegistry = exports.StyleSheet = exports.Jss = undefined;
exports.create = create;

var _Jss = require('./Jss');

var _Jss2 = _interopRequireDefault(_Jss);

var _StyleSheet = require('./StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _SheetsRegistry = require('./SheetsRegistry');

var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

var _Rule = require('./rules/Rule');

var _Rule2 = _interopRequireDefault(_Rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// For testing only.

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Slobodskoi 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
exports.Jss = _Jss2['default'];
exports.StyleSheet = _StyleSheet2['default'];
exports.SheetsRegistry = _SheetsRegistry2['default'];
exports.Rule = _Rule2['default'];

/**
 * Creates a new instance of Jss.
 *
 * @see Jss
 * @api public
 */

function create(options) {
  return new _Jss2['default'](options);
}

exports['default'] = create();