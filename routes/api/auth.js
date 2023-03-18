const express = require('express');
const router = express.Router();

// const { joiSignupSchema, joiLoginSchema } = require("../../schemas/index");
// const { validation, ctrlWrapper } = require("../../middleware");
// const {auth: ctrl} = require("../../controllers/index");

//================ REGISTER USER ================
router.post('/signup');
// , validation(joiSignupSchema), ctrlWrapper(ctrl.signup)
//================ LOGIN USER ================
router.post('/login' );
// validation(joiLoginSchema), ctrlWrapper(ctrl.login)
//================ LOGOUT USER ================
// router.post('/logout', ctrlWrapper(ctrl.login));

//================ UPDATE USER ================
// router.patch('/update', async (req, res) => {
//   res.json({ message: '' });
// });

module.exports = router;
