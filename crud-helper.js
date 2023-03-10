//Allows for CRUD ops in the termail without having to open Postman

// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

const Fruit = require("./models/fruit")

// Local variables will come in handy for holding retrieved documents
let user, item, category, order, fruit
let users, items, categories, orders, fruits