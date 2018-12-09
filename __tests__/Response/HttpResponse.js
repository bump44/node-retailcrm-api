import HttpResponse from '../../src/Response/HttpResponse';

const getResponse = (statusCode = 200, body) =>
  new HttpResponse({
    request: {},
    statusCode,
    body,
  });

describe('HttpResponse', () => {
  it('throw is status > 500', () => {
    const responseTest = props => new HttpResponse(props);
    expect(responseTest).toThrow();

    const error = new Error('Http Status 502');
    error.request = {};
    error.response = { statusCode: 502 };

    expect(responseTest.bind(null, error)).toThrow(error);
  });

  it('isSuccessful', () => {
    expect(getResponse(200, { success: false }).isSuccessful()).toEqual(false);
    expect(getResponse(400, { success: true }).isSuccessful()).toEqual(false);
    expect(getResponse(200, { success: undefined }).isSuccessful()).toEqual(
      true,
    );
    expect(getResponse(200, { success: true }).isSuccessful()).toEqual(true);
  });

  it('errorMsg', () => {
    expect(getResponse(200, { errorMsg: 'Error' }).errorMsg()).toEqual('Error');
    expect(getResponse(200, { errorMsg: null }).errorMsg()).toEqual(
      'Unknown Error',
    );

    const error = new Error('Http Status 404');
    error.request = {};
    error.response = { statusCode: 404 };
    expect(new HttpResponse(error).errorMsg()).toEqual(error.message);
  });

  it('getBody', () => {
    const props = { value: 1, value2: 2 };
    expect(getResponse(200, props).getBody()).toEqual(props);
  });

  it('getFromBody', () => {
    const props = { value: 1, value2: 2 };
    expect(getResponse(200, props).getFromBody('value2')).toEqual(props.value2);
    expect(getResponse(200, null).getFromBody('value3')).toEqual(undefined);
  });

  it('bodyIsHave', () => {
    const props = { value: 1, value2: 2 };
    expect(getResponse(200, props).bodyIsHave('value2')).toEqual(true);
    expect(getResponse(200, props).bodyIsHave('value3')).toEqual(false);
  });

  it('statusCode', () => {
    expect(getResponse(200, null).statusCode()).toEqual(200);
    expect(getResponse(404, null).statusCode()).toEqual(404);
    expect(getResponse(403, null).statusCode()).toEqual(403);
  });
});
