const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart  show
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/history   index
router.get('/history', ordersCtrl.history);
// POST /api/orders/cart/items/:id   show
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout   update (paid boolean change)
router.post('/cart/checkout', ordersCtrl.checkout);
// PUT /api/orders/cart/qty  updated
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;