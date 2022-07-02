require('dotenv').config();
module.exports = {
    secret: "bezkoder-secret-key",
    user: process.env.EMAILADD, 
    pass: process.env.PASSEMAILADD, 
  };