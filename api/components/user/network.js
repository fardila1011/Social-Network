const express = require('express');

const router = express.Router();

router.get('/', function(req, resp) {
    resp.send('It works.')
});

module.exports = router;