import { buildUrl } from './url';
import { CALL_API } from 'redux-api-middleware';

// Config
import environment from 'environment';

// Helpers
const applyHeaders = (token, shouldUseToken, multipart) => {
  const headers = {};
  if (token && shouldUseToken) {
    headers.Authorization = token;
  }

  if (multipart) {
    return {
      ...headers,
      Accept: 'application/json'
    };
  }

  return {
    ...headers,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
};

/**
 * Default options for every REST API call
 * @type {Object}
 */
const defaultOptions = {
  /**
   * For `update` method, use PATCH instead of PUT as HTTP verb
   * @type {Boolean}
   */
  patch: false,
  /**
   * Flag indicating if the API call should be secure
   * See `applyHeaders` function above
   * Default implementation is to send Authorization header with JSON Web Token
   * @type {Boolean}
   */
  secure: true,
  token: ''
};

export const fetch = (endpoint, actions, params, options = {}) => {
  const opts = Object.assign({}, defaultOptions, options);
  return {
    [CALL_API]: {
      endpoint: buildUrl(environment.backendUrl, endpoint, params),
      method: 'GET',
      headers: applyHeaders(opts.token, opts.secure),
      types: actions
    }
  };
};

export const post = (endpoint, actions, data, query = {}, options = {}) => {
  const opts = Object.assign({}, defaultOptions, options);
  return {
    [CALL_API]: {
      endpoint: buildUrl(environment.backendUrl, endpoint, query),
      method: 'POST',
      headers: applyHeaders(opts.token, opts.secure, opts.multipart),
      types: actions,
      body: opts.multipart ? data : JSON.stringify(data)
    }
  };
};

export const update = (endpoint, actions, data, options = {}) => {
  const opts = Object.assign({}, defaultOptions, options);
  const finishEndpoint = data.id ? `${endpoint}/${data.id}` : endpoint;
  return {
    [CALL_API]: {
      endpoint: buildUrl(environment.backendUrl, finishEndpoint),
      method: options.patch ? 'PATCH' : 'PUT',
      headers: applyHeaders(opts.token, opts.secure),
      types: actions,
      body: JSON.stringify(data)
    }
  };
};

export const remove = (endpoint, actions, id, options = {}) => {
  const opts = Object.assign({}, defaultOptions, options);
  const finishEndpoint = id ? `${endpoint}/${id}` : endpoint;

  return {
    [CALL_API]: {
      endpoint: buildUrl(environment.backendUrl, finishEndpoint),
      method: 'DELETE',
      headers: applyHeaders(opts.token, opts.secure),
      types: actions
    }
  };
};
