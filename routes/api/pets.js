const express = require('express');
const router = express.Router();
const { pets: ctrl } = require('../../controllers');
const { auth, upload } = require('../../middleware');

//================ CREATE NEW PET ================
router.post('/', auth, upload.single('photo'), ctrl.createPet);

//================ DELETE PET BY ID ================
router.delete('/:petId', auth, ctrl.deletePet);

//================ CLOUDINARY TEST ================
// router.post('/upload', upload.single('image'), async (req, res) => {
//   const imagePath = req.file.path;
//   console.log(imagePath);
// });

module.exports = router;
