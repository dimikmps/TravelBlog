const multer = require('multer');

const storage = multer.memoryStorage();

const MIME_TYPE_IMAGE = {
  'image/png': 'png',
  'image/PNG': 'png',
  'image/jpg': 'jpg',
  'image/JPG': 'jpg',
  'image/jpeg': 'jpg',
  'image/JPEG': 'jpg'
};

const fileFilter = (req, file, cb) => {
  if (MIME_TYPE_IMAGE[file.mimetype]) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = (req, res, next) => {
  multer({
    storage: storage,
    limits: {
      fileSize: 5242880
    },
    fileFilter: fileFilter
  }).single('file')(req, res, function (err) {
    if (err) {
      return res.status(400).json({ok: false, message: err.message})
    }
    next()
  })
}
;