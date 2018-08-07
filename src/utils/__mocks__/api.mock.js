const SIGNATURE_RSSA = '@@redux-api-middleware/RSAA';
const defaultHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };
const multipartHeaders = { Accept: 'application/json' };

export const buildRSSA = (endpoint, method, types, body = {}, options = {}) => {
  const token = options && options.token ? { Authorization: options.token } : '';
  return Object.keys(body).length || method === 'POST'
    ? {
        [SIGNATURE_RSSA]: {
          body: options.multipart ? body : JSON.stringify(body),
          endpoint,
          headers: options.multipart ? { ...multipartHeaders, ...token } : { ...defaultHeaders, ...token },
          method,
          types
        }
      }
    : {
        [SIGNATURE_RSSA]: {
          endpoint,
          headers: options.multipart ? { ...multipartHeaders, ...token } : { ...defaultHeaders, ...token },
          method,
          types
        }
      };
};

export const httpVerbs = {
  delete: 'DELETE',
  patch: 'PATCH',
  put: 'PUT',
  get: 'GET',
  post: 'POST'
};
