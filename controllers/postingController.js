var models = require('../models/index');
const Posting = require('../models').Posting;

exports.postPosting = async (req, res) => {
    try {
        var modPosting = models.Posting.create({
            user_id: req.body.user_id,
            subject: req.body.subject,
            content: req.body.content,
        }).then(function(user) {
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

exports.getAllListPosting = async (req, res) => {
    try {
        models.Posting.findAll({}).then(function(user) {
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

exports.getSingleListPosting = async (req, res) => {
    try {
        models.Posting.findByPk(req.params.id,{}).then(function(user) {
            if (!posting) {
                return res.status(404).send({
                    message: 'Article Not Found',
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

exports.putPosting = async (req, res) => {
    try {
        models.Posting.findByPk(req.params.id,{

        }).then(function(posting) {
            if(posting){
                posting.update({
                user_id: req.body.user_id,
                subject: req.body.subject,
                content: req.body.content,
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

exports.deletePosting = async (req, res) => {
    try {
        models.Posting.findByPk(req.params.id,{

        }).then(function(posting) {
            if(posting){
                posting.destroy().then(function() {
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