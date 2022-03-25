import winston from 'winston';
import winstonDatily from 'winston-daily-rotate-file';

const logDir = 'logs';
const { combine, timestamp, printf } = winston.format;

const logFormat = printf((info) => {
  return `${info.timestamp} ${info.level} : ${info.message}`;
});

const alignColorsAndTime: winston.Logform.Format = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:MM:SS',
  }),
  winston.format.printf(
    (info) => `${info.timestamp}  ${info.level} : ${info.message}`,
  ),
);

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  level: 'debug',
  transports: [
    new winstonDatily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      filename: `%DATE%.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    new winstonDatily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error',
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        alignColorsAndTime,
      ),
    }),
  ],
});

export { logger };
