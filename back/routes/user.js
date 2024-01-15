const { loginUser } = require('../controllers/user');

const router = require('express').Router();


router.post('/login', loginUser)

module.exports = router
