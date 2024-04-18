import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "none",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    
    console.log("Token created and cookie set successfully.");
  } catch (error) {
    console.error("Error creating JWT token:", error);
  }
};

export default createJWT;
