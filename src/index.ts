import moment from 'moment';
import winston, { format } from 'winston';

const myFormat = format.printf(info => {
  return `${moment(info.timestamp).format('DD-MMM-YYYY HH:mm:ss')} ${
    info.level
  }: ${String(info.message)}`;
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), myFormat)
    }),
    new winston.transports.File({
      level: 'info',
      filename: 'info.log',
      format: format.combine(format.timestamp(), myFormat)
    }),
    new winston.transports.File({
      level: 'error',
      filename: 'errors.log',
      format: format.combine(format.timestamp(), myFormat)
    })
  ]
});

export default logger;
