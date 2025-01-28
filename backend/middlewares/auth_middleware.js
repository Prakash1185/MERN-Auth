import jwt from 'jsonwebtoken';

export const AuthenticationCheck = (req, res, next) => {
    const auth = req.headers['authorization']
    if (!auth) {
        return res.status(403).json({
            message: "Unauthorized access denied!",
            success: false
        })
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized access denied!",
            success: false
        })
    }
}


