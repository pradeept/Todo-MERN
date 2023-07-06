import {AES} from 'crypto-js';


const encryptObject = (object)=>{
    const objectString = JSON.stringify(object);
    const encryptedObject = AES.encrypt(objectString, process.env.REACT_APP_AES_SECRET_KEY).toString();
    return encryptedObject;
}
const encryptData = (data) => {
    const encryptedData = AES.encrypt(data, process.env.REACT_APP_AES_SECRET_KEY);
    return encryptedData;
  };

export {encryptData, encryptObject};