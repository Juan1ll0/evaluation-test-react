import _ from 'lodash';
import URI from 'urijs';

// Helpers
const paramsToQueryString = params =>
  Object.keys(params)
    .map(key => {
      if (_.isObject(params[key]) && !_.isArray(params[key])) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(params[key]))}`;
      }

      return URI.buildQuery({ [key]: params[key] });
    })
    .join('&');

const filterToQueryString = filter =>
  !_.isEmpty(filter)
    ? 'filter=' +
      encodeURIComponent(JSON.stringify(filter))
        .replace(/'/g, '%27')
        .replace(/"/g, '%22')
    : '';

export const buildUrl = (base, endpoint, query = {}, filter = {}) => {
  const uri = new URI(base);
  const appendWith = _.isEmpty(filter) ? '' : _.isEmpty(query) ? '?' : '&';
  uri.segment(1, endpoint);
  uri.query(`${paramsToQueryString(query)}${appendWith}${filterToQueryString(filter)}`);

  return uri.toString();
};

export const getSegments = pathname => {
  const uri = new URI(pathname);
  return uri.segment().filter(Boolean);
};

export const getQueryParams = query => {
  const uri = new URI(query);
  return uri.search(true);
};

export const appendQueryParams = (url, query = {}, filter = {}) => {
  const uri = new URI(url);
  uri.addSearch(query);
  return uri.toString();
};
