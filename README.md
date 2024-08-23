<p align="center">
<img src="client/public/logo.png" alt="InsightFlow Logo" width="350px"/>
</p>

# InsightFlow

InsightFlow is a web application built with Node.js and React, designed to help companies send emails to users requesting feedback on their experience using the company's app.

## Features

- **Google OAuth Authentication**: Securely authenticate users using their Google accounts.
- **Email Functionality**: Create and send feedback request emails from the backend server.
- **Stripe Payment Integration**: Accept and process credit card payments from users.
- **MongoDB Integration**: Manage and communicate data between the MongoDB database and the React frontend application.


## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ShahafErez/InsightFlow.git

2. **Install Dependencies**
   ```bash
   cd server
    npm install

   cd client
   npm install

3. **Set Up Configuration**
   Create a `.dev` file in the `server/config` directory with the following configuration keys:

   ```javascript
   module.exports = {
     googleClientID: process.env.GOOGLE_CLIENT_ID,
     googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
     mongoURI: process.env.MONGO_URL,
     cookieKey: process.env.COOKIE_KEY,
     stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
     stripeSecretKey: process.env.STRIPE_SECRET_KEY,
     sendGridKey: process.env.SEND_GRID_KEY,
     redirectDomain: process.env.REDIRECT_DOMAIN,
   };
   ```


## Running the Application
  ```bash
  cd server
  npm sun dev
```

## License
This project is licensed under the [MIT License](LICENSE).
