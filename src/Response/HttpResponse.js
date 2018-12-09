/**
 * HttpResponse Object
 */

class HttpResponse {
  constructor(parameter) {
    this.request = parameter.request;
    this.error = null;
    this.body = {};

    if (parameter instanceof Error) {
      this.error = parameter;
      this.response = parameter.response;
    } else {
      this.response = parameter;
    }

    this.body = this.response.body;

    // throw an error if the request failed or caused an internal error
    if (this.response.statusCode >= 500) {
      throw this.error;
    }
  }

  /**
   * Check Response Status
   */
  isSuccessful() {
    return (
      this.response.statusCode < 400 &&
      (this.body.success === undefined || this.body.success === true)
    );
  }

  /**
   * Error Message if present
   */
  errorMsg() {
    if (this.body && this.body.errorMsg) {
      return this.body.errorMsg;
    }

    if (this.error && this.error.message) {
      return this.error.message;
    }

    return 'Unknown Error';
  }

  /**
   * Response Data
   */
  getBody() {
    return this.body;
  }

  /**
   * Will return something from the answer
   * @param {string} paramName
   */
  getFromBody(paramName) {
    return this.body ? this.body[paramName] : undefined;
  }

  /**
   * Is in there an answer
   * @param {string} paramName
   */
  bodyIsHave(paramName) {
    return this.body && this.body[paramName] !== undefined;
  }

  /**
   * Status Code (200, 201, ...)
   */
  statusCode() {
    return this.response.statusCode;
  }
}

export default HttpResponse;
