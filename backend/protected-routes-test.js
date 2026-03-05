import http from "k6/http";
import { check } from "k6";

export const options = {
  vus: 10,
  duration: "20s",
};

const BASE_URL = "http://localhost:5000";
const USER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTU1NjEyNGIzNDk3NDUwNzA4NTBmYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcyNDM2NTA0LCJleHAiOjE3NzMwNDEzMDR9.BzpCLrCjAoNxLT7tbrBp-VxP1WarDS2--W4iWK9bnTI";
const ADMIN_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTY5YzdiODNiMTlkMmM1YzBkMjk4ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3MjQyNzUxNCwiZXhwIjoxNzczMDMyMzE0fQ.nkw5MDG_IJhN3Tcg1-Jbnf415zLZmFcH3MD0W3tO68I";

export default function () {

  // 1️⃣ Test without token
  let res1 = http.get(`${BASE_URL}/api/orders/myorders`);

check(res1, {
  "No token → 401": (r) => r.status === 401,
});

res1.error = "";

  // 2️⃣ Test with normal user token on admin route
  let res2 = http.get(`${BASE_URL}/api/orders`, {
    headers: {
      Authorization: `Bearer ${USER_TOKEN}`,
    },
  });

  check(res2, {
    "User token on admin route → 403": (r) => r.status === 403,
  });

  // 3️⃣ Test with admin token
  let res3 = http.get(`${BASE_URL}/api/orders`, {
    headers: {
      Authorization: `Bearer ${ADMIN_TOKEN}`,
    },
  });

  check(res3, {
    "Admin token → 200": (r) => r.status === 200,
  });
}