var models = require('../models/index');
const Profile = require('../models').Profile;

exports.postProfile = async (req, res) => {
    try {
        var modProfile = models.Profile.create({
            user_id: req.body.user_id,
            name: req.body.name,
            phone_number: req.body.phone_number,
            img_path: req.body.img_path,
            img_name: req.body.img_name,
            updatedAt: req.body.updatedAt,
            createdAt: req.body.createdAt
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

exports.putProfile = async (req, res) => {
    try {
        models.Profile.findByPk(req.params.id,{

        }).then(function(profile) {
            if(profile){
                profile.update({
                    user_id: req.body.user_id,
                    name: req.body.name,
                    phone_number: req.body.phone_number,
                    img_path: req.body.img_path,
                    img_name: req.body.img_name,
                    updatedAt: req.body.updatedAt,
                    createdAt: req.body.createdAt
                }).then(function(profile) {
                    res.send(profile);
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