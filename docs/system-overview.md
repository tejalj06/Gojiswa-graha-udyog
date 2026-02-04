# System Overview – Gojiswa Graha Udyog

This document explains how the snack ordering system works at a high level.

## High-Level Flow

Customer (Mobile / Desktop)
        |
        v
Frontend (Next.js Website)
        |
        v
Backend APIs (Node.js + Express)
        |
        v
Database (MongoDB)

## Explanation (Simple Words)

- Customers use their mobile or computer to open the website
- The frontend shows snack items, cart, checkout and payment options
- The backend handles:
  - Orders
  - Payments (UPI / COD)
  - Admin operations
- MongoDB stores:
  - Orders
  - Order history (successful & cancelled)
