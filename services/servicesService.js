const { Service } = require('../models');

const getAllServices = async () => {
  const services = await Service.find({});
  return services;
};

module.exports = {
  getAllServices,
};
