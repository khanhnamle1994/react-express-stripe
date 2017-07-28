# Minimal Boilerplate for Stripe used in React and Express

## Installation

* `git clone git@github.com:khanhnamle1994/react-express-stripe.git`
* `cd react-express-stripe`

### Stripe Registration and API Keys

* Register at [Stripe](https://stripe.com/) and Setup a Payment Account to access the Dashboard
* Find your API Keys (test_, live_)
* Replace frontend API keys: frontend/src/constants/
* Replace backend API keys: backend/constants/

### Frontend

* `cd frontend`
* `npm install`
* `npm start`
* visit http://localhost:3000/

### Backend

* `cd backend`
* `npm install`
* `node index.js`
* visit http://localhost:8080/

## Usage

When using it in production, you have to use a real credit card. Otherwise, in development mode, you can use a [Stripe's test credit cards](https://stripe.com/docs/testing#cards):

* Email: Any Email
* Number: 4242 4242 4242 4242
* Date: Any Date in the Future
* CVC: Any 3 Numbers
