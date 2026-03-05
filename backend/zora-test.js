import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 20 },   // ramp up
    { duration: '40s', target: 100 },  // peak
    { duration: '20s', target: 0 },    // ramp down
  ],
};

export default function () {
  const res = http.get('http://localhost:5000/api/products');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}