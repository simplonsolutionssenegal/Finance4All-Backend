const authService = require('../services/auth.service');

exports.login = async (req, res, next) => {
  try {
    const data = await authService.login(req.body);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
