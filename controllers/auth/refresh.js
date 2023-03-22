
const refresh = async (req, res) => {
  const { refreshToken } = req.cookies;
  
  if (!refreshToken) {
    return res.status(401).json({ message: 'Not authorized' });
  }
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.json({
    status: 'success',
    code: 200,
    // token: token,
    refreshToken: refreshToken,
    // result: {
    //   name: user.name,
    //   email: user.email,
    //   phone: user.phone,
    //   city: user.city,
    //   birthday: user.birthday,
    //   avatarURL: user.avatarURL,
    //   favorite: user.favorite,
    // },
  });
};

module.exports = refresh;
