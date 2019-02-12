import logger from '../index';

describe('Logger test', () => {
  it('Should call the info method', () => {
    expect.assertions(1);
    const message = logger.info('Test info message');
    expect(message).toMatchSnapshot();
  });

  it('Should call the error method', () => {
    expect.assertions(1);
    const message = logger.error('Test error message');
    expect(message).toMatchSnapshot();
  });
});
