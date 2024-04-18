import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
     sameSite: "none",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "none",
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days
  });
};

export default createJWT;
