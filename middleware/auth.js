const jwt = require('jsonwebtoken');
const config = require('config');

// Middleware function that has access to req and res
// Also has access to a callback next which lets the
// function moves on to the next piece of middleware
module.exports = function(req, res, next) {
  // Get token from header

  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Set the user in the token to the request
    // Can make use of it in any of the routes
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
