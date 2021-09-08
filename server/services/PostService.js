const Service = require('./Service');
const Post = require('../models/PostModel');

const PostService = Service(Post, 'Post');
PostService.delete = async (req, res) => {
    await Post.findOneAndDelete({_id: req.params.id}, (error, model) => {
        if (!!error) {
            return res.status(400).json({success: false, error: error});
        }
        if (!model) {
            return res.status(404).json({success: false, error: 'Post not found'});
        }
        return res.status(200).json({success: true, data: model});
    }).catch(error => console.log(error));
}
module.exports = PostService;