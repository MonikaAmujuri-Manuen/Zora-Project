import jwt from "jsonwebtoken";
import User from "../models/User.js";

const optionalAuthMiddleware = async (req, _res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      req.user = null;
      return next();
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");
    return next();
  } catch (_error) {
    req.user = null;
    return next();
  }
};

export default optionalAuthMiddleware;
