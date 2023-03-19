const asyncHandler = require('express-async-handler');
const { getAllServices } = require('../../services/servicesService');

const getServices = asyncHandler(async (req, res) => {
  const services = await getAllServices();

  res.json({
    status: 'success',
    code: 200,
    services: [...services],
  });
});

module.exports = getServices;
