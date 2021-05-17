"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandingsContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StandingsContent = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    text-align: center;\n    table {\n      border-collapse: collapse;\n      margin: auto;\n      th {\n        border: 1px solid #000;\n        padding: 4px;\n      }\n      td {\n        border: 1px solid #000;\n        padding: 4px;\n      }\n    }\n  "])));

exports.StandingsContent = StandingsContent;