const { Service } = require('../models');

const getAllServices = async (req, res) => {
  const services = await Service.find({});
  return services;
};

module.exports = {
  getAllServices,
};
