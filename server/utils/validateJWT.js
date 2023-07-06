const jwt = require('jsonwebtoken')

const validateJWT = async (req,res,next)=>{

    const token = await req.headers.authorization?.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify and decode the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Attach the decoded token to the request object for further use
        req.user = decodedToken;

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
module.exports = {validateJWT}