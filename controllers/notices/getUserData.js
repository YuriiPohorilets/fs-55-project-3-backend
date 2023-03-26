const asyncHandler = require('express-async-handler');
const { getUserFavAndOwnIDs } = require('../../services/noticesService');

const getUserData = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { favorite, ownIDs } = await getUserFavAndOwnIDs(_id);

  if (!favorite || !ownIDs) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(200).json({
    code: 200,
    status: 'success',
    favorite,
    own: ownIDs,
  });
});

module.exports = getUserData;
