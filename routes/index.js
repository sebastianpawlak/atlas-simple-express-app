var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/upload", (req, res, next) => {
  const form = formidable({
    uploadDir: "/var/tmp",
    keepExtensions: false,
    maxFileSize: 200 * 1024 * 1024
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ err });
      return;
    }
    res.status(200).json({ fields, files });
  });
});

module.exports = router;
