# Gojiswa Graha Udyog – Snack Ordering Website

This project is a website for **Gojiswa Graha Udyog**, a small-scale Indian home-style snack business.

The goal of this website is to make it easy for customers to:
- Browse snack items
- Select quantities
- Place orders using UPI or Cash on Delivery

At the same time, it provides a simple **admin panel** for the business owners to manage and track orders.

This is a real-world project and is being developed with a focus on **mobile users**, since most customers are expected to order using their phones.

---

## What the Website Does

### Customer Side
- Shows a menu with 120+ snack items and prices
- Each item has + / − buttons to increase or reduce quantity
- A search bar to quickly find items
- A shopping cart that is visible:
  - As an icon on the top-right
  - As a summary bar at the bottom with a checkout button
- Checkout page where users enter:
  - Name, Address, Phone number (required)
  - Email and remarks (optional)
- Payment options:
  - UPI (QR code)
  - Cash on Delivery (COD)
- After placing an order, users see:
  - An order number
  - A message with contact details for support

---

### Admin Side
- View all orders with item details and quantities
- See total price and customer phone number
- Cancel orders if needed
- Download order history as an Excel file
- Maintain records of both successful and cancelled orders

---

## Technologies Used

### Frontend
- Next.js (React)
- TypeScript
- Tailwind CSS
- Jest for unit testing

### Backend
- Node.js
- Express.js
- MongoDB
- Jest and Supertest for API testing

### Development & Deployment
- GitHub for version control
- CI/CD using GitHub Actions
- Vercel for frontend hosting
- Render or Railway for backend hosting

---

## Target Users
- Customers in India
- Mobile-first users
- Small-scale food business customers

---

## Project Status
This project is currently under active development.  
Features are being added incrementally with a focus on stability, usability, and mobile-first design.

---

## Folder Structure (Planned)

```
/frontend → Next.js application
/backend  → Node.js + Express APIs
/docs     → Project notes and documentation
```

