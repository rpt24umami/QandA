const request = require('supertest');
const app = require('../server/app.js');
const con = require('../db/index.js');

beforeAll((done) => {
  done();
});

afterAll((done) => {
  con.connection.end();
  done();
});

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/product/2/q-and-a')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test returned data', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/product/10/q-and-a')
      .then((response) => {
        const property = JSON.parse(response.res.text);
        expect(property[0].product_id).toBe(10);
      });
  });
});
