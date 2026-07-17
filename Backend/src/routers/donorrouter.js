const express = require('express');
const router = express.Router();
const { createDonor, getDonors,getMyProfile, updateDonor, deleteDonor,searchDonors } = require('../controllers/donorcontroller');
const authmiddleware = require('../middleware/authmiddleware');


//protected routes
router.post('/', authmiddleware, createDonor);
router.get('/my-profile', authmiddleware, getMyProfile);
router.put('/update', authmiddleware, updateDonor);
router.delete('/delete', authmiddleware, deleteDonor);

//public routes
router.get('/', getDonors);
router.get('/search', searchDonors);

module.exports = router;