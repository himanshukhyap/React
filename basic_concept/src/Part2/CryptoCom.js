import React from 'react'
// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';
import * as CryptoJS from 'crypto-js';
function CryptoCom() {
  // Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(ciphertext); 
console.log(originalText);// 'my message'

  return (
    <div>dscdssdds</div>
  )
}

export default CryptoCom