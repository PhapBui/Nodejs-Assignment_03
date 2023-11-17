# Project introduction

- Name: Ecommerce Shop - Backend
- Technology: Nodejs(Expressjs), Mongodb-Mongoose, jsonwebtoken, multer, nodemailer, express validator

# Functional description

- Provide APIs CRUD product, user, order...
- Send email comfirm after a user sent an order request success
- Validate user role: Admin, Sale, Customer

# Demo link

https://node-assignment03.onrender.com/

## products

1. Get all products

- Method: `GET`
- Endpoint: https://node-assignment03.onrender.com/api/product
- description: Get all products

2. Get product by Id

- Method: `GET`
- Endpoint: https://node-assignment03.onrender.com/api/product/[productId]
- description: Get product by [productId]

3. Get all products

- Method: `POST`
- Endpoint: https://node-assignment03.onrender.com/api/product
- description: Create new product

4. Edit product by Id

- Method: `PUT`
- Endpoint: https://node-assignment03.onrender.com/api/product/[productId]
- description: Edit product by [productId]

5. Delete product by Id

- Method: `DELETE`
- Endpoint: https://node-assignment03.onrender.com/api/product/[productId]
- description: Delete product by [productId]

## Auth

1. Login

- Method: `POST`
- Endpoint: https://node-assignment03.onrender.com/api/login
- description: user login and send a token to client

2. Signup

- Method: `POST`
- Endpoint: https://node-assignment03.onrender.com/api/signup
- description: register an user

3. Get Admin Statistic

- Method: `GET`
- Endpoint: https://node-assignment03.onrender.com/api/statistic
- description: send to admin page a statistic about users and orders history

## Cart

1. Get products in cart

- Method: `GET`
- Endpoint: https://node-assignment03.onrender.com/api/cart
- description: Get all products in cart

2. Add a products to cart

- Method: `POST`
- Endpoint: https://node-assignment03.onrender.com/api/cart
- description: Add a product to cart

3. Delete product in cart

- Method: `DELETE`
- Endpoint: https://node-assignment03.onrender.com/api/cart
- description: Delete a product in cart

## Category

1. Get all categories

- Method: `GET`
- Endpoint: https://node-assignment03.onrender.com/api/category
- description: Get all categories

2. Create a new category

- Method: `POST`
- Endpoint: https://node-assignment03.onrender.com/api/category
- description: Create a new category

## Order

1. Get all orders

- Method: `GET`
- Endpoint: https://node-assignment03.onrender.com/api/order
- description: Get all orders

2. Get order by id

- Method: `GET`
- Endpoint: https://node-assignment03.onrender.com/api/order/[orderId]
- description: Get order by [orderId]

3. Create new order

- Method: `POST`
- Endpoint: https://node-assignment03.onrender.com/api/order
- description: Create a new order

# Deployment guide (on local)

## Available Scripts

- I
  n app directory you can run:

### `yarn install` or `npm install`

- install all packages

### `yarn dev` or `npm run dev`

- Runs the app in the development mode [http://localhost:5173/]

### `yarn build` or `npm run build`

- build for production

### `yarn preview` or `npm run preview`

- locally preview production build
