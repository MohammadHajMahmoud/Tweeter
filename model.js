const twit = document.getElementById('twit')
const Tweeter = function () {
    posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                {
                    id: "c1",
                    text: "First comment on first post!"
                }, {
                    id: "c2",
                    text: "Second comment on first post!!"
                }, {
                    id: "c3",
                    text: "Third comment on first post!!!"
                }
            ]
        }, {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                {
                    id: "c4",
                    text: "Don't wory second poster, you'll be first one day."
                }, {
                    id: "c5",
                    text: "Yeah, believe in yourself!"
                }, {
                    id: "c6",
                    text: "Haha second place what a joke."
                }
            ]
        }
    ]
    let postIdCounter = 2;
    let commentIdCounter = 6;
    const getPosts = () => posts;
    const addPost = function (text) {
        postIdCounter++;
        let twit = {}
        twit.id = "p" + postIdCounter
        twit.text = text;
        twit.comments = [];
        posts.push(twit);
        console.log(twit);
    }
    const removePost = function (postID) {
        for (let j = 0; j < posts.length; j++) {
            if (posts[j].id == postID) {
                posts.splice(j, 1)
            }
        }
    }
    const addComment = function (text, postID) {
        commentIdCounter++
        for (let i = 0; i < posts.length; i++) {
            if (postID == posts[i].id) {
                let comment = {}
                comment.id = "c" + commentIdCounter;
                comment.text = text;
                posts[i].comments.push(comment)
            }
        }
    }
    const removeComment = function (postID, commentID) {
        for (let i = 0; i < posts.length; i++) {
            if (posts.id = postID) {
                for (let j = 0; j < posts[i].comments.length; j++) {
                    if (posts[i].comments[j].id == commentID) 
                        posts[i].comments.splice(j, 1)
                    
                }
            }
        }

    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        addComment: addComment,
        removePost: removePost,
        removeComment: removeComment
    }
}
