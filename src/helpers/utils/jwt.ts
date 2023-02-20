const jwt = require('jsonwebtoken');
export const createJWT = (user_id:any)=>{
    const token = jwt.sign(
        { user_id},
        process.env.TOKEN_KEY,
      );
     return token
}
