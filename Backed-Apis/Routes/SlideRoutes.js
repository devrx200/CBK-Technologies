const express = require('express');
const router = express.Router();
const SlideController = require('../Controllers/SlideController');

// api Routing 
router.get('/slide',SlideController.ImgData)
router.post('/slide-delete',SlideController.ImgDataDel)


// Export 
module.exports = router;