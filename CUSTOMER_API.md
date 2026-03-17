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

## Get All Products

**GET** `/api/products`

### Headers

```http
Content-Type: application/json
```
### Request Body

```http
{}
```
### Response (200 OK)

```http
[
  {
    "_id": "65f1a2b3c4d5e6f7890abcd1",
    "name": "Banarasi Silk Saree",
    "price": 2499,
    "category": "Silk",
    "image": "https://example.com/images/saree1.jpg",
    "description": "Elegant Banarasi silk saree with rich zari work.",
    "countInStock": 12,
    "brand": "Zora",
    "rating": 4.5,
    "numReviews": 8,
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890abcd2",
    "name": "Soft Cotton Saree",
    "price": 1299,
    "category": "Cotton",
    "image": "https://example.com/images/saree2.jpg",
    "description": "Lightweight cotton saree for daily wear.",
    "countInStock": 20,
    "brand": "Zora",
    "rating": 4.2,
    "numReviews": 5,
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  }
]
```
### Error Response (401 Unauthorized)

```http
{
  "message": "Server error"
}
```

## Get Product By ID

**GET** `/api/products/:id`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890abcd1",
  "name": "Banarasi Silk Saree",
  "price": 2499,
  "category": "Silk",
  "image": "https://example.com/images/saree1.jpg",
  "description": "Elegant Banarasi silk saree with rich zari work.",
  "countInStock": 12,
  "brand": "Zora",
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:00:00.000Z"
}
```
### Error Response (401 Unauthorized)

```http
{
  "message": "Product not found"
}
```
### Error Response (500 Internal server error)
```http
{
  "message": "Cast to ObjectId failed for value \"invalid-id\" at path \"_id\" for model \"Product\""
}
```

## Add to Cart

**POST** `/api/cart/add`

### Headers

```http
Content-Type: application/json
```
### Request Body

```http
{
  "userId": "65f1a2b3c4d5e6f7890user1",
  "productId": "65f1a2b3c4d5e6f7890prod1",
  "quantity": 2
}
```
### Response (200 OK)

```http
{
  "message": "Added to cart successfully"
}
```
### Error Response (404 Not found)

```http
{
  "message": "Product not found"
}
```

## Update Cart Quantity

**PUT** `/api/cart/update`

### Headers

```http
Content-Type: application/json
```
### Request Body

```http
{
  "userId": "65f1a2b3c4d5e6f7890user1",
  "productId": "65f1a2b3c4d5e6f7890prod1",
  "quantity": 3
}
```
### Response (200 OK)

```http
{
  "message": "Quantity updated successfully"
}
```
### Error Response (404 Not found)

```http
{
  "message": "Cart not found"
}
```

## Remove Cart Item

**DELETE** `/api/cart/remove`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{
  "userId": "65f1a2b3c4d5e6f7890user1",
  "productId": "65f1a2b3c4d5e6f7890prod1"
}
```
### Response (200 OK)

```http
{
  "message": "Item removed"
}
```
### Error Response (500 Internal Server Error)

```http
{
  "message": "Server error"
}
```

## Clear Cart

**DELETE** `/api/cart/clear`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{
  "userId": "65f1a2b3c4d5e6f7890user1"
}
```
### Response (200 OK)

```http
{
  "message": "Cart cleared successfully"
}
```
### Error Response (500 Internal Server Error)

```http
{
  "message": "Failed to clear cart"
}
```

## Create Order

**POST** `/api/orders`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...>
```

### Request Body

```http
{
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
  "totalPrice": 2549
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

## Get My Orders

**GET** `/api/orders/my-orders`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
[
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
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890ordr2",
    "user": "65f1a2b3c4d5e6f7890user1",
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
      "fullName": "Monika",
      "address": "Brodipet",
      "city": "Guntur",
      "postalCode": "522002",
      "country": "India",
      "phone": "9876543210"
    },
    "paymentMethod": "Online",
    "itemsPrice": 2598,
    "shippingPrice": 0,
    "taxPrice": 0,
    "totalPrice": 2598,
    "createdAt": "2026-03-15T08:30:00.000Z",
    "updatedAt": "2026-03-15T08:30:00.000Z"
  }
]
```
### Error Response (401 Unauthorized)

```http
{
  "message": "Not authorized, token failed"
}
```

## Cancel Order

**PUT** `/api/orders/cancel/:id`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...>
```

### Request Body

```http
{
  "reason": "Ordered by mistake"
}
```
### Response (200 OK)

```http
{
  "message": "Order cancelled successfully",
  "order": {
    "_id": "65f1a2b3c4d5e6f7890ordr1",
    "user": "65f1a2b3c4d5e6f7890user1",
    "status": "Cancelled",
    "cancelReason": "Ordered by mistake",
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:30:00.000Z"
  }
}
```
### Error Response (400 Bad Request)

```http
{
  "message": "Cancel reason is required"
}
```
### Error Response (500 Internal Server Error)

```http
{
  "message": "Failed to cancel order"
}
```

## Create Payment

**POST** `/api/payments/create`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{
  "userId": "65f1a2b3c4d5e6f7890user1",
  "method": "COD",
  "amount": 2549,
  "transactionId": "TXN123456789"
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890paym1",
  "userId": "65f1a2b3c4d5e6f7890user1",
  "method": "COD",
  "amount": 2549,
  "transactionId": "TXN123456789",
  "status": "PENDING",
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:00:00.000Z"
}
```
### Error Response (400 Bad Request)

```http
{
  "message": "Invalid payment amount"
}
```
### Error Response (500 Internal Server Error)

```http
{
  "message": "Payment failed"
}
```

## Get Payments By User ID

**GET** `/api/payments/:userId`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
[
  {
    "_id": "65f1a2b3c4d5e6f7890paym2",
    "userId": "65f1a2b3c4d5e6f7890user1",
    "method": "UPI",
    "amount": 2598,
    "transactionId": "TXN987654321",
    "status": "SUCCESS",
    "createdAt": "2026-03-16T11:00:00.000Z",
    "updatedAt": "2026-03-16T11:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890paym1",
    "userId": "65f1a2b3c4d5e6f7890user1",
    "method": "COD",
    "amount": 2549,
    "transactionId": "TXN123456789",
    "status": "PENDING",
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  }
]
```

## Add Address

**POST** `/api/address/add`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{
  "userId": "65f1a2b3c4d5e6f7890user1",
  "name": "Monika",
  "phone": "9876543210",
  "street": "Lakshmipuram",
  "city": "Guntur",
  "state": "Andhra Pradesh",
  "pincode": "522007",
  "country": "India",
  "isDefault": true
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890addr1",
  "userId": "65f1a2b3c4d5e6f7890user1",
  "name": "Monika",
  "phone": "9876543210",
  "street": "Lakshmipuram",
  "city": "Guntur",
  "state": "Andhra Pradesh",
  "pincode": "522007",
  "country": "India",
  "isDefault": true,
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:00:00.000Z"
}
```

### Error Response (500 Internal Server Error)

```http
{
  "message": "Add address failed"
}
```

## Update Address

**PUT** `/api/address/:id`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{
  "name": "Monika",
  "street": "Brodipet",
  "city": "Guntur",
  "pincode": "522002",
  "phone": "9876543210",
  "isDefault": true
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890addr1",
  "userId": "65f1a2b3c4d5e6f7890user1",
  "name": "Monika",
  "street": "Brodipet",
  "city": "Guntur",
  "pincode": "522002",
  "phone": "9876543210",
  "isDefault": true,
  "createdAt": "2026-03-16T10:00:00.000Z",
  "updatedAt": "2026-03-16T10:30:00.000Z"
}
```

### Error Response (500 Internal Server Error)

```http
{
  "message": "Update failed"
}
```

## Delete Address

**DELETE** `/api/address/:id`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "message": "Address removed"
}
```

### Error Response (500 Internal Server Error)

```http
{
  "message": "Address removed"
}
```

## Get Addresses By User ID

**GET** `/api/address/:userId`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
[
  {
    "_id": "65f1a2b3c4d5e6f7890addr1",
    "userId": "65f1a2b3c4d5e6f7890user1",
    "name": "Monika",
    "street": "Lakshmipuram",
    "city": "Guntur",
    "pincode": "522007",
    "phone": "9876543210",
    "isDefault": true,
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890addr2",
    "userId": "65f1a2b3c4d5e6f7890user1",
    "name": "Monika",
    "street": "Brodipet",
    "city": "Guntur",
    "pincode": "522002",
    "phone": "9876543210",
    "isDefault": false,
    "createdAt": "2026-03-15T09:00:00.000Z",
    "updatedAt": "2026-03-15T09:00:00.000Z"
  }
]
```

## Create Contact Message

**POST** `/api/contact`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{
  "name": "Monika",
  "email": "monika@example.com",
  "message": "I need help with my order."
}
```
### Response (200 OK)

```http
{
  "message": "Message sent successfully",
  "contact": {
    "_id": "65f1a2b3c4d5e6f7890cont1",
    "name": "Monika",
    "email": "monika@example.com",
    "message": "I need help with my order.",
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  }
}
```

### Error Response (400 Bad Request)

```http
{
  "message": "All fields are required"
}
```
### Error Response (500 Internal Server Error)

```http
{
  "message": "Server error"
}
```

## Toggle Wishlist Item

**POST** `/api/wishlist/toggle`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...>
```

### Request Body

```http
{
  "productId": "65f1a2b3c4d5e6f7890prod1"
}
```
### Response (200 OK)

```http
{
  "count": 3
}
```

### Error Response (400 Bad Request)

```http
{
  "message": "productId is required"
}
```
### Error Response (500 Internal Server Error)

```http
{
  "message": "Wishlist toggle failed"
}
```

## Get Wishlist Count

**GET** `/api/wishlist/count`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...>
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "count": 3
}
```

### Alternative Response (200 Ok)

```http
{
  "count": 0
}
```

## Get Wishlist

**GET** `/api/wishlist`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...>
```
### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890wish1",
  "user": "65f1a2b3c4d5e6f7890user1",
  "items": [
    {
      "_id": "65f1a2b3c4d5e6f7890item1",
      "product": {
        "_id": "65f1a2b3c4d5e6f7890prod1",
        "name": "Banarasi Silk Saree",
        "price": 2499,
        "image": "https://example.com/images/saree1.jpg",
        "category": "Silk",
        "description": "Elegant Banarasi silk saree with rich zari work."
      }
    },
    {
      "_id": "65f1a2b3c4d5e6f7890item2",
      "product": {
        "_id": "65f1a2b3c4d5e6f7890prod2",
        "name": "Soft Cotton Saree",
        "price": 1299,
        "image": "https://example.com/images/saree2.jpg",
        "category": "Cotton",
        "description": "Lightweight cotton saree for daily wear."
      }
    }
  ]
}
```

### Alternative Response (200 Ok)

- If the user is not Logged in

```http
{
  "items": []
}
```

## Create Review

**POST** `/api/reviews`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...>
```

### Request Body

```http
{
  "product": "65f1a2b3c4d5e6f7890prod1",
  "rating": 5,
  "comment": "Beautiful saree and very good quality."
}
```
### Response (200 OK)

```http
{
  "message": "Review added successfully",
  "review": {
    "_id": "65f1a2b3c4d5e6f7890revw1",
    "user": "65f1a2b3c4d5e6f7890user1",
    "product": "65f1a2b3c4d5e6f7890prod1",
    "rating": 5,
    "comment": "Beautiful saree and very good quality.",
    "isVerifiedBuyer": true,
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  }
}
```

### Alternative Response (200 Ok)

- Guest Review Response

```http
{
  "message": "Review added successfully",
  "review": {
    "_id": "65f1a2b3c4d5e6f7890revw2",
    "user": null,
    "product": "65f1a2b3c4d5e6f7890prod1",
    "rating": 4,
    "comment": "Nice design and soft fabric.",
    "isVerifiedBuyer": false,
    "createdAt": "2026-03-16T10:10:00.000Z",
    "updatedAt": "2026-03-16T10:10:00.000Z"
  }
}
```

### Error Response (400 Bad Request)

```http
{
  "message": "You have already reviewed this product"
}
```
### Error Response (500 Internal Server Error)

```http
{
  "message": "Server error message"
}
```

## Get Reviews By Product ID

**GET** `/api/reviews/:productId`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
[
  {
    "_id": "65f1a2b3c4d5e6f7890revw1",
    "user": {
      "_id": "65f1a2b3c4d5e6f7890user1",
      "name": "Monika"
    },
    "product": "65f1a2b3c4d5e6f7890prod1",
    "rating": 5,
    "comment": "Beautiful saree and very good quality.",
    "isVerifiedBuyer": true,
    "createdAt": "2026-03-16T10:00:00.000Z",
    "updatedAt": "2026-03-16T10:00:00.000Z"
  },
  {
    "_id": "65f1a2b3c4d5e6f7890revw2",
    "user": null,
    "product": "65f1a2b3c4d5e6f7890prod1",
    "rating": 4,
    "comment": "Nice design and soft fabric.",
    "isVerifiedBuyer": false,
    "createdAt": "2026-03-16T09:30:00.000Z",
    "updatedAt": "2026-03-16T09:30:00.000Z"
  }
]
```

### Error Response (500 Internal Server Error)

```http
{
  "message": "Server error message"
}
```

## Update Review

**PUT** `/api/reviews/:id`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{
  "rating": 4,
  "comment": "Good quality saree and nice fabric."
}
```
### Response (200 OK)

```http
{
  "message": "Review updated successfully"
}
```

### Error Response (404 Not fount)

```http
{
  "message": "Review not found"
}
```

### Error Response (500 Internal Server Error)

```http
{
  "message": "Server error message"
}
```

## Delete Review

**DELETE** `/api/reviews/:id`

### Headers

```http
Content-Type: application/json
```

### Request Body

```http
{}
```
### Response (200 OK)

```http
{
  "message": "Review deleted successfully"
}
```

### Error Response (404 Not fount)

```http
{
  "message": "Review not found"
}
```

### Error Response (500 Internal Server Error)

```http
{
  "message": "Server error message"
}
```

## Update Profile

**PUT** `/api/users/update-profile`

### Headers

```http
Content-Type: application/json
Authorization: Bearer <eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...>
```

### Request Body

```http
{
  "name": "Monika",
  "address": {
    "street": "Lakshmipuram",
    "city": "Guntur",
    "pincode": "522007"
  }
}
```
### Response (200 OK)

```http
{
  "_id": "65f1a2b3c4d5e6f7890user1",
  "name": "Monika",
  "phone": "9876543210",
  "role": "user",
  "token": "eyJhbGciOiJSUzI1NiIsImtp...."
}
```

### Error Response (404 Not fount)

```http
{
  "message": "User not found"
}
```

### Error Response (500 Internal Server Error)

```http
{
  "message": "Server error message"
}
```




