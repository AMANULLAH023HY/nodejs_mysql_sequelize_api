const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]; // Barrer token
        const decodeToken = jwt.verify(token, process.env.JWT_KEY);

        req.userData = decodeToken;
        next();
        
    } catch (error) {
       return res.status(500).json({
            message: "Invalid or expired token provided",
            error: error,
          });
    }
}

module.exports = checkAuth;