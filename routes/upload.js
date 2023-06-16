var express = require('express');
var router = express.Router();
const formidable = require("formidable");
var fs = require('fs');

router.post("/image", (req, res) => {
  const form = formidable({
    uploadDir: "/var/tmp",
    keepExtensions: false,
    maxFileSize: 200 * 1024 * 1024,
    filename: (name, ext, part, form) => {
      return "the_same"; // Will be joined with options.uploadDir.
    }
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
