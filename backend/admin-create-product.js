import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 5,
  duration: "10s",
};

const BASE = "http://localhost:5000";
const PRODUCT_ID = "6980a3865d0bebee4915318d";
const ADMIN_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTY5YzdiODNiMTlkMmM1YzBkMjk4ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3Mjc3Mzg1NSwiZXhwIjoxNzczMzc4NjU1fQ.4PPei1whVp6MkIN0QdPQeXdVUoqxdq9aFE1pYxNCwjQ";

export default function () {
  // Step 1: create review
  const createPayload = JSON.stringify({
    product: PRODUCT_ID,
    rating: 4,
    comment: `Temp review ${__VU} ${Date.now()}`,
  });

  const createRes = http.post(`${BASE}/api/reviews`, createPayload, {
    headers: { "Content-Type": "application/json" },
  });

  check(createRes, {
    "review created": (r) => r.status === 201,
  });

  // You need the created review ID from response if your API returns it.
  // If your POST /api/reviews currently does not return the created review,
  // update backend to return it:
  // res.status(201).json({ message: "Review added successfully", review });

  const body = createRes.json();
  const reviewId = body.review?._id;

  if (!reviewId) {
    check(null, {
      "review id returned": () => false,
    });
    sleep(1);
    return;
  }

  // Step 2: delete review
  const deleteRes = http.del(`${BASE}/api/admin/reviews/${reviewId}`, null, {
    headers: { Authorization: `Bearer ${ADMIN_TOKEN}` },
  });

  check(deleteRes, {
    "review deleted": (r) => r.status === 200,
  });

  sleep(1);
}