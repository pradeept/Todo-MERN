const CryptoJS =require('crypto-js');

//To decrypt object
const decryptObject = (encryptedObject) => {
    const decryptedString = CryptoJS.AES.decrypt(encryptedObject, process.env.AES_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    const decryptedObject = JSON.parse(decryptedString);
    return decryptedObject;
  };

// To decrypt SHA3 string
const decryptData = (encryptedData) => {
    const decryptedData = CryptoJS.SHA3(encryptedData, process.env.SHA3_DB_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return decryptedData;
  };



module.exports = {decryptData, decryptObject};