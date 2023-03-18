const { Services } = require('../models');

const getAllServices = async (req, res) => {
  const services = await Services.find({});
  return services;
};

module.exports = {
  getAllServices,
};
