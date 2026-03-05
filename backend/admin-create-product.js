import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 2,
  duration: "10s",
};

const BASE_URL = "http://localhost:5000";
const ADMIN_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTY5YzdiODNiMTlkMmM1YzBkMjk4ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3MjY4NjcwMywiZXhwIjoxNzczMjkxNTAzfQ.AshpeakUp-CJwAH0Ihk0Z29vm2Z-zYEICV0VsXb1CjU";

export default function () {
  const payload = JSON.stringify({
    name: "Zora Admin",
  });

  const res = http.put(`${BASE_URL}/api/admin/profile`, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ADMIN_TOKEN}`,
    },
  });

  if (res.status !== 200) {
    console.log(`FAIL status=${res.status} body=${res.body}`);
  }

  check(res, {
    "admin profile updated (200)": (r) => r.status === 200,
  });

  sleep(1);
}