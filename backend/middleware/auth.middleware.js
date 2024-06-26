import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json("Authorization denied!");

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.status(401).json("Token verification failed!");

    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};
