module.exports = (req, res, next) => {
  if (req.method == 'POST' && req.path == '/auth/login') {
    if (req.body.email === 'vyaguta@vyaguta.com' && req.body.password === 'vyaguta') {
      res.status(200).json({
        data: {
          access_token: 'access_token',
          refresh_token: 'refresh_token',
        },
      });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } else {
    next();
  }
};
