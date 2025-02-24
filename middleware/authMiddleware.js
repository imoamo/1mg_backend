
const jwt = require('jsonwebtoken');

const authMiddleWare = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
        jwt.verify(token, 'masai', (err, decoded) => {
            req.body.userId = decoded.userId;
            req.body.username = decoded.user;
            next()
        });
    } else {
        res.status(401).json({
            message: "Token not found, Please login first"
        });
    }
};

module.exports = authMiddleWare;