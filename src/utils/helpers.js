import CloudinaryStorage from 'multer-storage-cloudinary';
import multer from 'multer';

const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'hellobooks', 
  api_key: '521381859673832', 
  api_secret: '8c060McBdeyZClXXNfNgpG8QqXU',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'fuudstore',
    format: 'png', // supports promises as well
    public_id: (req, file) => Date.now(),
  },
});

const allowedFormat = ['jpeg', 'jpg', 'png', 'gif', 'svg'];
const fileFilter = (req, file, cb) => {
  const fileFormat = file.originalname
    .split('.')
    .pop()
    .toLowerCase();
  if (allowedFormat.includes(fileFormat)) {
    return cb(null, true);
  } else {
    return cb(
      `File format not allowed, allowed formats are: ${allowedFormat.join(
        ', '
      )}`
    );
  }
};

export const upload = multer({ storage: storage, limits: {
  fileSize: 10485793396,
}, fileFilter });
