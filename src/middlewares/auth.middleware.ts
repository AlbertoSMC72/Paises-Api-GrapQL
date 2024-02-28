import jwt, { VerifyCallback } from 'jsonwebtoken';
const secretJWT = process.env.SECRET_JWT;

//xport const verifyJWT = (req: any, res: any, next: any) => {
//   try {
//       const token = req.get('Authorization');
//       
//       jwt.verify(token, secretJWT, (err: VerifyCallback, decode: any) => {
//           if (err) {
//               return res.status(401).json({
//                   message: "error al validar token",
//                   error: err.message
//               });
//           }
//
//           req.user = decode.user;
//           next();
//       });
//   } catch (error: any) {
//       
//       return res.status(401).json({
//           message: "error al validar token",
//           error: error.message
//       })
//   }
//
