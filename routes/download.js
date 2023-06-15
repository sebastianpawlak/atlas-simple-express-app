var express = require('express');
var router = express.Router();

router.get("/txt", (req, res) => {
    res.status(200)
    .attachment(`test.txt`)
    .send('This is the content'.repeat(req.query.size))
});

module.exports = router;
