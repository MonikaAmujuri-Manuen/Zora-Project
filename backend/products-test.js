import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 100,
  duration: "10s",
};

const BASE = "http://localhost:5000";
const PRODUCT_ID = "6980a6b85d0bebee491531ad";

export default function () {

  const res = http.get(`${BASE}/api/products/${PRODUCT_ID}`);

  check(res, {
    "product fetched (200)": (r) => r.status === 200,
  });

  sleep(1);
}