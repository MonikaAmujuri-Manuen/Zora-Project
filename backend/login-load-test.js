import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
};

export default function () {

  const payload = JSON.stringify({
    idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjMjdhZmY1YzlkNGU1MzVkNWRjMmMwNWM1YTE2N2FlMmY1NjgxYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vem9yYS1hdXRoIiwiYXVkIjoiem9yYS1hdXRoIiwiYXV0aF90aW1lIjoxNzcyNDMyMzkyLCJ1c2VyX2lkIjoiRFMyQXlFWmhnaldieHpoN285UlR3ZmxSb2pwMSIsInN1YiI6IkRTMkF5RVpoZ2pXYnh6aDdvOVJUd2ZsUm9qcDEiLCJpYXQiOjE3NzI0MzIzOTIsImV4cCI6MTc3MjQzNTk5MiwicGhvbmVfbnVtYmVyIjoiKzkxOTk5OTk5OTk5OSIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsicGhvbmUiOlsiKzkxOTk5OTk5OTk5OSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.jtHtRISBFlQyoCDN2CSOpo4c30S0thNB0bGv2G5pHQoi3amzzZDO3R42SO0yP6Mi8CiNTQj0K2LGuPZcMyAHT95Cvk1ITNUAEhgX47IH6iW0BB5v4MUtrUgJbDqz01PfP3w1u2MOnr1QKaaTSkr_B56lVmfMu12WVs2XiYSiXH2OJAPZO_XM7VzFLQWKK8PqrHABbQnnovTAMEghnDTuapYKjPSbSoPIA4RQUtgvrYVzOAjr4hGFonbph2S3O5k-3UB-IjEbkZbDZtPHODHPnbpiIBItaFsnqwb7V2TQtAQF8gm5OSQgxhrpJ8GAdjaoDDwcMfnQWfmExFMAe1rYdg"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(
    'http://localhost:5000/api/auth/firebase-login',
    payload,
    params
  );

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}