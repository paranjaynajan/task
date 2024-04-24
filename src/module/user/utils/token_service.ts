
var jwt = require('jsonwebtoken');

export const createAccessToken = async(email:string)=>{
const payload ={email}
const token= await jwt.sign(payload,process.env.ACCESS_TOKEN, { expiresIn: '10min' })
return token
}

