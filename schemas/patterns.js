const emailPattern = /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const passwordPattern = /^[^ ]{7,30}$/;
const namePattern = /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/;
const phonePattern = /^[+]{380}[0-9]{12}$/;

module.exports = {
  emailPattern,
  passwordPattern,
  namePattern,
  phonePattern,
};
