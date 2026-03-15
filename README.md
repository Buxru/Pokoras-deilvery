# 🍕 Pokoras Delivery

A full-stack food delivery web application with a customer-facing frontend, an admin panel, and a REST API backend.

> ⚠️ The `.env` file is included in this repository for demonstration purposes only. All credentials are test data and should **never** be used in production.

---

## 📁 Project Structure

```
Pokoras-delivery/
├── admin/        # Admin panel (React + Vite)
├── frontend/     # Customer interface (React + Vite)
└── backend/      # REST API server (Node.js + Express + MongoDB)
```

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI library |
| React DOM | 19.x | DOM rendering |
| React Router DOM | 7.x | Client-side routing |
| Axios | 1.x | HTTP requests |
| Vite | 7.x | Build tool & dev server |

### Admin Panel
| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI library |
| React DOM | 19.x | DOM rendering |
| React Router DOM | 7.x | Client-side routing |
| React Toastify | 11.x | Toast notifications |
| Axios | 1.x | HTTP requests |
| Vite | 7.x | Build tool & dev server |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | ≥ 20 | Runtime environment |
| Express | 5.x | Web framework |
| MongoDB | 7.x | NoSQL database |
| Mongoose | 9.x | MongoDB ODM |
| JSON Web Token | 9.x | Authentication |
| bcrypt | 6.x | Password hashing |
| Multer | 2.x | File / image uploads |
| Stripe | 20.x | Payment processing |
| dotenv | 17.x | Environment variables |
| CORS | 2.x | Cross-origin requests |
| body-parser | 2.x | Request body parsing |
| validator | 13.x | Input validation |
| nodemon | 3.x | Dev auto-restart |

### Dev & Build Tools
| Technology | Purpose |
|---|---|
| ESLint | Code linting |
| Rollup | Module bundler (via Vite) |
| Babel | JavaScript transpiler |
| PostCSS | CSS processing |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js >= 20
- MongoDB (local or Atlas)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Buxru/Pokoras-deilvery.git
cd Pokoras-deilvery
```

### 2. Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
JWT_SECRET="your_jwt_secret"
STRIPE_SECRET_KEY="sk_test_..."
```

Start the server:

```bash
npm run server
```

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Available at: `http://localhost:5174`

### 4. Admin Panel

```bash
cd ../admin
npm install
npm run dev
```

Available at: `http://localhost:5173`

---

## 🚀 Scripts

### Backend
```bash
npm run server   # Start the server
```

### Frontend / Admin
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## ✨ Features

### Customers (Frontend)
- Browse menu and categories
- Add items to cart
- Place orders
- Online payments via **Stripe**
- User registration and login
- Order status tracking

### Administrators (Admin Panel)
- Add new food items with an image to the site
- Delete food items entirely
- View all food items listed on the site
- View all orders
- Update order status
- Toast notifications via **React Toastify**

### API (Backend)
- JWT-based authentication
- Password hashing with **bcrypt**
- File uploads via **Multer**
- Input validation with **validator**
- CORS support

---

## 📡 API Endpoints

Base URL: `http://localhost:4000`

### 👤 Users
| Method | Route | Description |
|---|---|---|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Log in a user |

### 🛒 Cart
| Method | Route | Description |
|---|---|---|
| POST | `/api/cart/add` | Add item to cart |
| POST | `/api/cart/get` | Get cart contents |
| POST | `/api/cart/remove` | Remove item from cart |

### 🍔 Food
| Method | Route | Description |
|---|---|---|
| POST | `/api/food/add` | Add a food item (admin) |
| POST | `/api/food/remove` | Remove a food item (admin) |
| GET | `/api/food/list` | Get all food items |

### 📦 Orders
| Method | Route | Description |
|---|---|---|
| GET | `/api/order/list` | Get all orders (admin) |
| POST | `/api/order/userorders` | Get orders of a specific user |
| POST | `/api/order/status` | Update order status (admin) |

---

## 🔒 Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
JWT_SECRET="your_jwt_secret"
STRIPE_SECRET_KEY="sk_test_..."
```

| Variable | Description |
|---|---|
| `JWT_SECRET` | Secret key used to sign JWT tokens |
| `STRIPE_SECRET_KEY` | Stripe secret key — get it at [dashboard.stripe.com](https://dashboard.stripe.com/apikeys) |

> ⚠️ Never commit your `.env` file to the repository. Make sure `.env` is listed in `.gitignore`.

---

## 📄 License

MIT License

Copyright (c) 2026 Mykyta Pokora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
