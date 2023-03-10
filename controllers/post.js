const Post = require("../models/model")

exports.getPosts = (req, res) => {
    // res.send("Hello World From NodeJS");
    res.json({
        posts: [
            {title: "First Post"}, {title: "Second post"}
        ]
    });
};


exports.createPost = (req,res) => {
        const post = new Post(req.body);
        // console.log("creating post:", req.body);
        post.save((err, result) => {
            if (err){
                return res.status(400).json({
                    error: err
                });
            }
            res.status(200).json({
                post: result
            });
        });
};
