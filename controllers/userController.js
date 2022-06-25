var models = require('../models/index');
const Profile = require('../models').Profile;
const nodemailer = require('../config/nodemailer.config');
exports.postSignup = async (req, res) => {
    try {
        var modUser = models.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role,
            updatedAt: req.body.updatedAt,
            createdAt: req.body.createdAt
        }).then(function(user) {
            var confirmationCode = '?verify=1&id='+user.id;
            nodemailer.sendConfirmationEmail(
                user.email,
                user.email,
                confirmationCode
            );
            
        });
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};

exports.getAllListUser = async (req, res) => {
    try {
        models.User.findAll({}).then(function(user) {
            res.json(user);
        });
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};

exports.getSingleListUser = async (req, res) => {
    try {
        models.User.findByPk(req.params.id,{}).then(function(user) {
            if (!user) {
                return res.status(404).send({
                    message: 'User Not Found',
                });
            }
            res.json(user);
        });
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};

exports.getSingleListUserFull = async (req, res) => {
    try {
        models.User.findByPk(req.params.id,{
        include: [{
            model: Profile,
            as: 'profile'
        }],
        }).then(function(user) {
            if (!user) {
                return res.status(404).send({
                    message: 'User Not Found',
                });
            }
            res.json(user);
        });
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};

exports.putUser = async (req, res) => {
    try {
        models.User.findByPk(req.params.id,{

        }).then(function(user) {
            if(user){
                user.update({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                role: req.body.role,
                updatedAt: req.body.updatedAt,
                createdAt: req.body.createdAt
                }).then(function(user) {
                res.send(user);
                });
            }
        });
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};

exports.deleteUser = async (req, res) => {
    try {
        models.User.findByPk(req.params.id,{

        }).then(function(user) {
            if(user){
                user.destroy().then(function() {
                    let data = {
                        'status':"sucsess",
                        'sucsess':true
                    };
                res.send(data);
                });
            }
        });
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};

exports.getverif = async (req, res) => {
    try {
        if(req.query.verify == 1){
            models.User.findByPk(req.query.id,{
            }).then(function(user) {
                if(user){
                    user.update({
                    verification: true,
                    }).then(function(user) {
                        res.send(user);
                    });
                }
            });
        }
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Error';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
    }
};