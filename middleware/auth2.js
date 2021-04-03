const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    //const token = req.headers.authorization.split(' ')[1];
    let decodedData = jwt.decode(token);
    req.userId = decodedData?.sub;
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = auth;
