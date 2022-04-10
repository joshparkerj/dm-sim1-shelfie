/**
 * @jest-environment node
 */

const axios = require('axios');

const server = require('./server');

const port = require('./port.json');

const testData = [
  {
    name: 'test product 1',
    price: 100,
    imgUrl: 'https://via.placeholder.com/10',
  },
  {
    name: 'test product 2',
    price: 200,
    imgUrl: 'https://via.placeholder.com/20',
  },
  {
    name: 'test product 3',
    price: 300,
    imgUrl: 'https://via.placeholder.com/30',
  },
  {
    name: 'test product 4',
    price: 400,
    imgUrl: 'https://via.placeholder.com/40',
  },
];

const root = `http://localhost:${port}/api/`;

beforeAll(() => { server.start(); });

afterAll(() => { server.stop(); });

it('should respond', (done) => {
  axios.get(`${root}inventory`)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error('status not 200');
      } else if (data.length !== 0) {
        throw new Error('data not empty');
      } else {
        done();
      }
    });
});

it('should accept test data', (done) => {
  axios.post(`${root}product`, testData[0])
    .then(({ status }) => {
      if (status === 200) {
        done();
      } else {
        throw new Error('status not 200');
      }
    });
});

it('should accept more test data', (done) => {
  axios.post(`${root}product`, testData[1])
    .then(({ status }) => {
      if (status === 200) {
        done();
      } else {
        throw new Error('status not 200');
      }
    });
});

it('should update test data', (done) => {
  axios.put(`${root}product/0`, testData[2])
    .then(({ status }) => {
      if (status === 200) {
        done();
      } else {
        throw new Error('status not 200');
      }
    });
});

it('should return updated test data', (done) => {
  axios.get(`${root}product/0`)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error('status not 200');
      } else if (
        data.name !== testData[2].name
        || data.price !== testData[2].price
        || data.imgUrl !== testData[2].imgUrl
      ) {
        throw new Error('data not updated');
      } else {
        done();
      }
    });
});

it('should delete', (done) => {
  axios.delete(`${root}product/0`)
    .then(({ status }) => {
      if (status === 200) {
        done();
      } else {
        throw new Error('status not 200');
      }
    });
});

it('should not return deleted data', (done) => {
  axios.get(`${root}product/0`)
    .then(({ status, data }) => {
      if (status === 200) {
        throw new Error('status 200');
      } else if (data) {
        throw new Error('data returned');
      } else {
        done();
      }
    })
    .catch(() => {
      done();
    });
});
