import jwt from "jsonwebtoken";
import { UserTypes } from "types/lists";

type Payload = {
  authorization: string;
  user: string;
};

export default function createAuthToken(userType: UserTypes) {
  const payload: Payload = {
    authorization: "allow",
    user: userType,
  };

  let secret: string;
  let expiresIn: number; // Expiry time should be in seconds. 3600s === 1h

  // TO DO: Hide the secret key!
  if (userType === "angelprotocol-web-app") {
    secret = process.env.REACT_APP_APES_AUTH_SECRET_KEY || "";
    expiresIn = 30;
  } else {
    secret = process.env.REACT_APP_ANGEL_AUTH_SECRET_KEY || "";
    expiresIn = 3600;
  }

  const token = jwt.sign(payload, secret, { expiresIn });

  return token;
}
