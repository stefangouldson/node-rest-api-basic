exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'First Post', content: 'This is the first post'}]
    })
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create Post
    res.status(201).json({
        message: 'Post created',
        post: {id: new Date().getTime(), title: title, content: content}
    })
}