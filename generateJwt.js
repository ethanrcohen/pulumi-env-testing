const fs = require("fs");
const jwt = require("jsonwebtoken");

// Replace with your GitHub App ID
const APP_ID = "1167133";

// Read private key
const PRIVATE_KEY = fs.readFileSync("./infrastructure-manager.2025-03-05.private-key.pem", "utf8");

// Generate JWT
const jwtToken = jwt.sign(
  {
    iat: Math.floor(Date.now() / 1000), // Issued at time
    exp: Math.floor(Date.now() / 1000) + 600, // Expires in 10 min
    iss: APP_ID,
  },
  PRIVATE_KEY,
  { algorithm: "RS256" }
);

console.log(jwtToken);

