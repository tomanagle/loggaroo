Logs info & error messages to the console and their respective files. 
 

###Instructions

1) yarn add loggaroo
2) import logger from 'loggaroo';
3) logger.info('My info level log');
4) logger.error(new Error('My error level log'));

The info & error level logs will be put into a file called info.log 

The error level logs will be put into a file called error.log