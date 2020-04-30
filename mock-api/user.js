module.exports = (req, res, next) => {
  if (req.method == 'GET' && req.path == '/users/self') {
    res.status(200).json({
      data: {
        email: 'vyaguta@vyaguta.com',
        first_name: 'vyaguta',
        last_name: 'vyaguta',
      },
    });
  } else {
    next();
  }
};
