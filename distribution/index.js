"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const winston_1 = __importStar(require("winston"));
const myFormat = winston_1.format.printf(info => {
    return `${moment_1.default(info.timestamp).format('DD-MMM-YYYY HH:mm:ss')} ${info.level}: ${String(info.message)}`;
});
const logger = winston_1.default.createLogger({
    transports: [
        new (winston_1.default.transports.Console)({
            format: winston_1.format.combine(winston_1.format.colorize(), myFormat)
        }),
        new (winston_1.default.transports.File)({
            level: 'info',
            filename: 'info.log',
            format: winston_1.format.combine(winston_1.format.timestamp(), myFormat),
        }),
        new (winston_1.default.transports.File)({
            level: 'error',
            filename: 'errors.log',
            format: winston_1.format.combine(winston_1.format.timestamp(), myFormat),
        })
    ]
});
exports.default = logger;
//# sourceMappingURL=index.js.map