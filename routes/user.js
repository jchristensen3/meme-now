const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:id', ctrl.user.getProfile);
router.put('/profile/:id', ctrl.user.editProfile);
router.delete('/profile/:id', ctrl.user.deleteProfile);

module.exports = router;
