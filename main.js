const renderer = Renderer()
const tweeter = Tweeter()
renderer.renderPosts(tweeter.getPosts())

$('#post').on('click', function () {
    
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on('click', '.delPost', function () {

    let postId = $(this).parent().attr('id')
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on('click', '.delComment', function () {

    let commentId = $(this).parent().data('id')
    let postId = $(this).closest('.post').attr('id')
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on('click', '.addComment', function () {
    let postId = $(this).parents('.post').attr('id')
    let input = $(this).siblings('#input1').val()
    tweeter.addComment(input, postId)

    renderer.renderPosts(tweeter.getPosts())
})
