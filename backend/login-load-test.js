import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 100,
  duration: '10s',
};

export default function () {

  const payload = JSON.stringify({
    idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJhYWM0MWY3NTA4OGZlOGUwOWEwN2Q0NDRjZmQ2YjhjZTQ4MTJhMzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vem9yYS1hdXRoIiwiYXVkIjoiem9yYS1hdXRoIiwiYXV0aF90aW1lIjoxNzcyNzc5NTYzLCJ1c2VyX2lkIjoiRFMyQXlFWmhnaldieHpoN285UlR3ZmxSb2pwMSIsInN1YiI6IkRTMkF5RVpoZ2pXYnh6aDdvOVJUd2ZsUm9qcDEiLCJpYXQiOjE3NzI3Nzk1NjMsImV4cCI6MTc3Mjc4MzE2MywicGhvbmVfbnVtYmVyIjoiKzkxOTk5OTk5OTk5OSIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsicGhvbmUiOlsiKzkxOTk5OTk5OTk5OSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.iElkk_qTREoT-8XAaOXeJzndqLQj0k8dXUUCvYPwdOyz23IS15VAK7I44n77oKGUKpzeLruWmhpLE3nwomYF25CXo4GBDjUPmmJvRKyFPupzIRfDxFdUKW0-e3nfY_1ysuoZUCKD_HuFkvl0rvURaHB0t0o_GfYIfjt2giaFD-PD-TRh6TeOeMw6s9buH1DMTLE2Z9OEPF6vNxbSp3JNuEwzQXK22T5ZDVAeXmiGQZFHOXYlo8A66ZGDO5zaCrZZhtr0qt70-LhkOb4QIRFHfvihH_ez-khQYP9CM79pOM6IhrQN-n7tnwmFPgw3P81raRwb_iiGbuZZd_iV_QCwTg"
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