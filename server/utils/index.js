import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
    sameSite: "none",
  });

  // Determine if the connection is secure (over HTTPS)
  const isSecure = process.env.NODE_ENV !== "development";

  // Calculate expiration date (1 day from now)
  const expires = new Date();
  expires.setDate(expires.getDate() + 1);

  // Set secure flag only if the connection is over HTTPS
  const cookieOptions = {
    httpOnly: true,
    secure: isSecure,
    sameSite: "none",
    expires: expires, // Set the expiration date
  };

  // Set the cookie
  res.cookie("token", token, cookieOptions);
};

export default createJWT;
