// import jwt from "jsonwebtoken";
// export function authMiddleware(req, res, next) {
//   const token = req.cookies.token;
//   const decoded = jwt.verify(token, process.env.JWT_KEY);
//   res.send(token);
//   //   if (!decoded) {
//   //     next();
//   //   } else {
//   //     res.send("Not Authorized to Vissit this page");
//   //   }
//   //   const age = 25;
//   //   if (age > 18) {
//   //     next();
//   //   } else {
//   //     res.send("Not Valid to Acces this page");
//   //   }
// }
import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;

    // Check token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // Store user info if needed
    req.user = decoded;

    // Continue to next route
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized to visit this page",
    });
  }
}
