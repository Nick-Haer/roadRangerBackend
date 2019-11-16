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
                    message: 'Markers listed',
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
        const { body } = req;

        console.log(body)

        console.log(body.username)
        console.log(body.password)

        db.User.find({username: body.username, password: body.password})
        .then(user => {

            console.log(user)



            const payload = {
                id: user[0]._id
            }
    
    
            jwt.sign(payload, jwtSecret, (err, token) => {

                console.log(token)

                if (err) {
                    res.status(200).json(err)
                }

                res.status(200).json(token)
            })
        })
        .catch(error => res.status(404).json(error))

}

}
