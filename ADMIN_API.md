# Zora Admin API Documentation

## Create Product

**POST** `/api/products`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{
  "name": "Banarasi Silk Saree",
  "price": 2499,
  "category": "Fancy",
  "image": "https://example.com/images/saree1.jpg",
  "description": "Elegant Banarasi silk saree with rich zari work.",
  "countInStock": 12,
  "brand": "Zora"
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890prod1",
  "name": "Banarasi Silk Saree",
  "price": 2499,
  "category": "Fancy",
  "image": "https://example.com/images/saree1.jpg",
  "description": "Elegant Banarasi silk saree with rich zari work.",
  "countInStock": 12,
  "brand": "Zora",
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:00:00.000Z"
}
```

### Error Response (404 Not fount)

```http
{
  "message": "Validation error message"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

## Update Product

**PUT** `/api/products/:id`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{
  "name": "Banarasi Silk Saree",
  "price": 2699,
  "description": "Updated elegant Banarasi silk saree with rich zari work.",
  "category": "Fancy",
  "subCategory": "Wedding",
  "countInStock": 10
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890prod1",
  "name": "Banarasi Silk Saree",
  "price": 2699,
  "description": "Updated elegant Banarasi silk saree with rich zari work.",
  "category": "Fancy",
  "subCategory": "Wedding",
  "countInStock": 10,
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:30:00.000Z"
}
```

### Error Response (404 Not fount)

```http
{
  "message": "Product not found"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error message"
}
```

## Delete Product

**DELETE** `/api/products/:id`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "message": "Product deleted"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error message"
}
```

## Get All Orders (Admin)

**GET** `/api/admin/orders`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
[
  {
    "_id": "65f1a2b3c4d5e6f7890ordr2",
    "user": {
      "_id": "65f1a2b3c4d5e6f7890user2",
      "name": "Anjali",
      "phone": "9876543211"
    },
    "orderItems": [
      {
        "product": "65f1a2b3c4d5e6f7890prod2",
        "name": "Soft Cotton Saree",
        "qty": 2,
        "image": "https://example.com/images/saree2.jpg",
        "price": 1299
      }
    ],
    "shippingAddress": {
      "fullName": "Anjali",
      "address": "Brodipet",
      "city": "Guntur",
      "postalCode": "522002",
      "country": "India",
      "phone": "9876543211"
    },
    "paymentMethod": "Online",
    "itemsPrice": 2598,
    "shippingPrice": 0,
    "taxPrice": 0,
    "totalPrice": 2598,
    "status": "Processing",
    "createdAt": "2026-03-16T11:00:00.000Z",
    "updatedAt": "2026-03-16T11:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890ordr1",
    "user": {
      "_id": "65f1a2b3c4d5e6f7890user1",
      "name": "Monika",
      "phone": "9876543210"
    },
    "orderItems": [
      {
        "product": "65f1a2b3c4d5e6f7890prod1",
        "name": "Banarasi Silk Saree",
        "qty": 1,
        "image": "https://example.com/images/saree1.jpg",
        "price": 2499
      }
    ],
    "shippingAddress": {
      "fullName": "Monika",
      "address": "Lakshmipuram",
      "city": "Guntur",
      "postalCode": "522007",
      "country": "India",
      "phone": "9876543210"
    },
    "paymentMethod": "COD",
    "itemsPrice": 2499,
    "shippingPrice": 50,
    "taxPrice": 0,
    "totalPrice": 2549,
    "status": "Placed",
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  }
]
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error message"
}
```

## Update Order Status

**PUT** `/api/admin/orders/:id/status`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{
  "status": "Delivered"
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890ordr1",
  "user": "65f1a2b3c4d5e6f7890user1",
  "orderItems": [
    {
      "product": "65f1a2b3c4d5e6f7890prod1",
      "name": "Banarasi Silk Saree",
      "qty": 1,
      "image": "https://example.com/images/saree1.jpg",
      "price": 2499
    }
  ],
  "shippingAddress": {
    "fullName": "Monika",
    "address": "Lakshmipuram",
    "city": "Guntur",
    "postalCode": "522007",
    "country": "India",
    "phone": "9876543210"
  },
  "paymentMethod": "COD",
  "itemsPrice": 2499,
  "shippingPrice": 50,
  "taxPrice": 0,
  "totalPrice": 2549,
  "status": "Delivered",
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:30:00.000Z"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Get Admin Dashboard Data

**GET** `/api/admin/dashboard`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "totalProducts": 120,
  "totalUsers": 45,
  "totalOrders": 78,
  "productsOnSale": 20,
  "pattuCount": 35,
  "fancyCount": 40,
  "cottonCount": 45,
  "recentProducts": [
    {
      "_id": "65f1a2b3c4d5e6f7890prod5",
      "name": "Soft Cotton Saree",
      "price": 1299,
      "category": "cotton",
      "discount": 10,
      "createdAt": "2026-03-16T11:00:00.000Z",
      "updatedAt": "2026-03-16T11:00:00.000Z"
    },
    {
      "_id": "65f1a2b3c4d5e6f7890prod4",
      "name": "Fancy Party Wear Saree",
      "price": 2199,
      "category": "fancy",
      "discount": 15,
      "createdAt": "2026-03-16T10:45:00.000Z",
      "updatedAt": "2026-03-16T10:45:00.000Z"
    }
  ],
  "outOfStockProducts": [
    {
      "_id": "65f1a2b3c4d5e6f7890prod9",
      "name": "Traditional Pattu Saree",
      "price": 3499,
      "category": "pattu",
      "stock": 0,
      "createdAt": "2026-03-15T09:00:00.000Z",
      "updatedAt": "2026-03-15T09:00:00.000Z"
    }
  ]
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Get All Users (Admin)

**GET** `/api/admin/all`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
[
  {
    "_id": "65f1a2b3c4d5e6f7890user1",
    "name": "Monika",
    "phone": "9876543210",
    "role": "user",
    "address": {
      "street": "Lakshmipuram",
      "city": "Guntur",
      "pincode": "522007"
    },
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890user2",
    "name": "Anjali",
    "phone": "9876543211",
    "role": "admin",
    "address": {
      "street": "Brodipet",
      "city": "Guntur",
      "pincode": "522002"
    },
    "createdAt": "2026-03-15T09:00:00.000Z",
    "updatedAt": "2026-03-15T09:00:00.000Z"
  }
]
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Delete User (Admin)

**DELETE** `/api/admin/users/:id`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "message": "User and their orders deleted successfully"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Delete failed"
}
```

## Get All Reviews (Admin)

**GET** `/api/admin/reviews`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
[
  {
    "_id": "65f1a2b3c4d5e6f7890revw2",
    "user": {
      "_id": "65f1a2b3c4d5e6f7890user2",
      "name": "Anjali",
      "email": "anjali@example.com"
    },
    "product": {
      "_id": "65f1a2b3c4d5e6f7890prod2",
      "name": "Soft Cotton Saree",
      "image": "https://example.com/images/saree2.jpg"
    },
    "rating": 4,
    "comment": "Nice design and soft fabric.",
    "isVerifiedBuyer": false,
    "createdAt": "2026-03-16T11:00:00.000Z",
    "updatedAt": "2026-03-16T11:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890revw1",
    "user": {
      "_id": "65f1a2b3c4d5e6f7890user1",
      "name": "Monika",
      "email": "monika@example.com"
    },
    "product": {
      "_id": "65f1a2b3c4d5e6f7890prod1",
      "name": "Banarasi Silk Saree",
      "image": "https://example.com/images/saree1.jpg"
    },
    "rating": 5,
    "comment": "Beautiful saree and very good quality.",
    "isVerifiedBuyer": true,
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  }
]
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Delete Review (Admin)

**DELETE** `/api/admin/reviews/:id`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "message": "Review deleted"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Get Review Stats (Admin)

**GET** `/api/admin/review-stats`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "totalReviews": 128,
  "averageRating": "4.3"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Get Admin Settings

**GET** `/api/admin/settings`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890setg1",
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:00:00.000Z"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Update Admin Settings

**PUT** `/api/admin/settings`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{
  "store": {
    "storeName": "Zora",
    "storeEmail": "support@zora.com"
  },
  "payments": {
    "codEnabled": true,
    "onlinePaymentEnabled": true
  },
  "notifications": {
    "emailNotifications": true,
    "orderAlerts": true
  }
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890setg1",
  "store": {
    "storeName": "Zora",
    "storeEmail": "support@zora.com"
  },
  "payments": {
    "codEnabled": true,
    "onlinePaymentEnabled": true
  },
  "notifications": {
    "emailNotifications": true,
    "orderAlerts": true
  },
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:30:00.000Z"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Get All Contacts (Admin)

**GET** `/api/admin/contacts`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
[
  {
    "_id": "65f1a2b3c4d5e6f7890cont2",
    "name": "Anjali",
    "email": "anjali@example.com",
    "message": "I want to know the delivery status of my order.",
    "createdAt": "2026-03-16T11:00:00.000Z",
    "updatedAt": "2026-03-16T11:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890cont1",
    "name": "Monika",
    "email": "monika@example.com",
    "message": "I need help with my order.",
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  }
]
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Reply to Contact (Admin)

**PUT** `/api/admin/contacts/:id/reply`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890cont1",
  "name": "Monika",
  "email": "monika@example.com",
  "message": "I need help with my order.",
  "status": "Replied",
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:30:00.000Z"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Delete Contact Message (Admin)

**DELETE** `/api/admin/contacts/:id`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "message": "Message deleted"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Get Admin Profile

**GET** `/api/admin/profile`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890admin1",
  "name": "Admin User",
  "phone": "9876543210",
  "email": "admin@example.com",
  "role": "admin",
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:00:00.000Z"
}
```

### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

### Error Response (404 Not Found)

```http
{
  "message": "Admin not found"
}
```

### Error Response (403 Forbidden)

```http
{
  "message": "Admin access only"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```

## Update Admin Profile

**PUT** `/api/admin/profile`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyZGZ...>
```

### Request Body

```http
{
  "name": "Admin User"
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890admin1",
  "name": "Admin User",
  "phone": "9876543210",
  "role": "admin",
  "token": "your_new_jwt_token_here"
}
```


### Error Response (403 Forbidden)

```http
{
  "message": "Not authorized"
}
```

### Error Response (500 Internal Server error)

```http
{
  "message": "Server error"
}
```
