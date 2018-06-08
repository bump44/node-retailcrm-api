import rp from 'request-promise';
import { forEach } from 'lodash';
import { METHODS } from '../constants';
import HttpResponse from '../Response/HttpResponse';

class Client {
  constructor({
    url,
    apiKey,
    siteCode,
    version,
  }) {
    this.url = new URL(url);
    this.api = new URL(`/api/${version}/`, this.url);
    this.siteCode = siteCode;

    this.qs = {
      apiKey,
    };
  }

  request(props = {}) {
    const {
      uri,
      url,
    } = props;

    const requestUrl = url || this.buildRequestApiUrl(uri);
    const requestOptions = this.buildRequestOptions({
      ...props,
      url: requestUrl,
    });

    return rp(requestOptions)
      .then((httpResponse) => new HttpResponse(httpResponse))
      .catch((httpError) => new HttpResponse(httpError));
  }

  buildRequestApiUrl(uri) {
    return (new URL(uri, this.api)).toString();
  }

  buildRequestOptions(props = {}) {
    const options = {
      uri: props.url,
      method: props.method,
      json: true,
      resolveWithFullResponse: true,
      qs: {
        ...this.qs,
        ...(props.qs || {}),
      },
    };

    if (props.body && props.body instanceof Object) {
      options.body = {
        site: this.siteCode,
        ...props.body,
      };
    }

    return options;
  }

  /**
   * Site Code
   */
  getSite() {
    return this.siteCode;
  }

  /**
   * Change Site Code
   * @param {string} site
   */
  setSite(siteCode) {
    this.siteCode = siteCode;
    return this;
  }

  /**
   * Request Available API Versions
   */
  availableVersions() {
    return this.request({
      url: (new URL('api/api-versions', this.url)).toString(),
      method: METHODS.GET,
    });
  }

  /**
   * Request Credentials
   */
  credentials() {
    return this.request({
      url: (new URL('api/credentials', this.url)).toString(),
      method: METHODS.GET,
    });
  }

  /**
   * Implement Methods From APIv Classes
   * @param {name} section entry point
   * @param {object} methods { list: func, create: func, ... }
   */
  implementMethods(section, methods) {
    this[section] = {};
    forEach(methods, (handle, name) => {
      this[section][name] = (...args) => this.request(handle(...args));
    });
    return this;
  }
}

export default Client;
