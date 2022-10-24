import jwt from 'jsonwebtoken';
export const SignToken = async (message:string):Promise<string | null> => {
    console.log(message, "message");
    const token = await jwt.sign({id:message}, <string>process.env.JWT_SECRET, {expiresIn: '1d'});
    return token
}