# Zora Project – Saree Shopping Website

Zora Project is a full-stack e-commerce application built for online saree shopping. It includes a customer-facing storefront, a separate admin dashboard, and a centralized backend API for managing authentication, products, cart, wishlist, orders, addresses, reviews, contacts, and payments.

The project is organized as a multi-app repository with independent frontend applications for the store and admin panel, connected to a shared backend.

---

## Project Structure

The repository is organized into three main applications:

- `backend/` – Central backend API built with Node.js, Express, and MongoDB
- `zora-store/` – Customer storefront for browsing and purchasing sarees
- `zora-admin/` – Admin dashboard for managing products, orders, and platform activity

---

## Tech Stack


### Backend

- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT and bcryptjs
- Other Packages: CORS, dotenv, cookie-parser, Firebase Admin
- Development Tooling: Nodemon

### Frontend

- Framework: React
- Build Tool: Vite
- Routing: React Router DOM
- Icons: React Icons
- Charts: Chart.js, React ChartJS 2, Recharts
- Integration: Firebase

---

## API Documentation

Detailed API documentation for each module can be found here:

- [Admin API](./ADMIN_API.md)
- [Customer API](./CUSTOMER_API.md)

## Getting Started
### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB local instance or MongoDB Atlas

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/MonikaAmujuri/Zora-Project.git
cd Zora-Project
```

#### 2. Setup the backend
```bash
cd backend
npm install

### Run the backend server:
```bash
npm run dev
```
#### 3. Setup the customer storefront
```bash
cd Zora-Project/zora-store
npm install
npm run dev
```