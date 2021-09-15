const Service = require('./Service');
const Post = require('../models/PostModel');

class PostService extends Service {
    constructor() {
        super(Post, 'Post');
    }
    delete = async (req, res) => {
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
    update = async (req, res) => {
        const body = req.body;
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update'
            });
        }
        Post.findById({_id: req.params.id}, (error, post) => {
            if (!!error) {
                return res.status(404).json({
                    error,
                    message: 'Post not found'
                });
            }
            post.title = body.title;
            post.body = body.body;
            post.image = body.image;
            post.save().then(() => {
                return res.status(200).json({
                    success: true,
                    id: post._id,
                    message: 'Post updated',
                });
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Post not updated'
                });
            });
        })
    }
}

module.exports = PostService;