import { buildUrl, getSegments, getQueryParams } from '../url';

describe('Test url utils', () => {
  describe('Test buildUrl', () => {
    const backendUrl = 'https://mytest.url.tld/';

    test('Without query and empty filter string', () => {
      const endpoint = 'mytest';
      const expectedUrl = backendUrl + endpoint;

      expect(buildUrl(backendUrl, endpoint)).toEqual(expectedUrl);
      expect(buildUrl(backendUrl, endpoint, {})).toEqual(expectedUrl);
    });

    test('With query string', () => {
      const endpoint = 'mytest';
      const query = { testparam1: 5, testparam2: 'mystring' };
      const expectedUrl = backendUrl + endpoint + '?testparam1=5&testparam2=mystring';

      expect(buildUrl(backendUrl, endpoint, query)).toEqual(expectedUrl);
    });

    test('With deep objects in query string', () => {
      const endpoint = 'mytest';
      const query = { testparam: 5, obj: { testparam: 'mystring' } };
      const expectedUrl = backendUrl + endpoint + '?testparam=5&obj=%7B%22testparam%22%3A%22mystring%22%7D';

      expect(buildUrl(backendUrl, endpoint, query)).toEqual(expectedUrl);
    });

    test('With filter object and empty query string', () => {
      const endpoint = 'mytest';
      const filter = { where: { lotId: 1 }, include: { prize: 'prizeType' } };
      const expectedUrl =
        backendUrl +
        endpoint +
        '?filter=%7B%22where%22%3A%7B%22lotId%22%3A1%7D%2C%22include%22%3A%7B%22prize%22%3A%22prizeType%22%7D%7D';

      expect(buildUrl(backendUrl, endpoint, {}, filter)).toEqual(expectedUrl);
    });

    test('With filter object and query string', () => {
      const endpoint = 'mytest';
      const filter = { where: { lotId: 1 }, include: { prize: 'prizeType' } };
      const query = { testparam1: 5, testparam2: 'mystring' };
      const expectedUrl =
        backendUrl +
        endpoint +
        '?testparam1=5&testparam2=mystring' +
        '&filter=%7B%22where%22%3A%7B%22lotId%22%3A1%7D%2C%22include%22%3A%7B%22prize%22%3A%22prizeType%22%7D%7D';

      expect(buildUrl(backendUrl, endpoint, query, filter)).toEqual(expectedUrl);
    });
  });

  describe('Test getSegments', () => {
    test('Only segments', () => {
      const url = 'http://localhost/test1/test2';
      const expectedSegments = ['test1', 'test2'];
      expect(getSegments(url)).toEqual(expectedSegments);
    });
  });

  describe('Test getQueryParams', () => {
    test('Domain + query', () => {
      const url = 'http://localhost/test1/test.html?param1=a&param2=b';
      const expectedSegments = { param1: 'a', param2: 'b' };
      expect(getQueryParams(url)).toEqual(expectedSegments);
    });
    test('Only query', () => {
      const url = '?param1=a&param2=b';
      const expectedSegments = { param1: 'a', param2: 'b' };
      expect(getQueryParams(url)).toEqual(expectedSegments);
    });
  });
});
