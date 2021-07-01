const User = require('../user.js').User;
const constants = require('../constants');

const getProfile = (req, res) => {
    // User.findByPk(req.user.id, {
    User.findByPk(req.params.id, {
        attributes: ['id', 'name', 'email', 'username', 'password', 'img'],
    })
    .then(userProfile => {
        res.status(constants.SUCCESS).json(userProfile)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            // id: req.user.id
            id: req.params.id
        },
        returning: true
    })
    .then(() => {
        // User.findByPk(req.user.id, {
        User.findByPk(req.params.id, {
            attributes: ['id', 'name', 'email', 'username', 'password', 'img'],
        })
        .then(userProfile => {
            res.status(constants.SUCCESS).json(userProfile)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deleteProfile = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
        
    })
    .then(deletedProfile => {
        console.log("Profile Deleted")
        res.status(constants.SUCCESS).send('success')
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getProfile,
    editProfile,
    deleteProfile
}