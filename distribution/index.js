'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myFormat = _winston.format.printf(function (info) {
    return (0, _moment2.default)(info.timestamp).format('DD-MMM-YYYY HH:mm:ss') + ' ' + info.level + ': ' + String(info.message);
});

var logger = _winston2.default.createLogger({
    transports: [new _winston2.default.transports.Console({
        format: _winston.format.combine(_winston.format.colorize(), myFormat)
    }), new _winston2.default.transports.File({
        level: 'info',
        filename: 'info.log',
        format: _winston.format.combine(_winston.format.timestamp(), myFormat)
    }), new _winston2.default.transports.File({
        level: 'error',
        filename: 'errors.log',
        format: _winston.format.combine(_winston.format.timestamp(), myFormat)
    })]
});

exports.default = logger;