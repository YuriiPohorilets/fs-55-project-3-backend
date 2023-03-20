const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: 'dixdf3mkj',
  api_key: '693268299751691',
  api_secret: '1xp1V_eujV3mRV7HgqIi97eYbzM',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'public',
  allowedFormats: ['jpg', 'png'],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
