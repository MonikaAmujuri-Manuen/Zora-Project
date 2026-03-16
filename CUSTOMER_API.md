# Zora Customer API Documentation

## Firebase Login

**POST** `/api/auth/firebase-login`

### Headers

```http
Content-Type: application/json
```
### Request Body

```http
{
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ..."
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890abcd1",
  "name": "User",
  "phone": "+919876543210",
  "isAdmin": false,
  "role": "user",
  "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ij..."
}
```
### Error Response (401 Unauthorized)

```http
{
  "message": "Invalid Firebase token"
}
```