// const Post = require('../models').Post;
// const Meme = require('../models').Meme;
// const constants = require('../constants');
// const getAll = (req, res) => {
//     Meme.findAll()
//     .then(memes => {
//         res.status(constants.SUCCESS).json(memes)
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }
// const getMemeById = (req, res) => {
//     let sort = 'DESC';
//     if(req.query.sorted === 'asc')
//         sort = 'ASC';
//     Meme.findByPk(req.params.meme, {
//         include: [
//             {
//                 model: Post,
//                 attributes: ['id', 'title', 'body', 'img'],
//             }
//         ],
//         order: [
//             [{model: Post}, 'createdAt', sort]
//         ]
//     })
//     .then(foundCity => {
//         if(foundCity === null){
//             res.status(constants.BAD_REQUEST).send('ERROR: Incorrect City Id')
//         }else{
//             res.status(constants.SUCCESS).json(foundCity)
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }
// const editCity = (req, res) => {
//     City.update(req.body, {
//         where: {
//             id: req.params.cityId
//         },
//         returning: true
//     })
//     .then(updatedCity => {
//         if(updatedCity[0] === 0) {
//             res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
//         }else{
//             City.findByPk(req.params.cityId, {
//                 include: [
//                     {
//                         model: Post,
//                         attributes: ['id', 'title', 'body', 'img'],
//                     }
//                 ]
//             })
//             .then(foundCity => {
//                 if(foundCity === null){
//                     res.status(constants.BAD_REQUEST).send('ERROR: Incorrect City Id')
//                 }else{
//                     res.status(constants.SUCCESS).json(foundCity)
//                 }
//             })
//             .catch(err => {
//                 res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//             })
//         }
//     })
// }
// const deleteCity = (req, res) => {
//     City.destroy({
//         where: {
//             id: req.params.cityId
//         }
//     })
//     .then(deletedCity => {
//         console.log("City Deleted")
//         res.status(constants.SUCCESS).send('success')
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }
// module.exports = {
//     getAll,
//     getMemeById,
//     editMeme,
//     deleteMeme
// }