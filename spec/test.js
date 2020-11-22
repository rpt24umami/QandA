const request = require('supertest');
const app = require('../server/app.js');

describe('Test the root path', () => {
  test('It should response the GET method', () => request(app)
    .get('/product/:product_id/q-and-a')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));
});
