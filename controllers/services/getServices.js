const asyncHandler = require('express-async-handler');
const { getAllServices } = require('../../services/servicesService');

const getServices = asyncHandler(async (req, res) => {
  const services = await getAllServices();

  res.status(200).json(services);
});

module.exports = getServices;
