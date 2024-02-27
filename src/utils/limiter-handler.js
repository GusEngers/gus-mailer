const { rateLimit } = require('express-rate-limit');
const ApiError = require('./error-class-api');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  handler: (req, res, next) => {
    next(new ApiError('Too many requests, please try again later', 429));
  },
});

module.exports = limiter;
