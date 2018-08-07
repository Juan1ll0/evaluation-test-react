import * as apiUtils from '../api';

import envConfig from 'environments';
import { buildRSSA, httpVerbs } from '../__mocks__/api.mock';

describe('Test for API Utils', () => {
  const base = envConfig.backendUrl;

  describe('Without credentials', () => {
    test('Fetch data from backend.', () => {
      const endpoint = '/endpoint';
      const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
      const expected = buildRSSA(base + endpoint, httpVerbs.get, actions);

      expect(apiUtils.fetch(endpoint, actions, {}, {})).toEqual(expected);
    });

    test('Fetch data from backend without options.', () => {
      const endpoint = '/endpoint';
      const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
      const expected = buildRSSA(base + endpoint, httpVerbs.get, actions);

      expect(apiUtils.fetch(endpoint, actions, {})).toEqual(expected);
    });

    describe('Post data to backend', () => {
      test('Simple post data', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const data = { paramNumber: 5, paramString: 'myString' };
        const expected = buildRSSA(base + endpoint, httpVerbs.post, actions, data);

        expect(apiUtils.post(endpoint, actions, data)).toEqual(expected);
      });

      test('Post with query string.', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const query = { paramNumber: 5, paramString: 'myString' };
        const expected = buildRSSA(
          base + endpoint + '?paramNumber=5&paramString=myString',
          httpVerbs.post,
          actions,
          {}
        );

        expect(apiUtils.post(endpoint, actions, {}, query)).toEqual(expected);
      });

      test('Post multipart data.', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const data = { dataNumber: 5, dataString: 'myString' };
        const expected = buildRSSA(base + endpoint, httpVerbs.post, actions, data, { multipart: true });

        expect(apiUtils.post(endpoint, actions, data, {}, { multipart: true })).toEqual(expected);
      });

      test('Post with query string and data', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const query = { paramNumber: 5, paramString: 'myString' };
        const data = { test: 'test' };
        const expected = buildRSSA(
          base + endpoint + '?paramNumber=5&paramString=myString',
          httpVerbs.post,
          actions,
          data
        );

        expect(apiUtils.post(endpoint, actions, data, query)).toEqual(expected);
      });
    });

    describe('Update data in backend', () => {
      test('Using PUT verb', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const data = { id: 5, test: 'string' };
        const url = base + endpoint + '/' + data.id;
        const expected = buildRSSA(url, httpVerbs.put, actions, data);

        expect(apiUtils.update(endpoint, actions, data, {})).toEqual(expected);
      });

      test('Using PUT verb without id', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const data = { test: 'string' };
        const url = base + endpoint;
        const expected = buildRSSA(url, httpVerbs.put, actions, data);

        expect(apiUtils.update(endpoint, actions, data, {})).toEqual(expected);
      });

      test('Using PUT verb without id and without options', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const data = { test: 'string' };
        const url = base + endpoint;
        const expected = buildRSSA(url, httpVerbs.put, actions, data);

        expect(apiUtils.update(endpoint, actions, data)).toEqual(expected);
      });

      test('Using PATCH verb', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const data = { id: 5, test: 'string' };
        const url = base + endpoint + '/' + data.id;
        const expected = buildRSSA(url, httpVerbs.patch, actions, data);

        expect(apiUtils.update(endpoint, actions, data, { patch: true })).toEqual(expected);
      });

      test('Using PATCH verb without id', () => {
        const endpoint = '/endpoint';
        const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
        const data = { test: 'string' };
        const url = base + endpoint;
        const expected = buildRSSA(url, httpVerbs.patch, actions, data);

        expect(apiUtils.update(endpoint, actions, data, { patch: true })).toEqual(expected);
      });
    });

    test('Remove item from backend', () => {
      const endpoint = '/endpoint';
      const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
      const id = 5;
      const url = base + endpoint + '/' + id;
      const expected = buildRSSA(url, httpVerbs.delete, actions, id);

      expect(apiUtils.remove(endpoint, actions, id, {})).toEqual(expected);
    });

    test('Remove item without id', () => {
      const endpoint = '/endpoint';
      const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
      const url = base + endpoint;
      const expected = buildRSSA(url, httpVerbs.delete, actions);

      expect(apiUtils.remove(endpoint, actions, null, {})).toEqual(expected);
    });

    test('Remove without options', () => {
      const endpoint = '/endpoint';
      const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
      const url = base + endpoint;
      const expected = buildRSSA(url, httpVerbs.delete, actions);

      expect(apiUtils.remove(endpoint, actions, null)).toEqual(expected);
    });
  });

  describe('With credentials and other options', () => {
    test('Fetch data from backend with auth token.', () => {
      const endpoint = '/endpoint';
      const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
      const options = { token: 'fake token' };
      const expected = buildRSSA(base + endpoint, httpVerbs.get, actions, {}, options);

      expect(apiUtils.fetch(endpoint, actions, {}, { ...options })).toEqual(expected);
    });

    test('Update data from backend with auth token.', () => {
      const endpoint = '/endpoint';
      const actions = ['ATTEMPT', 'SUCCESS', 'ERROR'];
      const data = { id: 5, test: 'string' };
      const url = base + endpoint + '/' + data.id;
      const options = { token: 'fake token', patch: true };
      const expected = buildRSSA(url, httpVerbs.patch, actions, data, options);

      expect(apiUtils.update(endpoint, actions, data, { ...options })).toEqual(expected);
    });
  });
});
