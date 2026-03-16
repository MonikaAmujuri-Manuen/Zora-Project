import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 50,
  duration: "10s",
};

const BASE = "http://localhost:5000";
const USER_ID = "699556124b349745070850fb";

export default function () {
  const res = http.get(`${BASE}/api/payment/${USER_ID}`);

  check(res, {
    "get payments (200)": (r) => r.status === 200,
  });

  sleep(1);
}