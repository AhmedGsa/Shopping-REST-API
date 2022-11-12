# Shopping-REST-API
REST API developed using Express.js and MongoDB

## Setup

```bash
npm install && npm start
```

don't forget to add .env file containe the MONGO_URI, PORT, JWT_SECRET, JWT_LIFETIME

## Functionality
- Register new user / login to existing user
- Authentication using JsonWebToken
- Cart Management (Adding Product, Deleting Product, Modifying Product Information)
- Product Management (Creating Product, Getting all existing products (for now))

## Routers

- auth.js
- cart.js
- products.js
