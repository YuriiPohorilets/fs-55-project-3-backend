//================ AUTH ================
const emailPattern = /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const passwordPattern =/(?!\s)^[^ ]{7,32}$/;
const namePattern = /^[a-zA-zа-яіїєА-ЯІЇЄ ,.'-][^\_]+$/;

const phonePattern = /^\+380\d{9}$/;
//  /^[+]{1}[0-9]{13}$/;
const locationPattern = /^[a-zA-Zа-яіїєА-ЯІЇЄ ,.'-]+[,][ ][a-zA-Zа-яіїєА-ЯІЇЄ]+$/;

//================ PETS ================
const notNumNotSpecChar = /[^0-9$&+,:;=?@#|'<>.^*()%!-]/;

module.exports = {
  emailPattern,
  passwordPattern,
  namePattern,
  phonePattern,
  locationPattern,
  notNumNotSpecChar,
};
