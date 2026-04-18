const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authMiddleware = (req, res, next) => {
  try {
    console.log(req.headers, "re headers");
    const authorization = req.headers.authorization;

    console.log(authorization, "authorization");
    if (!authorization) {
      return res
        .status(401)
        .json({ message: "No token found and there is an issue" });
    }

    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.email = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// exports.authMiddleWare = (req, res, next) => {
//   try {
//     const authorization = req.headers.authorization;
//     console.log("authrization", req.headers.authorization);

//     if (!authorization) {
//       return res
//         .status(401)
//         .json({ message: "No format token there is an issue" });
//     }

//     const token = authorization.split(" ")[1];

//     console.log("tokennnnn", token);
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     console.log("decodedToken", decodedToken);
//     // frontnundi email == = decoded token vunna emaila 2 maych
//     req.email = decodedToken;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid Token" });
//   }
// };
