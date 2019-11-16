const db = require('../Models');

const jwt = require("jsonwebtoken")

const jwtSecret = "iendveijsdfmxw"




module.exports = {

    listUserMarkers(req, res) {
        jwt.verify(req.token, jwtSecret, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json({
                    message: 'Post created...',
                    authData
                });
            }
        });
    },


    verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];

        console.log(bearerHeader)
        console.log(Object.keys(req))
        // Check if bearer is undefined
        if (typeof bearerHeader !== 'undefined') {
            // Split at the space into arrays
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            // Set the token
            req.token = bearerToken;
            // Next middleware
            next();
        } else {
            // Forbidden
            res.sendStatus(403);
        }

    },

    userSignup(req, res) {
        const { body } = req;

        console.log(body)

        db.User.create(body)
            .then(newUser => res.status(200).json(newUser))
            .catch(err => { 
                console.error(err)
                res.status(400).json(err)})



    },


    userLogin(req, res) {
        // const { userInfo } = req;

        // if (!userInfo && !userInfo._id) {
        //     res.status(400).json(null)
        // }

        // const payload = {
        //     id: userInfo._id
        // }


        // jwt.sign(payload, jwtSecret, (err, token) => {
        //     res.status(200).json({ token })
        // })

        res.json("user route hit")
    }

};
