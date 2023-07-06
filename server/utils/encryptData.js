const {SHA3} = require('crypto-js');


const encryptData = (data) => {
    const encryptedData = SHA3(data, process.env.SHA3_DB_SECRET_KEY).toString();
    return encryptedData;
  };

module.exports  = {encryptData};