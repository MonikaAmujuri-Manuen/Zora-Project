import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL = __ENV.BASE_URL || "http://localhost:5000";
const TOKEN = __ENV.TOKEN || "";

export const options = {
  vus: 50,
  duration: "10s",
};

export default function () {
  const params = {
    headers: {
      "Content-Type": "application/json",
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
  };

  const r1 = http.get(`${BASE_URL}/api/wishlist`, params);
  const r2 = http.get(`${BASE_URL}/api/wishlist/count`, params);

  // print only first 3 iterations
  if (__ITER < 3) {
    console.log("wishlist:", r1.status, r1.body);
    console.log("count:", r2.status, r2.body);
  }

  check(r1, { "GET /wishlist status 200": (r) => r.status === 200 });
  check(r2, { "GET /wishlist/count status 200": (r) => r.status === 200 });

  sleep(1);
}